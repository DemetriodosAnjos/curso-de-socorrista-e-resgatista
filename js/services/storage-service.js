// 1. Chave única definida no escopo do módulo
const LOCAL_STORAGE_KEY = "simulado_historico";

export const storageService = {
  /**
   * Salva o resultado de um simulado garantindo histórico máximo de 3 itens
   * @param {object} dados {simuladoId, materiaNome, nota}
   */
  salvarResultado(dados) {
    const historico = this.obterHistorico();

    const novoRegistro = {
      id: Date.now(),
      simuladoId: dados.simuladoId,
      materiaNome: dados.materiaNome,
      nota: dados.nota,
      dataHora: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Adiciona o mais recente no início e limita a 3
    historico.unshift(novoRegistro);
    const historicoAtualizado = historico.slice(0, 3);

    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(historicoAtualizado),
      );
    } catch (e) {
      console.error("Erro ao salvar histórico no LocalStorage", e);
    }
  },

  /**
   * Retorna a lista dos últimos simulados gravados
   * @returns {Array} lista de simulados
   */
  obterHistorico() {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Erro ao obter histórico no LocalStorage", e);
      return [];
    }
  },

  /**
   * Limpa todo o histórico gravado
   */
  limparHistorico() {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error("Erro ao limpar LocalStorage", e);
    }
  },
};
