export const simuladoAlfabetoFonetico = {
  id: "simulado-alfabeto-fonetico",
  materiaSlug: "alfabeto-fonetico",
  materiaNome: "Alfabeto Fonético Internacional",
  turma: "Soc16",

  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito ruim",
      mensagem:
        "Você precisa memorizar a tabela do alfabeto fonético antes de operar a rede de rádio.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Muitas hesitações ou equívocos nas letras básicas. Revise o código de radiocomunicação.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Conhecimento intermediário, mas ainda comete erros que causam ruído na comunicação da central.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótimo domínio da codificação fonética. Pronto para transmissões limpas no rádio.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Perfeito! Domínio absoluto do alfabeto fonético padrão de resgate e emergência.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "Na transmissão via rádio de emergência, qual é a palavra fonética correspondente à letra 'A'?",
      opcoes: [
        { id: "A", texto: "Alpha / Alfa" },
        { id: "B", texto: "America" },
        { id: "C", texto: "Able" },
        { id: "D", texto: "Apollo" },
      ],
      respostaCorreta: "A",
      explicacao:
        "No padrão do alfabeto fonético internacional (ICAO/NATO), a letra A é representada por Alfa.",
    },
    {
      id: 2,
      enunciado:
        "Qual a palavra fonética padronizada correspondente à letra 'B'?",
      opcoes: [
        { id: "A", texto: "Baker" },
        { id: "B", texto: "Bravo" },
        { id: "C", texto: "Boston" },
        { id: "D", texto: "Brasil" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra B é padronizada como Bravo na radiocomunicação.",
    },
    {
      id: 3,
      enunciado:
        "Para soletrar a letra 'C' na rede de rádio de resgate, deve-se utilizar a palavra:",
      opcoes: [
        { id: "A", texto: "Canada" },
        { id: "B", texto: "Charlie" },
        { id: "C", texto: "Central" },
        { id: "D", texto: "Coco" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra C é representada por Charlie.",
    },
    {
      id: 4,
      enunciado: "Qual a representação fonética correta para a letra 'D'?",
      opcoes: [
        { id: "A", texto: "Delta" },
        { id: "B", texto: "David" },
        { id: "C", texto: "Dog" },
        { id: "D", texto: "Doctor" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra D é padronizada como Delta.",
    },
    {
      id: 5,
      enunciado:
        "Qual a palavra do alfabeto fonético utilizada para a letra 'E'?",
      opcoes: [
        { id: "A", texto: "Easy" },
        { id: "B", texto: "Eco" },
        { id: "C", texto: "Echo" },
        { id: "D", texto: "Europa" },
      ],
      respostaCorreta: "C",
      explicacao:
        "A letra E é representada internacionalmente pela grafia Echo.",
    },
    {
      id: 6,
      enunciado:
        "Qual o termo fonético correto para a transmissão da letra 'F'?",
      opcoes: [
        { id: "A", texto: "Fox" },
        { id: "B", texto: "Foxtrot" },
        { id: "C", texto: "Florida" },
        { id: "D", texto: "Frank" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra F é designada como Foxtrot no código internacional.",
    },
    {
      id: 7,
      enunciado:
        "Ao transmitir a letra 'G' para a central de regulação, o socorrista deve dizer:",
      opcoes: [
        { id: "A", texto: "Golf" },
        { id: "B", texto: "George" },
        { id: "C", texto: "Guarani" },
        { id: "D", texto: "Gamma" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra G equivale a Golf.",
    },
    {
      id: 8,
      enunciado:
        "Qual é o termo padronizado do alfabeto fonético para a letra 'H'?",
      opcoes: [
        { id: "A", texto: "Henry" },
        { id: "B", texto: "Hospital" },
        { id: "C", texto: "Hotel" },
        { id: "D", texto: "Helena" },
      ],
      respostaCorreta: "C",
      explicacao: "A letra H corresponde a Hotel.",
    },
    {
      id: 9,
      enunciado:
        "Qual a palavra correta do alfabeto fonético referente à letra 'I'?",
      opcoes: [
        { id: "A", texto: "Item" },
        { id: "B", texto: "India" },
        { id: "C", texto: "Italy" },
        { id: "D", texto: "Indio" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra I é padronizada como India.",
    },
    {
      id: 10,
      enunciado:
        "Para transmitir a letra 'J' na modulação de rádio, utiliza-se a palavra:",
      opcoes: [
        { id: "A", texto: "Juliett" },
        { id: "B", texto: "Japan" },
        { id: "C", texto: "John" },
        { id: "D", texto: "Jupiter" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra J é padronizada internacionalmente como Juliett.",
    },
    {
      id: 11,
      enunciado:
        "Qual o termo correspondente à letra 'K' na fonética operacional?",
      opcoes: [
        { id: "A", texto: "King" },
        { id: "B", texto: "Kilogram" },
        { id: "C", texto: "Kilo" },
        { id: "D", texto: "Kapa" },
      ],
      respostaCorreta: "C",
      explicacao: "A letra K corresponde à palavra Kilo.",
    },
    {
      id: 12,
      enunciado:
        "Ao modular a letra 'L' no canal de comunicação, qual palavra deve ser empregada?",
      opcoes: [
        { id: "A", texto: "Love" },
        { id: "B", texto: "Lima" },
        { id: "C", texto: "London" },
        { id: "D", texto: "Lincoln" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra L equivale a Lima.",
    },
    {
      id: 13,
      enunciado: "Qual é a representação fonética da letra 'M'?",
      opcoes: [
        { id: "A", texto: "Mary" },
        { id: "B", texto: "Mexico" },
        { id: "C", texto: "Mike" },
        { id: "D", texto: "Motor" },
      ],
      respostaCorreta: "C",
      explicacao: "A letra M corresponde a Mike no padrão oficial.",
    },
    {
      id: 14,
      enunciado: "Qual a palavra padronizada referente à letra 'N'?",
      opcoes: [
        { id: "A", texto: "November" },
        { id: "B", texto: "Nancy" },
        { id: "C", texto: "Norway" },
        { id: "D", texto: "Naval" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra N é codificada como November.",
    },
    {
      id: 15,
      enunciado: "Qual o termo fonético oficial correspondente à letra 'O'?",
      opcoes: [
        { id: "A", texto: "Ocean" },
        { id: "B", texto: "Oscar" },
        { id: "C", texto: "Oliver" },
        { id: "D", texto: "Omega" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra O corresponde a Oscar.",
    },
    {
      id: 16,
      enunciado:
        "Para transmitir a letra 'P' sem ambiguidade, o socorrista pronuncia:",
      opcoes: [
        { id: "A", texto: "Peter" },
        { id: "B", texto: "Paul" },
        { id: "C", texto: "Papa" },
        { id: "D", texto: "Paris" },
      ],
      respostaCorreta: "C",
      explicacao: "A letra P é representativa por Papa.",
    },
    {
      id: 17,
      enunciado: "Qual a palavra do alfabeto fonético destinada à letra 'Q'?",
      opcoes: [
        { id: "A", texto: "Quebec" },
        { id: "B", texto: "Queen" },
        { id: "C", texto: "Quality" },
        { id: "D", texto: "Quota" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra Q é representada por Quebec.",
    },
    {
      id: 18,
      enunciado:
        "Qual palavra fonética deve ser utilizada para sinalizar a letra 'R'?",
      opcoes: [
        { id: "A", texto: "Robert" },
        { id: "B", texto: "Romeo" },
        { id: "C", texto: "Radio" },
        { id: "D", texto: "Rome" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra R equivale a Romeo.",
    },
    {
      id: 19,
      enunciado:
        "Ao modular a letra 'S' em um prefixo de viatura, o termo correto é:",
      opcoes: [
        { id: "A", texto: "Sugar" },
        { id: "B", texto: "Sierra" },
        { id: "C", texto: "Samu" },
        { id: "D", texto: "Santiago" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra S é representada por Sierra.",
    },
    {
      id: 20,
      enunciado:
        "Qual a palavra fonética padronizada para transmitir a letra 'T'?",
      opcoes: [
        { id: "A", texto: "Tango" },
        { id: "B", texto: "Tommy" },
        { id: "C", texto: "Texas" },
        { id: "D", texto: "Trauma" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra T corresponde a Tango.",
    },
    {
      id: 21,
      enunciado: "Qual a codificação fonética referente à letra 'U'?",
      opcoes: [
        { id: "A", texto: "Union" },
        { id: "B", texto: "Uncle" },
        { id: "C", texto: "Uniform" },
        { id: "D", texto: "Unit" },
      ],
      respostaCorreta: "C",
      explicacao: "A letra U é padronizada como Uniform.",
    },
    {
      id: 22,
      enunciado:
        "Para transmitir a letra 'V' durante o boletim de ocorrência via rádio, fala-se:",
      opcoes: [
        { id: "A", texto: "Victor" },
        { id: "B", texto: "Victory" },
        { id: "C", texto: "Vitor" },
        { id: "D", texto: "Vector" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra V corresponde a Victor.",
    },
    {
      id: 23,
      enunciado: "Qual o termo fonético correto para a letra 'W'?",
      opcoes: [
        { id: "A", texto: "William" },
        { id: "B", texto: "Whiskey" },
        { id: "C", texto: "Washington" },
        { id: "D", texto: "Water" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra W é internacionalmente designada como Whiskey.",
    },
    {
      id: 24,
      enunciado:
        "Ao soletrar uma placa de veículo contendo a letra 'X', o termo fonético correto é:",
      opcoes: [
        { id: "A", texto: "X-ray" },
        { id: "B", texto: "Xerox" },
        { id: "C", texto: "Xingu" },
        { id: "D", texto: "Xylophone" },
      ],
      respostaCorreta: "A",
      explicacao: "A letra X é codificada oficialmente como X-ray.",
    },
    {
      id: 25,
      enunciado:
        "Qual a palavra padronizada do alfabeto fonético para a letra 'Y'?",
      opcoes: [
        { id: "A", texto: "Yellow" },
        { id: "B", texto: "Yankee" },
        { id: "C", texto: "York" },
        { id: "D", texto: "Young" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra Y corresponde a Yankee.",
    },
    {
      id: 26,
      enunciado: "Qual é o termo padronizado para a transmissão da letra 'Z'?",
      opcoes: [
        { id: "A", texto: "Zebra" },
        { id: "B", texto: "Zulu" },
        { id: "C", texto: "Zero" },
        { id: "D", texto: "Zinc" },
      ],
      respostaCorreta: "B",
      explicacao: "A letra Z é codificada como Zulu.",
    },
  ],
};
