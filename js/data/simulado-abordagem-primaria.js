export const simuladoAbordagemPrimaria = {
  id: "simulado-abordagem-primaria",
  materiaSlug: "abordagem-primaria",
  materiaNome: "Abordagem Primária no Trauma (XABCDE)",
  turma: "Soc16",

  feedbacks: {
    muitoRuim: {
      min: 0,
      max: 30,
      titulo: "Muito Ruim",
      mensagem:
        "Conceitos fundamentais negligenciados. A falha na ordem do XABCDE no trauma custa vidas.",
    },
    ruim: {
      min: 31,
      max: 50,
      titulo: "Ruim",
      mensagem:
        "Confusão nas prioridades de atendimento. Revise a diferença entre a fase X e as fases A/B.",
    },
    regular: {
      min: 51,
      max: 70,
      titulo: "Regular",
      mensagem:
        "Domínio básico do protocolo, mas ainda hesita na identificação de intervenções críticas imediatas.",
    },
    bom: {
      min: 71,
      max: 90,
      titulo: "Bom",
      mensagem:
        "Ótima assimilação do algoritmo de atendimento inicial. Bom raciocínio clínico para APH.",
    },
    muitoBom: {
      min: 91,
      max: 100,
      titulo: "Muito Bom",
      mensagem:
        "Excelente! Domínio absoluto da priorização no atendimento primário ao trauma.",
    },
  },

  questoes: [
    {
      id: 1,
      enunciado:
        "No protocolo de atendimento primário ao trauma (XABCDE), qual é a primeira prioridade absoluta ao abordar uma vítima com sangramento massivo em membro?",
      opcoes: [
        {
          id: "A",
          texto: "Checar a responsividade e o estado neurológico da vítima.",
        },
        {
          id: "B",
          texto: "Realizar a abertura de vias aéreas com controle cervical.",
        },
        {
          id: "C",
          texto: "Identificar e conter a hemorragia exsanguinante (Etapa X).",
        },
        {
          id: "D",
          texto:
            "Avaliar a frequência respiratória e a expansibilidade torácica.",
        },
        {
          id: "E",
          texto: "Prevenir a hipotermia desnudando o paciente por completo.",
        },
      ],
      respostaCorreta: "C",
      explicacao:
        "A etapa 'X' (Exsanguinating Hemorrhage) antecede as demais porque uma hemorragia arterial grave pode levar à morte por choque hipovolêmico em poucos minutos, antes mesmo do comprometimento da via aérea.",
    },
    {
      id: 2,
      enunciado:
        "Na fase 'A' da abordagem primária, a prioridade da equipe de resgate ao manusear as vias aéreas é:",
      opcoes: [
        {
          id: "A",
          texto: "Manter a estabilização manual alinhada da coluna cervical.",
        },
        { id: "B", texto: "Aferir a pressão arterial sistólica." },
        { id: "C", texto: "Desnudar a vítima para procurar fraturas." },
        { id: "D", texto: "Calcular o escore da Escala de Coma de Glasgow." },
        { id: "E", texto: "Aplicar o torniquete no membro afetado." },
      ],
      respostaCorreta: "A",
      explicacao:
        "A etapa 'A' (Airway) exige a perpassividade da via aérea concomitantemente com a proteção e restrição de movimento da coluna cervical.",
    },
    {
      id: 3,
      enunciado:
        "Qual das seguintes ações pertence exclusivamente à etapa 'B' (Respiração e Ventilação) da avaliação primária?",
      opcoes: [
        {
          id: "A",
          texto: "Aplicação direta de gaze hemodinâmica em ferimento arterial.",
        },
        {
          id: "B",
          texto:
            "Inspeção, ausculta e palpação do tórax para identificar pneumotórax ou tórax instável.",
        },
        {
          id: "C",
          texto:
            "Avaliação do diâmetro e reatividade das pupilas (isocoria/anisocoria).",
        },
        {
          id: "D",
          texto:
            "Palpação de pulsos periféricos e avaliação do tempo de enchimento capilar.",
        },
        {
          id: "E",
          texto: "Aquecimento da vítima com manta térmica aluminizada.",
        },
      ],
      respostaCorreta: "B",
      explicacao:
        "Na etapa 'B' (Breathing), a integridade mecânica do tórax e a qualidade da troca gasosa são avaliadas através de inspeção, ausculta e palpação.",
    },
    {
      id: 4,
      enunciado:
        "Durante a avaliação da etapa 'C' (Circulação e Perfusão), o socorrista deve examinar criticamente:",
      opcoes: [
        { id: "A", texto: "A resposta verbal e motora do paciente." },
        {
          id: "B",
          texto:
            "Pulsos (frequência/qualidade), coloração da pele, temperatura e tempo de enchimento capilar.",
        },
        {
          id: "C",
          texto: "A presença de corpos estranhos obstruindo a cavidade oral.",
        },
        { id: "D", texto: "A simetria das pupilas e a resposta à iluminação." },
        {
          id: "E",
          texto:
            "A ocorrência de hipotermia decorrente da exposição ambiental.",
        },
      ],
      respostaCorreta: "B",
      explicacao:
        "A etapa 'C' (Circulation) foca na avaliação do estado hemodinâmico e de perfusão tecidual por meio da análise de pulsos, perfusão capilar, umidade e cor da pele.",
    },
    {
      id: 5,
      enunciado:
        "A avaliação do status neurológico rápida (utilizando a escala AVDI ou Glasgow) e o exame das pupilas são realizados em qual etapa da abordagem primária?",
      opcoes: [
        { id: "A", texto: "Etapa X" },
        { id: "B", texto: "Etapa A" },
        { id: "C", texto: "Etapa C" },
        { id: "D", texto: "Etapa D" },
        { id: "E", texto: "Etapa E" },
      ],
      respostaCorreta: "D",
      explicacao:
        "A etapa 'D' (Disability) dedica-se ao exame do estado neurológico para identificar alteração do nível de consciência ou déficit focal grave.",
    },
    {
      id: 6,
      enunciado:
        "A etapa 'E' do protocolo XABCDE envolve duas ações essenciais para a manutenção da vida do politraumatizado. Quais são elas?",
      opcoes: [
        { id: "A", texto: "Estabilização da bacia e aspiração de secreções." },
        {
          id: "B",
          texto:
            "Exposição total do paciente para busca de lesões oculdas e prevenção/controle da hipotermia.",
        },
        {
          id: "C",
          texto: "Descompressão torácica por punção e curativo de três pontas.",
        },
        {
          id: "D",
          texto: "Aferição de glicemia capilar e aplicação de torniquete.",
        },
        {
          id: "E",
          texto:
            "Alinhamento de fraturas expostas e controle de via aérea definitiva.",
        },
      ],
      respostaCorreta: "B",
      explicacao:
        "Na etapa 'E' (Exposure / Environmental Control), a vítima deve ser desnudada para identificação de lesões ocultas, sendo imediatamente coberta para evitar a hipotermia (componente da tríade da morte).",
    },
  ],
};
