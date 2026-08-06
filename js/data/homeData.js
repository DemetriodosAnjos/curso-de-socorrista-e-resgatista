const homeData = {
  meta: {
    tituloPagina: "Painel do Socorrista",
    turmaAtiva: "Turma Soc16",
  },
  secoes: {
    boasVindas: {
      ativo: true,
      titulo: "Bem-vindo! O que vamos estudar hoje?",
      botaoTexto: "Continuar onde parei",
    },
    ultimasMaterias: {
      ativo: true,
      titulo: "Últimas matérias acessadas",
      limiteCards: 3,
    },
    recados: {
      ativo: true,
      titulo: "Quadro de recados e avisos",
      limiteNoticias: 3,
    },
    atalhos: {
      ativo: true,
      quantidadeBotoes: 3,
    },
    fotos: {
      ativo: true,
      titulo: "Sessão de fotos: Turma Soc16",
      totalCards: 6,
    },
    loja: {
      ativo: true,
      titulo: "Loja do Socorrista",
      totalProdutos: 4,
    },
  },
};

export default homeData;
