import { fotosData } from "./fotosData.js";

// Função para injetar a estrutura da Modal no DOM caso ela ainda não exista
function garantirModalLightbox() {
  if (document.getElementById("home-lightbox-modal")) return;

  const modalHtml = `
    <div id="home-lightbox-modal" class="lightbox-overlay" style="display: none;">
      <div class="lightbox-content">
        <button type="button" class="lightbox-close" id="lightbox-close-btn">&times;</button>
        <img id="lightbox-img-original" src="" alt="Foto Ampliada" />
        <p id="lightbox-caption"></p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml); // Mantém limpo

  // Eventos para fechar a modal
  const modal = document.getElementById("home-lightbox-modal");
  const btnClose = document.getElementById("lightbox-close-btn");

  const fecharModal = () => {
    modal.style.display = "none";
    document.getElementById("lightbox-img-original").src = "";
  };

  btnClose.addEventListener("click", fecharModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });
}

// Função principal que gera o HTML do bloco de fotos
export function renderFotos(tituloSecao) {
  const limite = fotosData.config.limiteCards;
  const fotosParaExibir = (fotosData.listaFotos || []).slice(0, limite);

  let conteudoHTML = "";

  if (fotosParaExibir.length > 0) {
    conteudoHTML = fotosParaExibir
      .map(
        (foto) => `
      <div class="home-card-placeholder foto-card-item" data-original="${foto.original}" data-titulo="${foto.titulo}">
        <img src="${foto.thumb}" alt="${foto.titulo}" class="foto-thumb" />
      </div>
    `,
      )
      .join("");
  } else {
    conteudoHTML = `
      <div class="home-card-empty">
        <p>${fotosData.estadoVazio.mensagem}</p>
      </div>
    `;
  }

  // Garante a criação da modal na primeira renderização
  setTimeout(garantirModalLightbox, 0);

  return `
    <section class="home-section bloco-fotos">
      <h3>${tituloSecao || "Sessão de fotos: Turma Soc16"}</h3>
      <div class="home-cards-flex-container fotos-grid">
        ${conteudoHTML}
      </div>
    </section>
  `;
}

// Ativador global de cliques nas miniaturas (delegação de evento)
document.addEventListener("click", (e) => {
  const card = e.target.closest(".foto-card-item");
  if (!card) return;

  const originalSrc = card.getAttribute("data-original");
  const titulo = card.getAttribute("data-titulo");

  const modal = document.getElementById("home-lightbox-modal");
  const imgModal = document.getElementById("lightbox-img-original");
  const captionModal = document.getElementById("lightbox-caption");

  if (modal && imgModal) {
    imgModal.src = originalSrc;
    if (captionModal) captionModal.textContent = titulo || "";
    modal.style.display = "flex";
  }
});
