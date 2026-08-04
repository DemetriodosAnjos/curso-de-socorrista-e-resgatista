export const simuladoCodigoQ = {
  id: "simulado-codigo-q",
  materiaSlug: "codigo-q",
  materiaNome: "Código Q e Radiocomunicação",
  turma: "Soc16",

  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito Ruim",
      mensagem:
        "Falta severa de domínio do código Q. A hesitação na radiocomunicação compromete o tempo de resposta da equipe.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Confusão entre códigos operacionais e de ocorrência. Revise a lista e pratique a codificação padrão.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Conhecimento intermediário. Você acertou os códigos mais comuns, mas errou termos de apoio e logística.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótima assimilação da linguagem de rádio! Comunicação clara, rápida e sem margem para ruídos.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Excelente! Domínio completo e preciso do Código Q e abreviações operacionais de emergência.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "A central transmite uma mensagem importante e solicita confirmação de recebimento. Qual código Q deve ser usado para informar que a mensagem foi plenamente 'Entendida'?",
      opcoes: [
        { id: "A", texto: "QAP" },
        { id: "B", texto: "QSL" },
        { id: "C", texto: "QRV" },
        { id: "D", texto: "QRT" },
      ],
      respostaCorreta: "B",
      explicacao:
        "QSL significa 'Entendido' ou confirmação de recepção da mensagem enviada pela central/radiooperador.",
    },
    {
      id: 2,
      enunciado:
        "A equipe da VTR está no posto aguardando chamados, mantendo escuta atenta no rádio. Qual código representa o estado de estar 'Atento' ou 'Na escuta'?",
      opcoes: [
        { id: "A", texto: "QAP" },
        { id: "B", texto: "QRX" },
        { id: "C", texto: "QRA" },
        { id: "D", texto: "QTI" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QAP indica que a unidade está em posição de escuta, 'Atento, na escuta'.",
    },
    {
      id: 3,
      enunciado:
        "O operador pergunta se a viatura pode receber as coordenadas. A equipe responde que está pronta para 'Atender/Prosseguir'. Qual é o código correto?",
      opcoes: [
        { id: "A", texto: "QTC" },
        { id: "B", texto: "QRV" },
        { id: "C", texto: "QRM" },
        { id: "D", texto: "RPT" },
      ],
      respostaCorreta: "B",
      explicacao:
        "QRV significa estar pronto, disponível ou à disposição para o atendimento.",
    },
    {
      id: 4,
      enunciado:
        "O motorista precisa parar no acostamento por 2 minutos para checar um ruído. Ele solicita à central que aguarde 'Em espera'. Qual o código indicado?",
      opcoes: [
        { id: "A", texto: "QRT" },
        { id: "B", texto: "QTO" },
        { id: "C", texto: "QRX" },
        { id: "D", texto: "QTA" },
      ],
      respostaCorreta: "C",
      explicacao:
        "QRX instrui a outra estação a aguardar um momento ou permanecer 'Em espera'.",
    },
    {
      id: 5,
      enunciado:
        "A equipe finalizou o plantão e vai encerrar o tráfego de rádio e sair de serviço. Qual código deve ser informado?",
      opcoes: [
        { id: "A", texto: "QRT" },
        { id: "B", texto: "QAR" },
        { id: "C", texto: "QTH" },
        { id: "D", texto: "QSA" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QRT é utilizado para encerrar as transmissões ou indicar que a estação está fora de serviço.",
    },
    {
      id: 6,
      enunciado:
        "Ao solicitar apoio, o socorrista precisa informar o 'Local exato da ocorrência'. Qual código deve ser transmitido?",
      opcoes: [
        { id: "A", texto: "QTC" },
        { id: "B", texto: "CCO" },
        { id: "C", texto: "QTH" },
        { id: "D", texto: "QRU" },
      ],
      respostaCorreta: "C",
      explicacao:
        "QTH refere-se à localização geográfica, endereço ou posição atual.",
    },
    {
      id: 7,
      enunciado:
        "A central entra em contato com a equipe e pergunta: 'Existe algum problema ou novidade?'. O código utilizado para perguntar ou informar sobre uma ocorrência/problema é:",
      opcoes: [
        { id: "A", texto: "QRU" },
        { id: "B", texto: "QTC" },
        { id: "C", texto: "VTR" },
        { id: "D", texto: "QRA" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QRU refere-se a 'Tem algo para mim?' ou se há novidade/ocorrência a ser atendida.",
    },
    {
      id: 8,
      enunciado:
        "O operador de rádio precisa repassar um boletim de dados completo sobre a ocorrência para a equipe. Esse relatório/mensagem transmitido via rádio é chamado de:",
      opcoes: [
        { id: "A", texto: "QRA" },
        { id: "B", texto: "QTC" },
        { id: "C", texto: "QTH" },
        { id: "D", texto: "QSO" },
      ],
      respostaCorreta: "B",
      explicacao:
        "QTC diz respeito a 'Mensagem', 'Notícia' ou 'Boletim de informação' a ser transmitido.",
    },
    {
      id: 9,
      enunciado:
        "Durante a regulação médica, o socorrista informa o 'Nome do operador ou da estação' para registro. Qual código é utilizado para identificar o nome?",
      opcoes: [
        { id: "A", texto: "QRA" },
        { id: "B", texto: "QSO" },
        { id: "C", texto: "QTI" },
        { id: "D", texto: "TKS" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QRA é a designação codificada para o nome do operador, da estação ou da equipe.",
    },
    {
      id: 10,
      enunciado:
        "Um chamado duplicado foi gerado por engano. A central transmite uma ordem de 'Cancelar o procedimento ou chamada' através do código:",
      opcoes: [
        { id: "A", texto: "QRT" },
        { id: "B", texto: "QRX" },
        { id: "C", texto: "QTA" },
        { id: "D", texto: "RPT" },
      ],
      respostaCorreta: "C",
      explicacao:
        "QTA significa o cancelamento de uma mensagem anterior, despacho ou ordem.",
    },
    {
      id: 11,
      enunciado:
        "A equipe aciona o rádio e informa que está 'Em deslocamento / A caminho' da cena do acidente. Qual o código correto?",
      opcoes: [
        { id: "A", texto: "QTI" },
        { id: "B", texto: "QAR" },
        { id: "C", texto: "QTH" },
        { id: "D", texto: "QTO" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QTI representa o deslocamento ativo, estar 'A caminho' de um destino.",
    },
    {
      id: 12,
      enunciado:
        "A equipe precisa realizar a pausa regulamentar para refeição ('Almoço / Janta'). Qual código representa a pausa para refeição?",
      opcoes: [
        { id: "A", texto: "QTO" },
        { id: "B", texto: "QTL" },
        { id: "C", texto: "QRM" },
        { id: "D", texto: "QSA" },
      ],
      respostaCorreta: "B",
      explicacao: "QTL é o código designado para refeição (Almoço / Jantar).",
    },
    {
      id: 13,
      enunciado:
        "Uma chuva forte com descargas elétricas causa chiados na transmissão do rádio. O termo usado para indicar 'Interferência humana ou ruído' é:",
      opcoes: [
        { id: "A", texto: "QRM" },
        { id: "B", texto: "RPT" },
        { id: "C", texto: "QSA" },
        { id: "D", texto: "QTC" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QRM refere-se à presença de interferência na frequência ou ruídos na transmissão.",
    },
    {
      id: 14,
      enunciado:
        "Quando duas unidades precisam 'Comunicar-se diretamente' entre si via rádio, elas realizam um:",
      opcoes: [
        { id: "A", texto: "CCO" },
        { id: "B", texto: "QSO" },
        { id: "C", texto: "QSL" },
        { id: "D", texto: "QAP" },
      ],
      respostaCorreta: "B",
      explicacao:
        "QSO é o contato direto ou conversa ponto a ponto entre duas estações de rádio.",
    },
    {
      id: 15,
      enunciado:
        "Ao testar a transmissão do rádio comunicador, o operador pergunta ao socorrista sobre a 'Qualidade do sinal / Clareza da áudio'. O código correto para esse teste é:",
      opcoes: [
        { id: "A", texto: "QSA" },
        { id: "B", texto: "QRM" },
        { id: "C", texto: "RPT" },
        { id: "D", texto: "QSL" },
      ],
      respostaCorreta: "A",
      explicacao:
        "QSA mede a intensidade/qualidade dos sinais da estação (clareza de transmissão).",
    },
    {
      id: 16,
      enunciado:
        "O condutor socorrista precisa fazer uma pausa rápida para uso do 'Banheiro' (necessidades fisiológicas). O código apropriado para essa comunicação é:",
      opcoes: [
        { id: "A", texto: "QAR" },
        { id: "B", texto: "QTO" },
        { id: "C", texto: "QRX" },
        { id: "D", texto: "QTA" },
      ],
      respostaCorreta: "B",
      explicacao:
        "QTO é o código utilizado para sinalizar ida ao banheiro / pausa para necessidades fisiológicas.",
    },
    {
      id: 17,
      enunciado:
        "Em vez de falar a palavra inteira 'Viatura', qual é a abreviação padronizada usada no tráfego de rádio e relatórios?",
      opcoes: [
        { id: "A", texto: "CCO" },
        { id: "B", texto: "VTR" },
        { id: "C", texto: "QTI" },
        { id: "D", texto: "TKS" },
      ],
      respostaCorreta: "B",
      explicacao: "VTR é a sigla operacional para 'Viatura'.",
    },
    {
      id: 18,
      enunciado:
        "Sigla referente ao setor concentrador de coordenação e regulação dos chamados, conhecido como 'Centro de Controle Operacional':",
      opcoes: [
        { id: "A", texto: "VTR" },
        { id: "B", texto: "CCO" },
        { id: "C", texto: "QTH" },
        { id: "D", texto: "QTC" },
      ],
      respostaCorreta: "B",
      explicacao: "CCO é a sigla para Centro de Controle Operacional.",
    },
    {
      id: 19,
      enunciado:
        "Devido ao barulho da sirene, o socorrista não conseguiu ouvir os dados da vítima e pede ao rádio para 'Repetir a mensagem'. A abreviação para esse pedido é:",
      opcoes: [
        { id: "A", texto: "RPT" },
        { id: "B", texto: "QSL" },
        { id: "C", texto: "QTA" },
        { id: "D", texto: "QRM" },
      ],
      respostaCorreta: "A",
      explicacao:
        "RPT é a sigla utilizada para solicitar a repetição de uma mensagem.",
    },
    {
      id: 20,
      enunciado:
        "Após o recebimento de um suporte importante fornecido por outra equipe, o operador envia uma mensagem de 'Agradecimento / Obrigado' codificada como:",
      opcoes: [
        { id: "A", texto: "QSL" },
        { id: "B", texto: "TKS" },
        { id: "C", texto: "QRV" },
        { id: "D", texto: "QAP" },
      ],
      respostaCorreta: "B",
      explicacao:
        "TKS (ou THS) é a sigla abreviada referente a 'Obrigado / Agradecido' (Thanks).",
    },
  ],
};
