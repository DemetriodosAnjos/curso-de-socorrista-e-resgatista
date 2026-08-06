export const recadosData = {
  config: {
    limiteAvisos: 3, // Quantidade máxima de recados exibidos na home
  },
  estadoVazio: {
    mensagem: "Nenhum aviso ou recado no momento. Fique ligado!",
  },
  // Lista simulada inicial (pode vir vazia [] se não houver avisos)
  listaAvisos: [
    {
      id: "aviso-01",
      titulo: "PROVA TEÓRICA: Professor Guilherme / Edson",
      subtitulo: "Data da prova: 08/08/2026",
      descricao: `<strong>Conteúdo da Prova:</strong>
                  Radio-com: alfabeto fonético, código Q
                  Abordagem primária (x a b c d e)
                  Abordagem secundária: (s a m p l e)
                  Abordagem secundária: exame físico
                  Abordagem secundária: sinais vitais
                  `,
      dataHora: "2026-08-06T13:06:00Z",
    },
    {
      id: "aviso-02",
      titulo: "Novo simulado disponível",
      subtitulo: "Escala de Gasglow",
      descricao:
        "O simulado <strong>Escala de Gasglow</strong> já está liberado na aba de simulados.",
      dataHora: "2026-06-04T15:30:00Z",
    },
  ],
};
