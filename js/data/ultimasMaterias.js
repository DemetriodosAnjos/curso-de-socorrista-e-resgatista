import { ultimasMateriasData } from "./ultimasMateriasData.js";

// Função privada para buscar do localStorage com segurança
function getHistoricoAcessos() {
  try {
    const dadosSalvos = localStorage.getItem("ultimasMaterias");
    if (!dadosSalvos) return [];

    const parsed = JSON.parse(dadosSalvos);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Erro ao ler o histórico de matérias do localStorage:", error);
    return [];
  }
}

// Função principal que exporta o HTML pronto do bloco
export function renderUltimasMaterias(
  tituloSecao = "Últimas Matérias Acessadas",
) {
  const materiasRecentes = getHistoricoAcessos();
  const limite = 3;
  const itensParaExibir = materiasRecentes.slice(0, limite);

  if (itensParaExibir.length === 0) {
    return `
      <section class="home-section bloco-ultimas-materias">
        <h3 class="home-section-title">${tituloSecao}</h3>
        <p class="home-empty-text">Nenhuma matéria acessada recentemente. Escolha uma no menu lateral para começar!</p>
      </section>
    `;
  }

  const cardsHTML = itensParaExibir
    .map((materia) => {
      // Define o caminho da imagem de capa com base na key da matéria
      // Exemplo: assets/img/materias/radio-codigo/capa.jpg ou usando o próprio key:
      const imagemSrc = `images/${materia.key}/capa.png`;

      return `
        <div class="home-card-placeholder materia-recente-card" data-key="${materia.key}">
          <div class="materia-thumb-wrapper">
            <img src="${imagemSrc}" alt="${materia.titulo}" class="materia-thumb" onerror="this.src='assets/img/default.jpg'">
          </div>
          <span class="materia-badge">${materia.turma}</span>
          <h4 class="materia-recente-titulo">${materia.titulo}</h4>
          <button type="button" class="home-btn-continuar-estudo" data-key="${materia.key}">
            Continuar estudando
          </button>
        </div>
      `;
    })
    .join("");

  return `
    <section class="home-section bloco-ultimas-materias">
      <h3 class="home-section-title">${tituloSecao}</h3>
      <div class="ultimas-materias-grid">
        ${cardsHTML}
      </div>
    </section>
  `;
}
