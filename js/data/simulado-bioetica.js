export const simuladoBioetica = {
  id: "simulado-bioetica",
  materiaSlug: "etica-bioetica",
  materiaNome: "Ética e Bioética",
  turma: "Soc16",

  // Mensagens por faixa de pontuação (Requisito 9)
  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito ruim",
      mensagem:
        "Você precisa revisar todo o conteúdo fundamental de ética e bioética antes de tentar novamente.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Conceitos básicos foram assimilados, mas há lacunas críticas na aplicação prática do atendimento.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Desempenho mediano. Revise os pontos em que cometeu deslizes para consolidar o aprendizado.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótimo aproveitamento! Você demonstrou bom domínio dos princípios éticos no resgate.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Excelente! Domínio completo dos protocolos morais e éticos da profissão de socorrista.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "Durante um atendimento pré-hospitalar, um paciente consciente recusa o procedimento de imobilização. Qual princípio da bioética ampara a decisão do paciente?",
      opcoes: [
        { id: "A", texto: "Princípio da Beneficência." },
        { id: "B", texto: "Princípio da Autonomia." },
        { id: "C", texto: "Princípio da Não-Maleficiência." },
        { id: "D", texto: "Princípio da Justiça Distributiva." },
      ],
      respostaCorreta: "B",
      explicacao:
        "O Princípio da Autonomia garante ao paciente consciente e capaz o direito de tomar decisões sobre a sua própria saúde e corpo, desde que devidamente informado sobre os riscos.",
    },
    {
      id: 2,
      enunciado:
        "O ato de atuar com imperícia em uma ocorrência configura falha ética. O que caracteriza a imperícia?",
      opcoes: [
        {
          id: "A",
          texto: "Inobservância de normas operacionais por desatenção.",
        },
        {
          id: "B",
          texto:
            "Falta de conhecimento técnico ou habilidade prática para realizar determinado procedimento.",
        },
        {
          id: "C",
          texto: "Agir de forma precipitada sem avaliar os riscos da cena.",
        },
        {
          id: "D",
          texto: "Abandonar a vítima após iniciar os primeiros socorros.",
        },
      ],
      respostaCorreta: "B",
      explicacao:
        "Imperícia é a falta de capacitação técnica, conhecimento ou habilidade para a realização de uma atividade profissional ou procedimento médico/resgate.",
    },
  ],
};
