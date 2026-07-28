// 1. Importações dos arquivos de conteúdo
import { anatomiaHumanaBasica } from "./modulos/anatomia-humana-basica.js";
import { abordagemPrimaria } from "./modulos/abordagem-primaria.js";

// 2. Agrupador central de dados
const materiasData = {
  "anatomia-humana-basica": anatomiaHumanaBasica,
  "abordagem-primaria": abordagemPrimaria,
};

// 3. Seleção de elementos do DOM
const menuList = document.getElementById("menu-list");
const contentTitle = document.getElementById("content-title");
const contentBody = document.getElementById("content-body");
const downloadLink = document.getElementById("download-link");
const shareBtn = document.getElementById("share-btn");

let materiaAtiva = null;

// 4. Gerar Menu Lateral dinamicamente
if (menuList) {
  menuList.innerHTML = "";

  Object.keys(materiasData).forEach((key) => {
    const materia = materiasData[key];
    if (!materia) return;

    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = materia.titulo || key;
    button.classList.add("menu-item-btn");
    button.addEventListener("click", () => carregarMateria(key));
    li.appendChild(button);
    menuList.appendChild(li);
  });
}

// 5. Carregar Conteúdo na Tela
function carregarMateria(id) {
  const materia = materiasData[id];
  if (!materia) return;

  materiaAtiva = materia;

  if (contentTitle) contentTitle.textContent = "";

  const turmaInfo = materia.turma || "Soc16";
  const professorInfo = materia.professores || "Não informado";

  const blocoCabecalhoETitulo = `
    <!-- 1. Cabeçalho Institucional -->
    <div class="pdf-header" style="border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 15px;">
      <h3 style="margin: 0; font-size: 1.1rem; color: #222; font-weight: 700;">
        UNITEC - Curso para Socorristas e Resgatistas 2026
      </h3>
      <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #666;">
        <strong>Turma:</strong> ${turmaInfo} &nbsp;|&nbsp; 
        <strong>Professor:</strong> ${professorInfo}
      </p>
    </div>

    <!-- 2. Título Principal da Matéria -->
    <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a1a;">
      ${materia.titulo}
    </h2>
  `;

  if (contentBody) {
    contentBody.innerHTML = blocoCabecalhoETitulo + (materia.corpo || "");
  }

  // Revelar botões de ação
  if (downloadLink) {
    downloadLink.removeAttribute("hidden");
    downloadLink.style.display = "inline-flex";
  }

  if (shareBtn) {
    shareBtn.removeAttribute("hidden");
    shareBtn.style.display = "inline-flex";
  }

  // Atualizar URL
  window.history.pushState(
    null,
    materia.titulo,
    `?materia=${materia.slug || id}`,
  );
}

// 6. Função responsável por GERAR E BAIXAR o PDF com Feedback
async function baixarPDF() {
  const elementoOriginal = document.getElementById("content-article");
  const containerScroll =
    document.querySelector(".content-area") || document.body;

  if (!elementoOriginal) {
    alert("Erro: Elemento de conteúdo não encontrado.");
    return;
  }

  // 1. Exibe o Overlay de Loading
  const overlay = document.createElement("div");
  overlay.className = "pdf-loading-overlay";

  const card = document.createElement("div");
  card.className = "pdf-loading-card";

  const spinner = document.createElement("div");
  spinner.className = "pdf-spinner";

  const mensagem = document.createElement("p");
  mensagem.className = "pdf-loading-text";
  mensagem.textContent = "Gerando PDF...";

  card.appendChild(spinner);
  card.appendChild(mensagem);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // Guardamos as propriedades originais de estilo para restaurar depois
  const estiloOriginalContainer = containerScroll.style.overflow;
  const estiloOriginalElemento = elementoOriginal.style.height;

  try {
    // 2. Destrava temporariamente os limites da área para o html2canvas ler a altura real total
    containerScroll.style.overflow = "visible";
    elementoOriginal.style.height = "auto";

    // Aguarda um ciclo de renderização do DOM
    await new Promise((resolve) => setTimeout(resolve, 150));

    const titulomateria = materiaAtiva?.titulo || "materia";
    const nomeArquivo =
      titulomateria
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-") + ".pdf";

    // 3. Opções ajustadas diretamente no elemento real
    const opcoes = {
      margin: [12, 10, 18, 10], // [Topo, Esquerda, Baixo, Direita] em mm
      filename: nomeArquivo,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        scrollY: -window.scrollY,
        scrollX: 0,
        windowWidth: document.documentElement.offsetWidth,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: {
        mode: ["avoid-all", "css"], // Força a biblioteca a empurrar elementos para a próxima página em vez de fatiar
        avoid: [
          "img",
          "svg",
          "figure",
          ".infografico-container",
          "p",
          "li",
          "h2",
          "h3",
        ],
      },
    };

    const worker = html2pdf().set(opcoes).from(elementoOriginal);

    await worker.toContainer().toCanvas().toPdf();

    const pdf = await worker.get("pdf");

    if (pdf) {
      const totalPaginas = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPaginas; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(100);

        const larguraPagina = pdf.internal.pageSize.getWidth();
        const alturaPagina = pdf.internal.pageSize.getHeight();

        // Linha do Rodapé
        pdf.setDrawColor(200, 200, 200);
        pdf.line(10, alturaPagina - 12, larguraPagina - 10, alturaPagina - 12);

        // Texto do Rodapé
        pdf.text(
          "Todos os Direitos Reservados | Criado por: Demetrio dos Anjos",
          10,
          alturaPagina - 7,
        );

        // Numeração de Páginas
        pdf.text(
          `Página ${i} de ${totalPaginas}`,
          larguraPagina - 10,
          alturaPagina - 7,
          { align: "right" },
        );
      }
    }

    await worker.save();

    // Feedback de Sucesso
    spinner.style.display = "none";
    mensagem.textContent = "Download concluído!";

    setTimeout(() => {
      overlay.remove();
    }, 1200);
  } catch (erro) {
    console.error("Falha detalhada ao gerar o PDF:", erro);
    alert("Ocorreu um erro ao gerar o PDF. Verifique o console.");
    overlay.remove();
  } finally {
    // 4. Restaura os estilos originais da tela imediatamente
    containerScroll.style.overflow = estiloOriginalContainer;
    elementoOriginal.style.height = estiloOriginalElemento;
  }
}
// 7. Evento do Botão de Download (escopo global do módulo)
if (downloadLink) {
  downloadLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (materiaAtiva) {
      baixarPDF();
    } else {
      alert("Por favor, selecione uma matéria primeiro.");
    }
  });
}

// 8. Compartilhamento Nativo
shareBtn?.addEventListener("click", async () => {
  if (!materiaAtiva) return;

  if (navigator.share) {
    try {
      await navigator.share({
        title: materiaAtiva.titulo,
        text: `Confira o material de estudo sobre: ${materiaAtiva.titulo}`,
        url: window.location.href,
      });
    } catch (err) {
      console.log("Compartilhamento cancelado", err);
    }
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  }
});

// 9. Verificar rota de URL ao carregar a página
const urlParams = new URLSearchParams(window.location.search);
const materiaParam = urlParams.get("materia");
if (materiaParam) {
  const keyEncontrada = Object.keys(materiasData).find(
    (key) => materiasData[key]?.slug === materiaParam || key === materiaParam,
  );
  if (keyEncontrada) carregarMateria(keyEncontrada);
}
