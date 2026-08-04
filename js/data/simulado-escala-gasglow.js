export const simuladoEscalaGasglow = {
  id: "simulado-escala-gasglow",
  materiaSlug: "escala-gasglow",
  materiaNome: "Escala de Coma de Glasgow (ECG-P)",
  turma: "Soc16",

  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito Ruim",
      mensagem:
        "Falta domínio crítico nos critérios de avaliação neurológica. Erros na pontuação da ECG podem levar a condutas fatais no trauma.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Há confusão entre os níveis de resposta motora e verbal. Revise a diferença entre decorticação e descerebração imediatamente.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Conhecimento intermediário. Você domina os pilares básicos, mas teve dificuldade em cenários de aplicação prática ou na reatividade pupilar.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótima capacidade de avaliação! Você demonstra segurança ao pontuar os parâmetros e classificar a gravidade do TCE.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Excelente! Domínio completo da escala atualizada (ECG-P). Você está apto a realizar avaliações neurológicas precisas e rápidas.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "Na Escala de Coma de Glasgow, qual é a pontuação mínima possível para um paciente que não apresenta resposta em nenhum dos parâmetros (Abertura Ocular, Resposta Verbal e Resposta Motora)?",
      opcoes: [
        { id: "A", texto: "0" },
        { id: "B", texto: "1" },
        { id: "C", texto: "3" },
        { id: "D", texto: "5" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Cada um dos três parâmetros possui uma pontuação mínima de 1 ponto. Portanto, o somatório mínimo total é 3.",
    },
    {
      id: 2,
      enunciado:
        "Um paciente que abre os olhos apenas após a aplicação de pressão no leito ungueal recebe qual pontuação no parâmetro de Abertura Ocular?",
      opcoes: [
        { id: "A", texto: "1 ponto" },
        { id: "B", texto: "2 pontos" },
        { id: "C", texto: "3 pontos" },
        { id: "D", texto: "4 pontos" },
      ],
      respostaCorreta: "B",
      explicacao:
        "A abertura ocular mediante estímulo de pressão/dor corresponde à pontuação 2.",
    },
    {
      id: 3,
      enunciado:
        "Ao avaliar a Resposta Motora, o socorrista observa que o paciente apresenta uma flexão anormal (decorticação) ao estímulo doloroso. Quantos pontos devem ser atribuídos?",
      opcoes: [
        { id: "A", texto: "2 pontos" },
        { id: "B", texto: "3 pontos" },
        { id: "C", texto: "4 pontos" },
        { id: "D", texto: "5 pontos" },
      ],
      respostaCorreta: "B",
      explicacao:
        "A decorticação (flexão anormal) pontua 3. A descerebração (extensão anormal) pontua 2.",
    },
    {
      id: 4,
      enunciado:
        "Um paciente apresenta-se orientado (5), com abertura ocular espontânea (4), mas localiza a dor sem obedecer a comandos verbais (5). Qual a classificação de gravidade deste TCE?",
      opcoes: [
        { id: "A", texto: "TCE Leve" },
        { id: "B", texto: "TCE Moderado" },
        { id: "C", texto: "TCE Grave" },
        { id: "D", texto: "TCE Crítico" },
      ],
      respostaCorreta: "A",
      explicacao:
        "A soma é $4 + 5 + 5 = 14$. Pontuações entre 13 e 15 são classificadas como TCE Leve.",
    },
    {
      id: 5,
      enunciado:
        "Na atualização da escala (ECG-P), se o paciente apresenta as duas pupilas não reagentes à luz, quantos pontos devem ser subtraídos do total da escala de Glasgow?",
      opcoes: [
        { id: "A", texto: "0 pontos" },
        { id: "B", texto: "1 ponto" },
        { id: "C", texto: "2 pontos" },
        { id: "D", texto: "3 pontos" },
      ],
      respostaCorreta: "C",
      explicacao:
        "A inexistência de reação pupilar bilateral resulta na subtração de 2 pontos do escore total.",
    },
    {
      id: 6,
      enunciado:
        "Como deve ser registrada a Resposta Verbal de um paciente que está intubado e impossibilitado de falar?",
      opcoes: [
        { id: "A", texto: "Pontuação 0" },
        { id: "B", texto: "Pontuação 1" },
        { id: "C", texto: "NT (Não Testável)" },
        { id: "D", texto: "Avaliar pela mímica facial" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Quando um fator impede a avaliação (como tubo orotraqueal), utiliza-se o sufixo NT.",
    },
    {
      id: 7,
      enunciado:
        "Um paciente apresenta: abertura ocular ao som (3), sons incompreensíveis/gemidos (2) e flexão inespecífica/retirada à dor (4). Qual o total da escala tradicional?",
      opcoes: [
        { id: "A", texto: "7 pontos" },
        { id: "B", texto: "8 pontos" },
        { id: "C", texto: "9 pontos" },
        { id: "D", texto: "10 pontos" },
      ],
      respostaCorreta: "C",
      explicacao: "O cálculo é $3 (AO) + 2 (RV) + 4 (RM) = 9$.",
    },
    {
      id: 8,
      enunciado:
        "Em qual das situações abaixo o paciente é classificado com TCE Grave, geralmente exigindo intervenção imediata de via aérea?",
      opcoes: [
        { id: "A", texto: "Glasgow 11" },
        { id: "B", texto: "Glasgow 13" },
        { id: "C", texto: "Glasgow 9" },
        { id: "D", texto: "Glasgow 7" },
      ],
      respostaCorreta: "D",
      explicacao:
        "TCE Grave é definido por uma pontuação de 3 a 8 pontos na Escala de Glasgow.",
    },
    {
      id: 9,
      enunciado:
        "O parâmetro de Resposta Motora que descreve o paciente elevando a mão acima do nível da clavícula em resposta a um estímulo no pescoço/trapézio é:",
      opcoes: [
        { id: "A", texto: "Obedece a comandos" },
        { id: "B", texto: "Localiza o estímulo" },
        { id: "C", texto: "Flexão normal" },
        { id: "D", texto: "Flexão anormal" },
      ],
      respostaCorreta: "B",
      explicacao:
        "Localizar o estímulo (5 pontos) envolve um movimento coordenado para tentar remover a fonte da dor.",
    },
    {
      id: 10,
      enunciado:
        "Cenário: Paciente com $AO=1$, $RV=1$, $RM=1$ e apenas uma das pupilas reage à luz. Qual o escore final na ECG-P?",
      opcoes: [
        { id: "A", texto: "1" },
        { id: "B", texto: "2" },
        { id: "C", texto: "3" },
        { id: "D", texto: "4" },
      ],
      respostaCorreta: "B",
      explicacao:
        "Soma básica ($1+1+1=3$). Como apenas uma pupila reage, subtrai-se 1 ponto. Total final: 2.",
    },
  ],
};
