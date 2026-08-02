import { storageService } from "./services/storage-service.js";

let simuladoOriginal = null;
let simuladoAtual = null;
let indicePerguntaAtual = 0;
let respostasUsuario = {}; // Ex: { 1: "B", 2: "A" }

/**
 * Algoritmo Fisher-Yates para embaralhar arrays de forma não enviesada
 * @param {Array} array
 * @returns {Array} Novo array embaralhado
 */
function embaralharArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Prepara o objeto do simulado randomizando questões e opções,
 * remapeando as letras das alternativas (A, B, C...) para manter a integridade visual.
 * @param {Object} contrato
 * @returns {Object} Novo objeto com questões e opções embaralhadas
 */
function prepararSimuladoRandomizado(contrato) {
  const letras = ["A", "B", "C", "D", "E", "F", "G"];

  // Clone profundo do array de questões para evitar mutações indesejadas no módulo importado
  const questoesCopia = JSON.parse(JSON.stringify(contrato.questoes));

  // 1. Embaralha a ordem das questões
  const questoesEmbaralhadas = embaralharArray(questoesCopia);

  // 2. Embaralha as opções de cada questão e ajusta o ID/Resposta
  const questoesProcessadas = questoesEmbaralhadas.map((q) => {
    const opcoesEmbaralhadas = embaralharArray(q.opcoes);
    let novaRespostaCorreta = q.respostaCorreta;

    // Remapeia os IDs das opções para A, B, C, D... na nova ordem
    const opcoesRemapeadas = opcoesEmbaralhadas.map((opcao, idx) => {
      const novoId = letras[idx];

      // Se a opção atual era a resposta correta original, atualiza para o novo ID de posição
      if (opcao.id === q.respostaCorreta) {
        novaRespostaCorreta = novoId;
      }

      return {
        ...opcao,
        id: novoId,
      };
    });

    return {
      ...q,
      opcoes: opcoesRemapeadas,
      respostaCorreta: novaRespostaCorreta,
    };
  });

  return {
    ...contrato,
    questoes: questoesProcessadas,
  };
}

/**
 * Inicializa e abre a modal do simulado
 * @param {Object} contratoSimulado - Objeto importado de /data/simulado-*.js
 */
export function initSimulado(contratoSimulado) {
  simuladoOriginal = contratoSimulado;
  simuladoAtual = prepararSimuladoRandomizado(contratoSimulado);
  indicePerguntaAtual = 0;
  respostasUsuario = {};

  // Remove modal pré-existente se houver
  fecharSimulado();

  const overlay = document.createElement("div");
  overlay.className = "simulado-overlay";
  overlay.id = "simulado-modal";

  overlay.innerHTML = `
    <div class="simulado-container">
      <header class="simulado-header">
        <h2>Simulado: ${simuladoAtual.materiaNome}</h2>
        <button type="button" class="simulado-btn-close" id="simulado-btn-close" aria-label="Fechar">&times;</button>
      </header>
      <hr class="simulado-divider" />
      <div class="simulado-body" id="simulado-body">
        <!-- Conteúdo dinâmico (pergunta ou resultado) -->
      </div>
      <footer class="simulado-footer" id="simulado-footer">
        <!-- Botões dinâmicos -->
      </footer>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden"; // Impede scroll na página de fundo

  // Event Listeners base
  document
    .getElementById("simulado-btn-close")
    .addEventListener("click", fecharSimulado);

  renderizarPergunta();
}

/**
 * Renderiza a pergunta atual
 */
function renderizarPergunta() {
  const body = document.getElementById("simulado-body");
  const footer = document.getElementById("simulado-footer");
  const questao = simuladoAtual.questoes[indicePerguntaAtual];
  const totalQuestoes = simuladoAtual.questoes.length;

  // Header com progresso (mantém numeração crescente 1, 2, 3...)
  body.innerHTML = `
    <div class="simulado-step-info">Questão ${indicePerguntaAtual + 1} de ${totalQuestoes}</div>
    <h3 class="simulado-enunciado">${questao.enunciado}</h3>
    <ul class="simulado-opcoes">
      ${questao.opcoes
        .map((opcao) => {
          const isSelected = respostasUsuario[questao.id] === opcao.id;
          return `
          <li class="simulado-opcao ${isSelected ? "is-active" : ""}" data-id="${opcao.id}">
            <span class="simulado-opcao-badge">${opcao.id}</span>
            <span class="simulado-opcao-texto">${opcao.texto}</span>
          </li>
        `;
        })
        .join("")}
    </ul>
  `;

  // Controla botões do footer
  const eUltima = indicePerguntaAtual === totalQuestoes - 1;
  const ePrimeira = indicePerguntaAtual === 0;

  footer.innerHTML = `
    <button type="button" class="simulado-btn simulado-btn-secundario" id="btn-anterior" ${ePrimeira ? "disabled" : ""}>Anterior</button>
    <button type="button" class="simulado-btn simulado-btn-primario" id="btn-proxima">
      ${eUltima ? "Enviar" : "Próxima"}
    </button>
  `;

  // Listeners das opções
  const elementosOpcao = body.querySelectorAll(".simulado-opcao");
  elementosOpcao.forEach((el) => {
    el.addEventListener("click", () => {
      elementosOpcao.forEach((opt) => opt.classList.remove("is-active"));
      el.classList.add("is-active");
      respostasUsuario[questao.id] = el.getAttribute("data-id");
    });
  });

  // Listeners dos botões de navegação
  document.getElementById("btn-anterior").addEventListener("click", () => {
    if (indicePerguntaAtual > 0) {
      indicePerguntaAtual--;
      renderizarPergunta();
    }
  });

  document.getElementById("btn-proxima").addEventListener("click", () => {
    if (!respostasUsuario[questao.id]) {
      alert("Por favor, selecione uma alternativa antes de prosseguir.");
      return;
    }

    if (eUltima) {
      processarResultado();
    } else {
      indicePerguntaAtual++;
      renderizarPergunta();
    }
  });
}

/**
 * Calcula a nota e exibe a tela de resultado
 */
function processarResultado() {
  let acertos = 0;
  const totalQuestoes = simuladoAtual.questoes.length;

  simuladoAtual.questoes.forEach((q) => {
    if (respostasUsuario[q.id] === q.respostaCorreta) {
      acertos++;
    }
  });

  const nota = Math.round((acertos / totalQuestoes) * 100);

  // Salva no localStorage
  storageService.salvarResultado({
    simuladoId: simuladoAtual.id,
    materiaNome: simuladoAtual.materiaNome,
    nota: nota,
  });

  renderizarTelaResultado(nota);
}

/**
 * Renderiza o gabarito detalhado e a nota
 */
function renderizarTelaResultado(nota) {
  const body = document.getElementById("simulado-body");
  const footer = document.getElementById("simulado-footer");

  // Determina a faixa de feedback
  let feedback = simuladoAtual.feedbacks.muitoRuim;
  if (nota >= 91) feedback = simuladoAtual.feedbacks.muitoBom;
  else if (nota >= 71) feedback = simuladoAtual.feedbacks.bom;
  else if (nota >= 51) feedback = simuladoAtual.feedbacks.regular;
  else if (nota >= 31) feedback = simuladoAtual.feedbacks.ruim;

  const historico = storageService.obterHistorico();

  body.innerHTML = `
    <div class="simulado-resultado-header">
      <div class="simulado-score-badge ${nota >= 71 ? "is-success" : "is-warning"}">
        <span class="simulado-score-number">${nota}</span>
        <span class="simulado-score-max">/100</span>
      </div>
      <h3 class="simulado-resultado-titulo">${feedback.titulo}</h3>
      <p class="simulado-resultado-msg">${feedback.mensagem}</p>
    </div>

    <!-- Histórico das últimas tentativas -->
    <div class="simulado-historico-box">
      <h4>Últimas Tentativas:</h4>
      <ul>
        ${historico
          .map(
            (h) => `
          <li>
            <span>${h.dataHora}</span>
            <strong>${h.nota} pts</strong>
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>

    <hr class="simulado-divider" />
    <h4 class="simulado-gabarito-titulo">Gabarito Comentado</h4>

    <!-- Lista com Scroll para revisão -->
    <div class="simulado-gabarito-lista">
      ${simuladoAtual.questoes
        .map((q, idx) => {
          const respUsuario = respostasUsuario[q.id];
          const acertou = respUsuario === q.respostaCorreta;

          return `
          <div class="simulado-gabarito-card ${acertou ? "is-correct" : "is-wrong"}">
            <p class="simulado-gabarito-enunciado"><strong>${idx + 1}.</strong> ${q.enunciado}</p>
            <ul class="simulado-gabarito-opcoes">
              ${q.opcoes
                .map((opt) => {
                  let statusClass = "";
                  if (opt.id === q.respostaCorreta) statusClass = "is-correct";
                  else if (opt.id === respUsuario && !acertou)
                    statusClass = "is-wrong";

                  return `
                  <li class="${statusClass}">
                    <strong>${opt.id})</strong> ${opt.texto}
                    ${opt.id === respUsuario ? "<em>(Sua resposta)</em>" : ""}
                    ${opt.id === q.respostaCorreta ? "<em>(Correta)</em>" : ""}
                  </li>
                `;
                })
                .join("")}
            </ul>
            <div class="simulado-explicacao">
              <strong>Explicação Técnica:</strong> ${q.explicacao}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;

  // Botões do resultado
  footer.innerHTML = `
    <button type="button" class="simulado-btn simulado-btn-secundario" id="btn-fechar-resultado">Fechar</button>
    <button type="button" class="simulado-btn simulado-btn-primario" id="btn-refazer">Refazer Simulado</button>
  `;

  document
    .getElementById("btn-fechar-resultado")
    .addEventListener("click", fecharSimulado);

  document.getElementById("btn-refazer").addEventListener("click", () => {
    initSimulado(simuladoOriginal);
  });
}

/**
 * Remove a modal do DOM e restaura o scroll do body
 */
export function fecharSimulado() {
  const modal = document.getElementById("simulado-modal");
  if (modal) {
    modal.remove();
  }
  document.body.style.overflow = "";
}
