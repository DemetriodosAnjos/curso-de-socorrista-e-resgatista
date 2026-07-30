/* ==========================================================
   1. IMPORTAÇÕES DE MÓDULOS DE CONTEÚDO
   ========================================================== */
import { anatomiaHumanaBasica } from "./modulos/anatomia-humana-basica.js";
import { abordagemPrimaria } from "./modulos/abordagem-primaria.js";

/* ==========================================================
      2. AGRUPADOR CENTRAL DE DADOS
      ========================================================== */
const materiasData = {
  "anatomia-humana-basica": anatomiaHumanaBasica,
  "abordagem-primaria": abordagemPrimaria,
};

/* ==========================================================
      3. SELEÇÃO DE ELEMENTOS DO DOM
      ========================================================== */
// Elementos de Navegação e Menu
const menuList = document.getElementById("menu-list");
const sidebar = document.getElementById("sidebar-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const overlaySidebar = document.getElementById("sidebar-overlay");

// Elementos de Conteúdo Principal
const contentTitle = document.getElementById("content-title");
const contentBody = document.getElementById("content-body");

// Botões de Ação
const downloadLink = document.getElementById("download-link");
const shareBtn = document.getElementById("share-btn");

// Estado Global da Aplicação
let materiaAtiva = null;

/* ==========================================================
      FUNÇÃO VISUALIZAR PDF (PROVISORIA)
      ========================================================== */
async function visualizarPDF() {
  const elementoOriginal = document.getElementById("content-article");
  const containerScroll =
    document.querySelector(".content-area") || document.body;

  if (!elementoOriginal) {
    alert("Erro: Elemento de conteúdo não encontrado.");
    return;
  }

  // 1. Overlay de carregamento
  const overlay = document.createElement("div");
  overlay.className = "pdf-loading-overlay";
  overlay.innerHTML = `
          <div class="pdf-loading-card">
            <div class="pdf-spinner"></div>
            <p class="pdf-loading-text">Gerando visualização...</p>
          </div>
        `;
  document.body.appendChild(overlay);

  const estiloOriginalContainer = containerScroll.style.overflow;
  const estiloOriginalElemento = elementoOriginal.style.height;

  try {
    containerScroll.style.overflow = "visible";
    elementoOriginal.style.height = "auto";

    await new Promise((resolve) => setTimeout(resolve, 300));

    // Mesmas configurações do seu motor de PDF
    const opcoes = {
      margin: [12, 10, 15, 10],
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
        mode: ["css", "legacy"],
        avoid: [
          ".pdf-block",
          "img",
          "figure",
          "table",
          "tr",
          ".infografico-container",
          ".tabela-doacao-container",
          "h1",
          "h2",
          "h3",
          "h4",
          "blockquote",
        ],
      },
    };

    const worker = html2pdf().set(opcoes).from(elementoOriginal);
    await worker.toContainer().toCanvas().toPdf();

    const pdf = await worker.get("pdf");

    // Injeção de Rodapé e Paginação
    if (pdf) {
      const totalPaginas = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPaginas; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(100);

        const larguraPagina = pdf.internal.pageSize.getWidth();
        const alturaPagina = pdf.internal.pageSize.getHeight();

        pdf.setDrawColor(200, 200, 200);
        pdf.line(10, alturaPagina - 12, larguraPagina - 10, alturaPagina - 12);

        pdf.text(
          "Todos os Direitos Reservados | Criado por: Demetrio dos Anjos",
          10,
          alturaPagina - 7,
        );

        pdf.text(
          `Página ${i} de ${totalPaginas}`,
          larguraPagina - 10,
          alturaPagina - 7,
          { align: "right" },
        );
      }
    }

    // 2. GERAÇÃO DA URL BLOB E ABERTURA EM NOVA ABA
    const pdfBlob = pdf.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);

    // Abre o PDF gerado no visualizador nativo do navegador
    window.open(blobUrl, "_blank");

    overlay.remove();
  } catch (erro) {
    console.error("Erro ao gerar pré-visualização do PDF:", erro);
    alert("Falha ao gerar visualização.");
    overlay.remove();
  } finally {
    containerScroll.style.overflow = estiloOriginalContainer;
    elementoOriginal.style.height = estiloOriginalElemento;
  }
}

// Vinculação do evento no seu script de inicialização do app.js
document.addEventListener("DOMContentLoaded", () => {
  const btnVisualizar = document.getElementById("visualizar");
  if (btnVisualizar) {
    btnVisualizar.addEventListener("click", (e) => {
      e.preventDefault();
      visualizarPDF();
    });
  }
});

/* ==========================================================
      4. CONTROLE DO MENU RESPONSIVO (HAMBÚRGUER / GAVETA MOBILE)
      ========================================================== */

/**
 * Abre a sidebar no mobile e ativa a camada de esmaecimento do fundo
 */
function abrirSidebar() {
  if (sidebar) sidebar.classList.add("active");
  if (overlaySidebar) overlaySidebar.classList.add("active");
}

/**
 * Fecha a sidebar no mobile e remove o esmaecimento do fundo
 */
function fecharSidebar() {
  if (sidebar) sidebar.classList.remove("active");
  if (overlaySidebar) overlaySidebar.classList.remove("active");
}

// Event Listeners para acionamento do Menu Hambúrguer e Overlay
if (hamburgerBtn) hamburgerBtn.addEventListener("click", abrirSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", fecharSidebar);
if (overlaySidebar) overlaySidebar.addEventListener("click", fecharSidebar);

// Tecla ESC fecha o menu mobile se estiver aberto
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar?.classList.contains("active")) {
    fecharSidebar();
  }
});

/* ==========================================================
      5. RENDERIZAÇÃO DO MENU LATERAL DINÂMICO
      ========================================================== */
if (menuList) {
  menuList.innerHTML = "";

  Object.keys(materiasData).forEach((key) => {
    const materia = materiasData[key];
    if (!materia) return;

    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = materia.titulo || key;
    button.classList.add("menu-item-btn");

    button.addEventListener("click", () => {
      carregarMateria(key);

      // Fecha a gaveta no mobile após selecionar uma matéria
      if (window.innerWidth <= 1024) {
        fecharSidebar();
      }
    });

    li.appendChild(button);
    menuList.appendChild(li);
  });
}

/* ==========================================================
      6. CARREGAMENTO DE CONTEÚDO NA TELA
      ========================================================== */
function carregarMateria(id) {
  const materia = materiasData[id];
  if (!materia) return;

  materiaAtiva = materia;

  if (contentTitle) contentTitle.textContent = "";

  const turmaInfo = materia.turma || "Soc16";
  const professorInfo = materia.professores || "Não informado";

  const blocoCabecalhoETitulo = `
       <!-- Cabeçalho Institucional para Leitura e PDF -->
       <div class="pdf-header" style="border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 15px;">
         <h3 style="margin: 0; font-size: 1.1rem; color: #222; font-weight: 700;">
           UNITEC - Curso para Socorristas e Resgatistas 2026
         </h3>
         <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #666;">
           <strong>Turma:</strong> ${turmaInfo} &nbsp;|&nbsp; 
           <strong>Professor:</strong> ${professorInfo}
         </p>
       </div>
   
       <!-- Título Principal da Matéria -->
       <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a1a;">
         ${materia.titulo}
       </h2>
     `;

  if (contentBody) {
    contentBody.innerHTML = blocoCabecalhoETitulo + (materia.corpo || "");
  }

  // Revelar botões de ação após carregar o conteúdo
  if (downloadLink) {
    downloadLink.removeAttribute("hidden");
    downloadLink.style.display = "inline-flex";
  }

  if (shareBtn) {
    shareBtn.removeAttribute("hidden");
    shareBtn.style.display = "inline-flex";
  }

  // Atualizar a URL com a matéria ativa sem recarregar a página
  window.history.pushState(
    null,
    materia.titulo,
    `?materia=${materia.slug || id}`,
  );
}

/* ==========================================================
   7. GERAÇÃO DE PDF E DOWNLOAD (SUPORTE MULTI-DEVICE)
   ========================================================== */
async function baixarPDF() {
  const elementoOriginal = document.getElementById("content-article");
  const containerScroll =
    document.querySelector(".content-area") || document.body;

  if (!elementoOriginal) {
    alert("Erro: Elemento de conteúdo não encontrado.");
    return;
  }

  // 1. Cria e exibe o Overlay de Carregamento
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

  // Armazena estilos originais para restauração pós-processamento
  const estiloOriginalContainer = containerScroll.style.overflow;
  const estiloOriginalElemento = elementoOriginal.style.height;
  const posicaoScrollOriginal = window.scrollY;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth < 768;

  try {
    // Liberar limites de overflow para o html2canvas medir a altura total sem travar
    containerScroll.style.overflow = "visible";
    elementoOriginal.style.height = "auto";

    if (isMobile) {
      window.scrollTo(0, 0);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    const titulomateria = materiaAtiva?.titulo || "materia";
    const nomeArquivo =
      titulomateria
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-") + ".pdf";

    // Configurações otimizadas do html2pdf.js sem conflito de algoritmo
    const opcoes = {
      margin: [12, 10, 15, 10], // Topo, Esquerda, Baixo, Direita (mm)
      filename: nomeArquivo,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        scrollY: isMobile ? 0 : -window.scrollY,
        scrollX: 0,
        windowWidth: isMobile ? 768 : document.documentElement.offsetWidth,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: {
        mode: ["css", "legacy"], // Removido 'avoid-all' para parar o conflito
        avoid: [
          ".pdf-block",
          "img",
          "figure",
          "table",
          "tr",
          ".infografico-container",
          ".tabela-doacao-container",
          "h1",
          "h2",
          "h3",
          "h4",
          "blockquote",
        ],
      },
    };

    const worker = html2pdf().set(opcoes).from(elementoOriginal);
    await worker.toContainer().toCanvas().toPdf();

    const pdf = await worker.get("pdf");

    // Injeção de Rodapé e Paginação via jsPDF
    if (pdf) {
      const totalPaginas = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPaginas; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(100);

        const larguraPagina = pdf.internal.pageSize.getWidth();
        const alturaPagina = pdf.internal.pageSize.getHeight();

        // Linha Divisória do Rodapé
        pdf.setDrawColor(200, 200, 200);
        pdf.line(10, alturaPagina - 12, larguraPagina - 10, alturaPagina - 12);

        // Texto do Rodapé Esquerdo
        pdf.text(
          "Todos os Direitos Reservados | Criado por: Demetrio dos Anjos",
          10,
          alturaPagina - 7,
        );

        // Numeração da Página
        pdf.text(
          `Página ${i} de ${totalPaginas}`,
          larguraPagina - 10,
          alturaPagina - 7,
          { align: "right" },
        );
      }
    }

    await worker.save();

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
    containerScroll.style.overflow = estiloOriginalContainer;
    elementoOriginal.style.height = estiloOriginalElemento;

    if (isMobile) {
      window.scrollTo(0, posicaoScrollOriginal);
    }
  }
}

/* ==========================================================
      8. EVENTOS DOS BOTÕES DE AÇÃO (DOWNLOAD E COMPARTILHAR)
      ========================================================== */
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

/* ==========================================================
      9. VERIFICAÇÃO DE ROTA INICIAL (QUERY PARAMETER 'materia')
      ========================================================== */
const urlParams = new URLSearchParams(window.location.search);
const materiaParam = urlParams.get("materia");

if (materiaParam) {
  const keyEncontrada = Object.keys(materiasData).find(
    (key) => materiasData[key]?.slug === materiaParam || key === materiaParam,
  );
  if (keyEncontrada) carregarMateria(keyEncontrada);
}
