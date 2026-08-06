import homeData from "./homeData.js";
import { renderUltimasMaterias } from "./ultimasMaterias.js";
import { renderRecados } from "./recados.js";
import { renderFotos } from "./fotos.js";
import { renderLoja } from "./loja.js";

export function initHome(container) {
  console.log("Objeto completo recebido:", homeData);
  if (!container) {
    console.error("Container principal da Home não encontrado.");
    return;
  }

  // Renderiza a estrutura macro baseada no contrato e na sua divisão de blocos
  container.innerHTML = `
    <div class="home-wrapper">
      
      <!-- Bloco 1 - Boas-vindas -->
      <h2>${homeData.secoes.boasVindas.titulo}</h2>

      <!-- Bloco 2 - Últimas Matérias (A função já traz a section completa) -->
      ${renderUltimasMaterias(homeData.secoes.ultimasMaterias.titulo)}

      <!-- Bloco 3 - Quadro de Recados -->
      ${renderRecados(homeData.secoes.recados.titulo)}

      <!-- Bloco 4 - Sessão de Fotos -->
      ${renderFotos(homeData.secoes.fotos.titulo)}

      <!-- Bloco 5 - Loja do Socorrista (Com links de afiliado) -->
      ${renderLoja(homeData.secoes.loja.titulo)}

    </div>

  `;
}
