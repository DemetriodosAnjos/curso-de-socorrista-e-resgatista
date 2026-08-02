export const simuladoAbordagemSecundaria = {
  id: "simulado-abordagem-secundaria",
  materiaSlug: "abordagem-secundaria",
  materiaNome: "Abordagem Secundária: SAMPLE, Céfalo-Podal e SSVV",
  turma: "Soc16",

  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito Ruim",
      mensagem:
        "Conhecimento insuficiente sobre a avaliação detalhada. Revise o protocolo SAMPLE, a ordem céfalo-podal e a terminologia de sinais vitais.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Erros significativos na interpretação de parâmetros hemodinâmicos e na sequência do exame físico.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Compreensão intermediária do protocolo. Fique atento às faixas numéricas de referência para sinais vitais e terminologia médica.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótimo desempenho! Boa assimilação da anamnese SAMPLE e da identificação de alterações clínicas no APH.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Excelente! Domínio preciso da avaliação secundária, da propedêutica céfalo-caudal e da terminologia técnica de SSVV.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "No acrônimo SAMPLE utilizado na anamnese da abordagem secundária, o que a letra 'L' investiga e por que essa informação é crucial?",
      opcoes: [
        {
          id: "A",
          texto:
            "Lesões corporais prévias; importante para determinar o mecanismo do trauma.",
        },
        {
          id: "B",
          texto:
            "Líquidos e alimentos (última ingestão oral); crucial caso haja necessidade de procedimento cirúrgico ou anestesia de emergência.",
        },
        {
          id: "C",
          texto:
            "Localização da dor primária; essencial para direcionar o exame físico segmentar.",
        },
        {
          id: "D",
          texto:
            "Limitações motoras; fundamental para classificar o grau de incapacidade funcional.",
        },
        {
          id: "E",
          texto:
            "Linguagem e fala; essencial para pontuação imediata na Escala de Glasgow.",
        },
      ],
      respostaCorreta: "B",
      explicacao:
        "A letra L refere-se a 'Last Oral Intake' (Líquidos e Alimentos ingeridos por último). É vital sabê-lo pelo risco de broncoaspiração em procedimentos cirúrgicos ou anestésicos de emergência.",
    },
    {
      id: 2,
      enunciado:
        "Ao questionar o paciente sobre doenças crônicas como diabetes, hipertensão e asma, o socorrista está preenchendo qual etapa do protocolo SAMPLE?",
      opcoes: [
        { id: "A", texto: "Etapa S (Sinais e Sintomas)" },
        { id: "B", texto: "Etapa A (Alergias)" },
        { id: "C", texto: "Etapa M (Medicamentos)" },
        { id: "D", texto: "Etapa P (Passado Médico / Doenças Prévias)" },
        { id: "E", texto: "Etapa E (Eventos que levaram ao fato)" },
      ],
      respostaCorreta: "D",
      explicacao:
        "A letra P refere-se ao Passado Médico / Histórico de saúde, cirurgias e doenças crônicas prévias do paciente.",
    },
    {
      id: 3,
      enunciado:
        "O exame físico céfalo-podal deve seguir uma sequência anatômica rigorosa. Qual é a ordem sequencial correta para a palpação e inspeção do paciente?",
      opcoes: [
        {
          id: "A",
          texto:
            "Cabeça, pescoço, tórax, abdome, pelve, genitais, dorso, extremidades superiores e extremidades inferiores.",
        },
        {
          id: "B",
          texto:
            "Tórax, abdome, cabeça, pescoço, extremidades superiores, extremidades inferiores e pelve.",
        },
        {
          id: "C",
          texto:
            "Cabeça, tórax, abdome, extremidades superiores, extremidades inferiores, pescoço e dorso.",
        },
        {
          id: "D",
          texto:
            "Pescoço, cabeça, pelve, genitais, tórax, abdome, dorso e extremidades.",
        },
        {
          id: "E",
          texto:
            "Extremidades superiores, extremidades inferiores, cabeça, pescoço, tórax e abdome.",
        },
      ],
      respostaCorreta: "A",
      explicacao:
        "A sequência céfalo-caudal correta progride ordenadamente do topo da cabeça até os pés: Cabeça -> Pescoço -> Tórax -> Abdome -> Pelve -> Genitais -> Dorso -> Extremidades superiores -> Extremidades inferiores.",
    },
    {
      id: 4,
      enunciado:
        "Durante o exame céfalo-podal, a diretriz do PHTLS estabelece uma conduta ativa de observação e sensibilidade táctil. Essa conduta é resumida em:",
      opcoes: [
        { id: "A", texto: "Medir, auscultar e percutir." },
        {
          id: "B",
          texto:
            "VEJA, não apenas olhe; ESCUTE, não apenas ouça; SINTA, não apenas toque.",
        },
        {
          id: "C",
          texto: "Inspecionar, imobilizar e palpar com força máxima.",
        },
        { id: "D", texto: "Avaliar pupila, aferir glicemia e palpar o tórax." },
        { id: "E", texto: "Analisar, comparar e medicar imediatamente." },
      ],
      respostaCorreta: "B",
      explicacao:
        "O PHTLS enfatiza o uso consciente dos sentidos no exame físico: Veja (não apenas olhe), Escute (não apenas ouça) e Sinta (não apenas toque).",
    },
    {
      id: 5,
      enunciado:
        "Um paciente adulto em repouso apresenta uma Frequência Cardíaca (FC) de 52 batimentos por minuto (BPM). Qual o termo técnico correto para classificar esse achado?",
      opcoes: [
        { id: "A", texto: "Normocardia" },
        { id: "B", texto: "Taquicardia" },
        { id: "C", texto: "Bradicardia" },
        { id: "D", texto: "Taquipneia" },
        { id: "E", texto: "Bradipneia" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Bradicardia é definida como uma frequência cardíaca abaixo de 60 BPM em adultos. O intervalo de normocardia fica entre 60 e 100 BPM.",
    },
    {
      id: 6,
      enunciado:
        "Ao aferir os sinais vitais de uma vítima de trauma, o socorrista constata uma Frequência Cardíaca de 118 BPM. Esse estado hemodinâmico é denominado:",
      opcoes: [
        { id: "A", texto: "Taquicardia" },
        { id: "B", texto: "Normocardia" },
        { id: "C", texto: "Bradicardia" },
        { id: "D", texto: "Taquipneia" },
        { id: "E", texto: "Arritmia sinusal normal" },
      ],
      respostaCorreta: "A",
      explicacao:
        "Taquicardia ocorre quando a frequência cardíaca supera 100 BPM no paciente adulto.",
    },
    {
      id: 7,
      enunciado:
        "Durante a aferição da Frequência Respiratória (FR), constatam-se 8 incursões respiratórias por minuto (IRPM) em um paciente adulto. Como essa alteração é registrada na ficha de APH?",
      opcoes: [
        { id: "A", texto: "Eupneia" },
        { id: "B", texto: "Taquipneia" },
        { id: "C", texto: "Bradipneia" },
        { id: "D", texto: "Bradicardia" },
        { id: "E", texto: "Apneia" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Bradipneia é a frequência respiratória abaixo do padrão de normalidade (menor que 12 IRPM em adultos).",
    },
    {
      id: 8,
      enunciado:
        "Um adulto apresentando Frequência Respiratória de 16 IRPM está com a respiração dentro do parâmetro fisiológico normal (12 a 20 IRPM). O termo técnico correspondente é:",
      opcoes: [
        { id: "A", texto: "Taquipneia" },
        { id: "B", texto: "Bradipneia" },
        { id: "C", texto: "Eupneia" },
        { id: "D", texto: "Normocardia" },
        { id: "E", texto: "Dispneia" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Eupneia (ou paciente eupneico) é o termo que designa a respiração dentro da frequência e do padrão normais (12 a 20 IRPM).",
    },
    {
      id: 9,
      enunciado:
        "Em um paciente agitado e com dor intensa, a Frequência Respiratória aferida foi de 26 IRPM. O termo técnico para essa frequência elevada é:",
      opcoes: [
        { id: "A", texto: "Taquipneia" },
        { id: "B", texto: "Bradipneia" },
        { id: "C", texto: "Eupneia" },
        { id: "D", texto: "Taquicardia" },
        { id: "E", texto: "Hiperpneia fisiológica" },
      ],
      respostaCorreta: "A",
      explicacao:
        "Taquipneia refere-se à frequência respiratória elevada, superior a 20 IRPM em adultos.",
    },
    {
      id: 10,
      enunciado:
        "Ao realizar o teste de Glicemia Capilar (HGT/Dextro), o resultado obtido foi de 54 mg/dL. Esse valor caracteriza um quadro de:",
      opcoes: [
        { id: "A", texto: "Glicemia dentro do padrão normal" },
        { id: "B", texto: "Hiperglicemia" },
        { id: "C", texto: "Hipoglicemia" },
        { id: "D", texto: "Cetoacidose diabética" },
        { id: "E", texto: "Resistência insulínica aguda" },
      ],
      respostaCorreta: "C",
      explicacao:
        "Valores de glicemia capilar inferiores a 70 mg/dL caracterizam o quadro de hipoglicemia.",
    },
    {
      id: 11,
      enunciado:
        "Um paciente diabético apresenta nível de glicemia capilar de 210 mg/dL no atendimento pré-hospitalar. Como o socorrista deve classificar esse parâmetro?",
      opcoes: [
        { id: "A", texto: "Hipoglicemia" },
        { id: "B", texto: "Hiperglicemia" },
        { id: "C", texto: "Glicemia euglicêmica de jejum" },
        { id: "D", texto: "Normalidade absoluta de emergência" },
        { id: "E", texto: "Choque hipovolêmico" },
      ],
      respostaCorreta: "B",
      explicacao:
        "Valores de glicemia capilar acima de 190 mg/dL indicam um estado de hiperglicemia.",
    },
  ],
};
