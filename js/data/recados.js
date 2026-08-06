import { recadosData } from "./recadosData.js";

// Função auxiliar para formatar a data ISO para o padrão brasileiro
function formatarDataHora(dataIso) {
  console.log("Data recebida no contrato:", dataIso);
  try {
    const [dataParte, horaParte] = dataIso.split("T");
    const [ano, mes, dia] = dataParte.split("-");
    const [hora, minuto] = horaParte.split(":");

    const resultado = `${dia}/${mes}/${ano}, ${hora}:${minuto}`;
    console.log("Data formatada gerada:", resultado);
    return resultado;
  } catch (erro) {
    console.error("Erro ao formatar data:", erro);
    return "";
  }
}

// Função principal que gera o HTML do bloco de recados
export function renderRecados(tituloSecao) {
  const limite = recadosData.config.limiteAvisos;
  const avisosParaExibir = (recadosData.listaAvisos || []).slice(0, limite);

  let conteudoHTML = "";

  if (avisosParaExibir.length > 0) {
    conteudoHTML = avisosParaExibir
      .map(
        (aviso) => `
      <div class="home-card-placeholder recado-card" data-id="${aviso.id}">
        <div class="recado-header">
          <div class="recado-info-principal">
            <h4 class="recado-titulo">${aviso.titulo}</h4>
            ${aviso.subtitulo ? `<span class="recado-subtitulo">${aviso.subtitulo}</span>` : ""}
          </div>

          <div class="data-container">
            <span class="recado-text">Atualizado em:</span>
            <span class="recado-data">${formatarDataHora(aviso.dataHora)}</span>
          </div>
        </div>

        <div class="divider"></div>

        <p class="recado-descricao">${aviso.descricao}</p>
      </div>
    `,
      )
      .join("");
  }

  return `
    <section class="home-section bloco-recados">
      <h3>${tituloSecao || "Quadro de recados e avisos"}</h3>
      <div class="home-cards-flex-container recados-grid">
        ${conteudoHTML}
      </div>
    </section>
  `;
}
