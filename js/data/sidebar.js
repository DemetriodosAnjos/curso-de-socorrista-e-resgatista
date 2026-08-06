export function initSidebar({ materias = {}, simulados = {}, onSelect }) {
  const menuList = document.getElementById("menu-list");
  if (!menuList) return;

  const listaMaterias = Object.keys(materias).map((key) => {
    const item = materias[key];
    const label =
      item?.titulo || item?.title || key.replace(/-/g, " ").toUpperCase();
    return { key, label, type: "materia" };
  });

  const listaSimulados = Object.keys(simulados).map((key) => {
    const item = simulados[key];
    const label =
      item?.titulo || item?.title || `Simulado: ${key.replace(/-/g, " ")}`;
    return { key, label, type: "simulado" };
  });

  // SVG de Home
  const svgHome = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  `;

  // SVG de Matérias
  const svgMateria = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"></path>
    </svg>
  `;

  // SVG de Seta (Chevron Down) Nativo
  const svgChevron = `
    <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; transition: transform 0.3s ease;">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;

  const menuData = [
    {
      id: "home",
      label: "Home",
      customIcon: svgHome,
      isDirectLink: true,
      key: "home",
      type: "home",
    },
    {
      id: "materia",
      label: "Matérias",
      customIcon: svgMateria,
      children: listaMaterias,
    },
    {
      id: "simulados",
      label: "Simulados",
      icon: "ph-exam",
      children: listaSimulados,
    },
  ];

  menuList.innerHTML = menuData
    .map((group) => {
      const iconMarkup = group.customIcon
        ? group.customIcon
        : `<i class="ph ${group.icon}"></i>`;

      if (group.isDirectLink) {
        return `
          <li class="menu-item-single">
            <button type="button" class="menu-btn-trigger submenu-btn" data-key="${group.key}" data-type="${group.type}">
              <span class="btn-content">
                ${iconMarkup} 
                <span>${group.label}</span>
              </span>
            </button>
          </li>
        `;
      }

      return `
        <li class="menu-item-accordion">
          <button type="button" class="menu-btn-trigger">
            <span class="btn-content">
              ${iconMarkup} 
              <span>${group.label}</span>
            </span>
            ${svgChevron}
          </button>
          <ul class="submenu">
            ${group.children
              .map(
                (item) => `
              <li>
                <button type="button" class="submenu-btn" data-key="${item.key}" data-type="${item.type}">
                  ${item.label}
                </button>
              </li>
            `,
              )
              .join("")}
          </ul>
        </li>
      `;
    })
    .join("");

  // Evento de Clique e Rotação da Seta
  menuList.addEventListener("click", (e) => {
    const trigger = e.target.closest(".menu-btn-trigger");
    const itemBtn = e.target.closest(".submenu-btn");

    if (trigger && !trigger.classList.contains("submenu-btn")) {
      const parentLi = trigger.closest(".menu-item-accordion");
      if (!parentLi) return;

      const isOpen = parentLi.classList.contains("is-open");

      // Fecha todos os outros submenus
      menuList.querySelectorAll(".menu-item-accordion").forEach((li) => {
        li.classList.remove("is-open");
      });

      // Se não estava aberto, abre o clicado
      if (!isOpen) {
        parentLi.classList.add("is-open");
      }
      return;
    }

    if (itemBtn) {
      const { key, type } = itemBtn.dataset;

      // Gerencia estado ativo nos submenus e links diretos
      menuList.querySelectorAll(".submenu-btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      itemBtn.classList.add("active");

      if (typeof onSelect === "function") {
        onSelect({ key, type });
      }
    }
  });
}

// Função de simulado declarada no escopo do módulo
export function initSimulado(simuladoData) {
  if (!simuladoData) {
    console.error("Dados do simulado não foram fornecidos.");
    return;
  }

  const nomeMateria =
    simuladoData.materiaNome || simuladoData.titulo || "Simulado";
  const titulo = `SIMULADO: ${nomeMateria}`;
  const questoes = simuladoData.questoes || [];

  if (!questoes.length) {
    alert("Este simulado não possui questões cadastradas.");
    return;
  }

  // Remove modal antiga se houver
  const overlayExistente = document.querySelector(".simulado-overlay");
  if (overlayExistente) overlayExistente.remove();

  // Cria a estrutura da Modal
  const overlay = document.createElement("div");
  overlay.className = "simulado-overlay";

  overlay.innerHTML = `
    <div class="simulado-container">
      <header class="simulado-header">
        <h2>${titulo}</h2>
        <button type="button" class="simulado-btn-close" id="btn-fechar-simulado">&times;</button>
      </header>
      <hr class="simulado-divider">

      <div class="simulado-body" id="simulado-body-content">
        <!-- Renderiza a pergunta atual -->
      </div>

      <footer class="simulado-footer" id="simulado-footer-actions">
        <!-- Botões de Navegação -->
      </footer>
    </div>
  `;

  document.body.appendChild(overlay);

  // Fecha modal no 'X'
  overlay
    .querySelector("#btn-fechar-simulado")
    .addEventListener("click", () => overlay.remove());

  // Estado da paginação e respostas
  let indiceAtual = 0;
  const respostasUsuario = {}; // Ex: { 0: "A", 1: "C" }

  const bodyContent = overlay.querySelector("#simulado-body-content");
  const footerActions = overlay.querySelector("#simulado-footer-actions");

  function renderizarQuestaoAtual() {
    const q = questoes[indiceAtual];
    const respostaSelecionada = respostasUsuario[indiceAtual];

    // Renderiza o bloco único da questão atual
    bodyContent.innerHTML = `
      <div class="simulado-step-info">
        Questão ${indiceAtual + 1} de ${questoes.length}
      </div>
      <p class="simulado-enunciado">${q.enunciado}</p>

      <ul class="simulado-opcoes">
        ${q.opcoes
          .map(
            (opt) => `
          <li class="simulado-opcao ${respostaSelecionada === opt.id ? "is-active" : ""}" data-optid="${opt.id}">
            <span class="simulado-opcao-badge">${opt.id}</span>
            <span class="simulado-opcao-texto">${opt.texto}</span>
          </li>
        `,
          )
          .join("")}
      </ul>
    `;

    // Renderiza dinamicamente os botões do rodapé dependendo da etapa
    const ehPrimeira = indiceAtual === 0;
    const ehUltima = indiceAtual === questoes.length - 1;

    footerActions.innerHTML = `
      <button type="button" class="simulado-btn simulado-btn-secundario" id="btn-anterior" ${ehPrimeira ? "disabled" : ""}>Anterior</button>
      
      ${
        !ehUltima
          ? `<button type="button" class="simulado-btn simulado-btn-primario" id="btn-proxima">Próxima</button>`
          : `<button type="button" class="simulado-btn simulado-btn-primario" id="btn-finalizar">Finalizar e Enviar</button>`
      }
    `;

    // Evento de clique nas opções da questão atual
    bodyContent.querySelectorAll(".simulado-opcao").forEach((opcaoEl) => {
      opcaoEl.addEventListener("click", () => {
        const optId = opcaoEl.dataset.optid;
        respostasUsuario[indiceAtual] = optId;

        // Atualiza estilo visual da seleção na lista
        bodyContent
          .querySelectorAll(".simulado-opcao")
          .forEach((el) => el.classList.remove("is-active"));
        opcaoEl.classList.add("is-active");
      });
    });

    // Eventos dos botões de navegação
    const btnAnterior = footerActions.querySelector("#btn-anterior");
    if (btnAnterior && !ehPrimeira) {
      btnAnterior.addEventListener("click", () => {
        if (indiceAtual > 0) {
          indiceAtual--;
          renderizarQuestaoAtual();
        }
      });
    }

    const btnProxima = footerActions.querySelector("#btn-proxima");
    if (btnProxima) {
      btnProxima.addEventListener("click", () => {
        if (indiceAtual < questoes.length - 1) {
          indiceAtual++;
          renderizarQuestaoAtual();
        }
      });
    }

    const btnFinalizar = footerActions.querySelector("#btn-finalizar");
    if (btnFinalizar) {
      btnFinalizar.addEventListener("click", calcularEGabarito);
    }

    // Retorna o scroll para o topo da modal ao trocar de questão
    bodyContent.scrollTop = 0;
  }

  // Processamento do Resultado e Exibição do Gabarito Detalhado
  function calcularEGabarito() {
    let acertos = 0;
    const total = questoes.length;

    questoes.forEach((q, index) => {
      if (respostasUsuario[index] === q.respostaCorreta) {
        acertos++;
      }
    });

    const percentual = Math.round((acertos / total) * 100);

    let feedbackObj = { titulo: "Resultado", mensagem: "" };
    if (simuladoData.feedbacks) {
      feedbackObj =
        Object.values(simuladoData.feedbacks).find(
          (f) => percentual >= f.min && percentual <= f.max,
        ) || feedbackObj;
    }

    const isSuccess = percentual >= 60;

    // Renderiza a tela de resultados no corpo da modal
    bodyContent.innerHTML = `
      <div class="simulado-resultado-header">
        <div class="simulado-score-badge ${isSuccess ? "is-success" : "is-warning"}">
          ${feedbackObj.titulo || (isSuccess ? "Aprovado" : "Atenção")}
        </div>
        <div class="simulado-score-number">${percentual}%</div>
        <p>Você acertou <strong>${acertos}</strong> de <strong>${total}</strong> questões.</p>
        <p style="font-size: 0.9rem; color: #555; margin-top: 0.5rem;">${feedbackObj.mensagem || ""}</p>
      </div>

      <div class="simulado-gabarito-lista">
        <h3>Gabarito Detalhado</h3>
        ${questoes
          .map((q, qIndex) => {
            const respUsuario = respostasUsuario[qIndex];
            const eCorreto = respUsuario === q.respostaCorreta;

            return `
            <div class="simulado-gabarito-card ${eCorreto ? "is-correct" : "is-wrong"}">
              <p class="simulado-enunciado"><strong>${qIndex + 1}.</strong> ${q.enunciado}</p>
              <ul class="simulado-gabarito-opcoes">
                ${q.opcoes
                  .map((opt) => {
                    let classeOpt = "";
                    if (opt.id === q.respostaCorreta) classeOpt = "is-correct";
                    else if (opt.id === respUsuario && !eCorreto)
                      classeOpt = "is-wrong";

                    return `
                    <li class="${classeOpt}">
                      <strong>${opt.id})</strong> ${opt.texto} 
                      ${opt.id === q.respostaCorreta ? " ✓ (Correta)" : ""}
                      ${opt.id === respUsuario && !eCorreto ? " ✕ (Sua Resposta)" : ""}
                    </li>
                  `;
                  })
                  .join("")}
              </ul>
              ${
                q.explicacao
                  ? `
                <div class="simulado-explicacao">
                  <strong>Explicação:</strong> ${q.explicacao}
                </div>
              `
                  : ""
              }
            </div>
          `;
          })
          .join("")}
      </div>
    `;

    // Footer exclusivo para fechar após ver o resultado
    footerActions.innerHTML = `
      <button type="button" class="simulado-btn simulado-btn-primario" id="btn-fechar-final" style="width: 100%;">Concluir e Fechar</button>
    `;

    overlay
      .querySelector("#btn-fechar-final")
      .addEventListener("click", () => overlay.remove());
    bodyContent.scrollTop = 0;
  }

  // Inicia renderizando a primeira questão
  renderizarQuestaoAtual();
}
