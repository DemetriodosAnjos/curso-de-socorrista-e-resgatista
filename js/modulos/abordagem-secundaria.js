// ./modulos/abordagem-secundaria.js

export const abordagemSecundaria = {
  titulo: "Abordagem Secundária",
  slug: "abordagem-secundaria",
  turma: "Soc16",
  professores: "Guilherme Lucas",

  corpo: `

      <!--BLOCO 1: ABORDAGEM SECUNDARIA -->
      <section class="abordagem-secundaria">
        <p>
          A partir da finalização da abordagem primária, o paciente já deve estar posicionado dentro da viatura,
          onde daremos início da avaliação secundária, que deve ser realizada com eficiência, buscando algumas
          informações que promovem melhorar qualidade de atendimento e maior segurança, evitando que possíveis
          lesões ou alterações da vítima não sejam avaliadas.
        </p>

        <strong>Dentro da avaliação, será avaliado:</strong>
          <ul class="lista-avaliacao-secundaria">
            <li>Exame céfalo-podal;</li>
            <li>Sinais vitais;</li>
            <li>Histórico SAMPLE</li>
          </ul>
        
        <img src="images/abordagem-secundaria/abordagem-secundaria.png" alt="Abordagem Secundária">

        <strong>Histórico SAMPLE</strong>
            <p>
              O histórico SAMPLE é um método estruturado de entrevista rápida utilizado no Atendimento Pré-Hospitalar
              (APH) e em emergências médicas para coletar a história clínica da vítima ou de acompanhantes. O objetivo
              principal é identificar informações vitais para o manejo imediato do paciente, principalmente quando
              ele está consciente ou em rápida deterioração.
            </p>
            
            <strong>Cada letra da sigla SAMPLE representa um passo da investigação:</strong>
              <ul class="lista-sample">
                <li><strong>S — Sinais e Sintomas (Signs & Symptoms)</strong>
                  O que a vítima está sentindo e o que você consegue observar. <i>Exemplo:</i> dor no peito,
                  falta de ar, tontura, sudorese, fraturas visíveis;
                </li>

                <li><strong>A — Alergias (Allergies)</strong>
                  Se a vítima tem alergia a algum medicamento, alimento, látex ou picadas de inseto.
                 <i>Exemplo:</i> alergia a dipirona ou penicilina;
                </li>

                <li><strong>M — Medicamentos (Medications)</strong>
                  Remédios de uso contínuo ou consumidos recentemente (prescritos ou não).
                  <i>Exemplo:</i> anti-hipertensivos, insulina, anticoagulantes;
                </li>

                <li><strong>P — Passado Médico / Doenças Prévias (Past Medical History)</strong>
                  Histórico de saúde, cirurgias anteriores ou condições crônicas.
                  <i>Exemplo:</i> diabetes, hipertensão, problemas cardíacos, asma;
                </li>

                <li><strong>L — Líquidos e Alimentos (Last Oral Intake)</strong>
                  Horário e conteúdo da última refeição ou ingestão de líquidos. Crucial caso o paciente
                  precise passar por procedimento cirúrgico ou anestesia de emergência;
                </li>

                <li><strong>E — Eventos que levaram ao fato (Events Leading Up To)</strong>
                  O que o paciente estava fazendo logo antes do incidente ou do início dos sintomas.
                  <i>Exemplo:</i> "estava correndo no parque e sentiu uma tontura", "a colisão ocorreu
                  após o veículo derrapar na pista";
                </li>
              </ul>

          <h3>Abordagem Secundária - Céfalo-Podal</h3>
            <p>
              Exame céfalo-podal ou céfalo-caudal é o exame físico avaliado da cabeça aos pés. Novamente
              teríamos um VER, OUVIR e SENTIR, de forma mais geral e precisa.
            </p>

            <strong>O próprio PHTLS traz o seguinte:</strong>
              <ul class="lista-phtls">
                <li>VEJA, não apenas olhe;</li>
                <li>ESCUTE, não apenas ouça;</li>
                <li>SINTA, não apenas toque.</li>
              </ul>

            <p>
              Deve-se então, realizar a palpação, iniciando-se pela cabeça e terminando nós pés, para notar
              alterações anatômicas, crepitações ósseas ou quaisquer divergências que o trauma pode ter gerado
              ao paciente. 
              
              Deve se expor (se ainda não exposta) áreas que o paciente sente dores ou o profissional note
              alterações, a fim de promover melhor visualização e atendimento da área.

              O conhecimento anatômico do socorrista será um diferencial neste momento.
            </p>

            <strong>Avaliar sequencialmente:</strong>
              <ul class="lista-avaliacao">
                <li>Cabeça;</li>
                <li>Pescoço;</li>
                <li>Tórax;</li>
                <li>Abdome;</li>
                <li>Pelve;</li>
                <li>Genitais;</li>
                <li>Dorso;</li>
                <li>Extremidades superiores;</li>
                <li>Extremidades inferiores;</li>
                <li>Exame neurológico, nova avaliação de Gasglow e foto-reatividade pupilar.</li>
              </ul>

            <img src="images/abordagem-secundaria/exame-cefalo-podal.png" alt="Exame Céfalo Podal">

        <h3>Abordagem Secundária - SSVV</h3>
            <p>
              A avaliação dos sinais vitais, faz parte da abordagem secundária ao paciente, onde deve
              ser aferido os sinais vitais da vítima, assim como sinais auxiliares.
            </p>

            <strong>São eles:</strong>
              <ul class="lista-ssvv">
                <li><strong>Frequência Cardíaca (FC):</strong> 60 a 100 Batimentos por minuto (BPM);</li>
                <li><strong>Frequência Respiratória (FR):</strong> 12 a 20 Incursões respiratórias por minuto (IRPM);</li>
                <li><strong>Pressão Arterial (PA):</strong> ~120/80 Milímetros de mercúrio (mmHg) de pressão;</li>
                <li><strong>Temperatura (°C):</strong> 35 à 37,5 graus Célsius (°C);</li>
                <li><strong>Dor:</strong> Resposta adequada à dor;</li>
                <li><strong>Saturação de Oxigênio (Sat O2):</strong>95% à 99% de saturação de oxigênio (SatO2);</li>
                <li><strong>Glicemia Capilar (HGT ou Dextro):</strong> Entre 70 e 180 miligramas por decilitro (mg/dl).</li>
              </ul>

            <img src="images/abordagem-secundaria/abordagem-ssvv.png" alt="Avaliação de Sinais Vitais">

            <!-- BOTÃO DO SIMULADO DA MATÉRIA -->
              <div style="margin-top: 2rem;">
                <a href="#" class="btn-simulado" data-simulado="abordagem-secundaria">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
                Simulado Abordagem Secundária
                </a>
              </div>

      <!--BLOCO: REFERÊNCIAS-->
      <section class="pdf-block">

        <h3>Referências</h3>
          <ul class="lista-referencias">
            <li>
              National Association Of Emergency Medical Technicians U.S, American College Of Surgeons.
              Advanced Medical Life Support Committee. AMLS: Advanced medical life support. Burlington,
              Ma: Jones & Bartlett Learning; 2021.
            </li>

            <li>
              National Association Of Emergency Medical Technicians U.S, American College Of Surgeons.
              Committee On Trauma. ATLS : Advanced trauma life support. Burlington, Ma: Jones & Bartlett
              Learning; 2018.
            </li>

            <li>
              Ministério da Saúde, Protocolos de Suporte Básico de Vida. 2014 Available from:
              <a href="https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_suporte_basico_vida.pdf" target="_blank" rel="noopner noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_suporte_basico_vida.pdf</a>
            </li>
            
            <li>
              Wilberger JE, Mao G. Trauma cranioencefálico (TCE) [Internet]. Manuais MSD edição para profissionais.
              Manuais MSD; 2019. Available from:
              <a href="https://www.msdmanuals.com/pt-br/profissional/les%C3%B5es-intoxica%C3%A7%C3%A3o/trauma-cranioencef%C3%A1lico-tce/trauma-cranioencef%C3%A1lico-tce" target="_blank" rel="noopner noreferrer">https://www.msdmanuals.com/pt-br/profissional/les%C3%B5es-intoxica%C3%A7%C3%A3o/trauma-cranioencef%C3%A1lico-tce/trauma-cranioencef%C3%A1lico-tce</a>
            </li>
                
                
          </ul>

      
      </section>
    
    `,
};
