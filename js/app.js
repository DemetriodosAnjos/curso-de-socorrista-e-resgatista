/* ==========================================================
      IMPORT MATERIAS
      ========================================================== */

import { anatomiaHumanaBasica } from "./modulos/anatomia-humana-basica.js";
import { abordagemPrimaria } from "./modulos/abordagem-primaria.js";
import { radioCodigo } from "./modulos/radio-codigo.js";
import { cinematicaTrauma } from "./modulos/cinematica-trauma.js";
import { abordagemSecundaria } from "./modulos/abordagem-secundaria.js";
import { biosegurancaEticaAnatomia } from "./modulos/bioseguranca-etica-anatomia.js";
import { eticaBioetica } from "./modulos/etica-bioetica.js";
import { historiaAph } from "./modulos/historia-aph.js";

// 2. Imports dos Simulados
import { simuladoBioetica } from "./data/simulado-bioetica.js";
import { simuladoAlfabetoFonetico } from "./data/simulado-alfabeto-fonetico.js";
import { simuladoAbordagemPrimaria } from "./data/simulado-abordagem-primaria.js";
import { simuladoAbordagemSecundaria } from "./data/simulado-abordagem-secundaria.js";
import { simuladoCodigoQ } from "./data/simulado-codigo-q.js";
import { simuladoEscalaGasglow } from "./data/simulado-escala-gasglow.js";

import { initSidebar, initSimulado } from "./data/sidebar.js";

/* ==========================================================
      AGRUPADOR CENTRAL DE DADOS
      ========================================================== */
const materiasData = {
  "radio-codigo": radioCodigo,
  "abordagem-secundaria": abordagemSecundaria,
  "abordagem-primaria": abordagemPrimaria,
  "cinematica-trauma": cinematicaTrauma,
  "etica-bioetica": eticaBioetica,
  "anatomia-humana-basica": anatomiaHumanaBasica,
  //"bioseguranca-etica-anatomia": biosegurancaEticaAnatomia,
  //"historia-aph": historiaAph,
};

/* ==========================================================
      2.1 MAPEAMENTO DOS SIMULADOS
   ========================================================== */
const simuladosMap = {
  "codigo-q": simuladoCodigoQ,
  "escala-gasglow": simuladoEscalaGasglow,
  "alfabeto-fonetico": simuladoAlfabetoFonetico,
  "abordagem-primaria": simuladoAbordagemPrimaria,
  "abordagem-secundaria": simuladoAbordagemSecundaria,
  //"etica-bioetica": simuladoBioetica,
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
const contentActions = document.getElementById("content-actions");
const downloadLink = document.getElementById("download-link");
const shareBtn = document.getElementById("share-btn");

// Estado Global da Aplicação
let materiaAtiva = null;

/* ==========================================================
     INICIALIZAÇÃO DO DOM
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Define o estado inicial correto dos FABs ao carregar a página
  atualizarEstadoFABs("home");

  initSidebar({
    materias: materiasData,
    simulados: simuladosMap,
    onSelect: async ({ key, type }) => {
      if (type === "home") {
        // Limpa os parâmetros da URL (remove o ?materia=...)
        window.history.pushState({}, "", window.location.pathname);

        // Atualiza os FABs para o estado da Home
        atualizarEstadoFABs("home");

        if (!document.getElementById("home-css")) {
          const link = document.createElement("link");
          link.id = "home-css";
          link.rel = "stylesheet";
          link.href = "css/home.css";
          document.head.appendChild(link);
        }

        const { initHome } = await import("./data/home.js");
        const contentBody = document.getElementById("content-body");
        initHome(contentBody);
      } else if (type === "materia") {
        carregarMateria(key);
      } else if (type === "simulado") {
        const contratoSimulado = simuladosMap[key];
        if (contratoSimulado && typeof initSimulado === "function") {
          initSimulado(contratoSimulado);
        }
      }

      if (window.innerWidth <= 1024) fecharSidebar();
    },
  });
});

// Delegação global de cliques para os cards recentes na Home
document.addEventListener("click", (e) => {
  const btnRecente = e.target.closest(
    ".materia-recente-card, .home-btn-continuar-estudo",
  );
  if (!btnRecente) return;

  const key = btnRecente.dataset.key;
  if (key && typeof carregarMateria === "function") {
    carregarMateria(key);
  }
});

/* ==========================================================
       FUNÇÃO ESTADO FABs
       ========================================================== */
function atualizarEstadoFABs(modo) {
  // Padronizado para usar IDs consistentes com o seu HTML
  const btnVisualizar = document.getElementById("visualizar");
  const btnDownload = document.getElementById("download-link");
  const btnShare = document.getElementById("share-btn");

  if (modo === "home") {
    if (btnVisualizar) btnVisualizar.style.display = "none"; // Oculto na Home
    if (btnDownload) btnDownload.style.display = "none"; // Oculto na Home
    if (btnShare) btnShare.style.display = "flex"; // Visível na Home
  } else if (modo === "materia") {
    if (btnVisualizar) btnVisualizar.style.display = "flex";
    if (btnDownload) btnDownload.style.display = "flex";
    if (btnShare) btnShare.style.display = "flex";
  }
}

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
  if (sidebar) sidebar.classList.add("is-open");
  if (overlaySidebar) overlaySidebar.classList.add("is-active");
}

/**
 * Fecha a sidebar no mobile e remove o esmaecimento do fundo
 */
function fecharSidebar() {
  if (sidebar) sidebar.classList.remove("is-open");
  if (overlaySidebar) overlaySidebar.classList.remove("is-active");
}

// Event Listeners para acionamento do Menu Hambúrguer e Overlay
if (hamburgerBtn) hamburgerBtn.addEventListener("click", abrirSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", fecharSidebar);
if (overlaySidebar) overlaySidebar.addEventListener("click", fecharSidebar);

// Tecla ESC fecha o menu mobile se estiver aberto
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar?.classList.contains("is-open")) {
    fecharSidebar();
  }
});

/* ==========================================================
   6. CARREGAMENTO DE CONTEÚDO NA TELA
   ========================================================== */
function carregarMateria(id) {
  const materia = materiasData[id];
  if (!materia) return;

  materiaAtiva = materia;
  atualizarEstadoFABs("materia");

  // ==========================================
  // SALVAR NO LOCALSTORAGE (ÚLTIMAS MATÉRIAS)
  // ==========================================
  try {
    const historicoSalvo =
      JSON.parse(localStorage.getItem("ultimasMaterias")) || [];

    // Cria o objeto resumido da matéria atual
    const novaMateriaHistorico = {
      key: id,
      titulo: materia.titulo,
      turma: materia.turma || "Soc16",
      dataAcesso: new Date().toISOString(),
    };

    // Remove se já existir (para evitar duplicadas) e coloca no topo
    const historicoAtualizado = [
      novaMateriaHistorico,
      ...historicoSalvo.filter((item) => item.key !== id),
    ].slice(0, 3); // Mantém apenas as 3 últimas

    localStorage.setItem(
      "ultimasMaterias",
      JSON.stringify(historicoAtualizado),
    );
  } catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
  }
  // ==========================================

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

  // REVELAR AÇÕES E BOTÕES FLUTUANTES (FABs)
  if (contentActions) contentActions.classList.remove("is-hidden");
  if (downloadLink) downloadLink.removeAttribute("hidden");
  if (shareBtn) shareBtn.removeAttribute("hidden");

  // ATUALIZAR A URL
  window.history.pushState(
    null,
    materia.titulo,
    `?materia=${materia.slug || id}`,
  );

  // ==========================================================
  // ATIVAÇÃO DO BOTÃO NA SIDEBAR
  // ==========================================================
  // 1. Limpa o estado ativo de todos os botões e LIs do menu
  const todosOsItens = document.querySelectorAll(
    "#menu-list button, #menu-list li",
  );
  todosOsItens.forEach((el) => el.classList.remove("active"));

  // 2. Busca o botão pelo data-key (ou atributos alternativos de contrato)
  const botaoAlvo = document.querySelector(
    `#menu-list button[data-key="${id}"], #menu-list [data-materia="${id}"], #menu-list [data-slug="${materia.slug || id}"]`,
  );

  // 3. Aplica a classe active diretamente no botão e no <li> pai
  if (botaoAlvo) {
    botaoAlvo.classList.add("active");
    const liPai = botaoAlvo.closest("li");
    if (liPai) {
      liPai.classList.add("active");
    }
  }
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
  if (keyEncontrada) {
    carregarMateria(keyEncontrada);
  }
} else {
  // Se não houver matéria na URL, carrega a Home automaticamente ao iniciar
  (async () => {
    if (!document.getElementById("home-css")) {
      const link = document.createElement("link");
      link.id = "home-css";
      link.rel = "stylesheet";
      link.href = "css/home.css";
      document.head.appendChild(link);
    }

    const { initHome } = await import("./data/home.js");
    const contentBody = document.getElementById("content-body");
    initHome(contentBody);
  })();
}
/* ==========================================================
   10. CONTROLE DO SIMULADO (DELEGAÇÃO DE EVENTO)
   ========================================================== */
document.addEventListener("click", (event) => {
  const btnSimulado = event.target.closest(".btn-simulado");

  if (!btnSimulado) return;

  event.preventDefault();

  const simuladoSlug = btnSimulado.getAttribute("data-simulado");
  const contratoSimulado = simuladosMap[simuladoSlug];

  if (contratoSimulado) {
    try {
      // Passa o contrato e o container principal do app
      initSimulado(contratoSimulado, contentBody);
    } catch (error) {
      console.error("Erro crítico dentro de initSimulado:", error);
    }
  } else {
    console.error(`Simulado não encontrado para o slug: ${simuladoSlug}`);
  }
});
