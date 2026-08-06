import { lojaData } from "./lojaData.js";

export function renderLoja(tituloSecao) {
  const limite = lojaData.config.limiteProdutos;
  const produtosParaExibir = (lojaData.listaProdutos || []).slice(0, limite);

  let conteudoHTML = "";

  if (produtosParaExibir.length > 0) {
    conteudoHTML = produtosParaExibir
      .map(
        (produto) => `
      <div class="home-card-placeholder produto-card" data-id="${produto.id}">
        <div class="produto-foto-container">
          <img src="${produto.foto}" alt="${produto.titulo}" class="produto-img" />
        </div>
        <div class="produto-info">
          <h4 class="produto-titulo">${produto.titulo}</h4>
          <span class="produto-preco">${produto.preco}</span>
          <a href="${produto.linkExterno}" target="_blank" rel="noopener noreferrer" class="home-btn-saber-mais">
            Comprar
          </a>
        </div>
      </div>
    `,
      )
      .join("");
  } else {
    conteudoHTML = `
      <div class="home-card-empty">
        <p>${lojaData.estadoVazio.mensagem}</p>
      </div>
    `;
  }

  return `
    <section class="home-section bloco-loja">
      <h3>${tituloSecao || "Loja do Socorrista"}</h3>
      <div class="home-cards-flex-container loja-grid">
        ${conteudoHTML}
      </div>
    </section>
  `;
}
