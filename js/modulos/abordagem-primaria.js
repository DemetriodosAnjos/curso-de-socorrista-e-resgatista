// ./modulos/abordagem-primaria.js

export const abordagemPrimaria = {
  titulo: "Abordagem Primária",
  slug: "abordagem-primaria",
  turma: "Soc16",
  professores: "Guilherme / Edson",

  corpo: `

     <img src="images/abordagem-primaria/phtls.png" alt="PHTLS">

    <p>
      <strong>A grande maioria</strong> dos serviços de urgência e emergência pré-hospitalar utiliza o
      <strong>Prehospital Trauma Life Support (PHTLS)</strong> para definir as condutas a serem realizadas
      na abordagem primária à vítima de trauma. O PHTLS traz um mnemônico de <strong>6 letras (XABCDE)</strong> para
      avaliação sequencial das condições de trauma:
    </p>
   
    <ul class="lista-mnemonico">
      <li><strong>X</strong> – Hemorragias Exsanguinantes;</li>
      <li><strong>A</strong> – Vias Aéreas e controle cervical;</li>
      <li><strong>B</strong> – Respiração e Ventilação;</li>
      <li><strong>C</strong> – Circulação e Perfusão;</li>
      <li><strong>D</strong> – Estado Neurológico;</li>
      <li><strong>E</strong> – Exposição e Controle de Hipotermia.</li>
    </ul>

    <h1>X - Hemorragias Exsanguinantes</h1>
    <img src="images/abordagem-primaria/tipos-de-hemorragia.png" alt="Tipos de Hemorragia">
    
    <p>

    <strong>O passo X, introduzido na 9ª edição do
PHTLS</strong>, consiste na avaliação de grandes
hemorragias (hemorragias exsanguinantes).
</p>

<p>
A atuação em grandes hemorragias (com
medidas de contenção de hemorragias, como
torniquetes e bandagens) <strong>deve vir antes de
qualquer avaliação do paciente,</strong> pois é a falta
de sangue (choque hipovolêmico) que irá
levar o paciente a óbito antes de quaisquer
outras avaliações dos outros passos.
</p>

<p>Levando em consideração que atuaremos no <strong>X</strong>' em primeiro lugar, devemos inicialmente
conter grande hemorragias.
Para memorizarmos o que deve ser feito, de forma generalizada, podemos estabelecer
alguns passos para contenção dessa hemorragia:</p>

<ul class "lista-contencao-hemorragia">
  <li><strong>1.</strong> Realizar contenção direta sobre o ferimento;</li>
  <li><strong>2.</strong> Elevar o membro afetado;</li>
  <li><strong>3.</strong> Realizar pressão sobre o ponto de pulso mais próximo
após o ferimento;</li>
  <li><strong>4.</strong> Aplicar gelo OU resfriar o local para termos a vasoconstrição;</li>
  <li><strong>5.</strong> Realizar torniquete se possível;</li>
  <li><strong>6.</strong> Realizar o preenchimento da lesão.</li>
</ul>

<img src="images/abordagem-primaria/passos-contencao-hemorragia.png" alt="Passos de contenão da hemorragia">

<p>
  Importante ressaltar que o protocolo <strong>Stop the Bleed</strong> (Estanque o sangramento) não recomenda a utilização de
  torniquetes improvisados, uma vez que eles não possuem eficácia científica comprovada.
  O torniquete deve ser utilizado por <strong>no máximo duas horas</strong>, 
  onde este ainda não possui risco de promover necrose tecidual.
</p>

<img src="images/abordagem-primaria/stop-the-bleed.png" alt="Protocolo Stop The Bleed">

<p>
  <strong>O preenchimento da lesão</strong> em regiões onde o torniquete não se aplica é recomendado pelo
  protocolo de controle de hemorragias do Stop the Bleed. Deve-se aplicar o a gaze ou compressa
  dentro do ferimento hemorrágico.
</p>

<img src="images/abordagem-primaria/preenchimento-ferimentos.png" alt="Protocolo Preenchimento de Ferimentos">

<h1>A - Vias Aéreas e Controle Cervical </h1>

<p>
  Promover que as vias aéreas do paciente <strong>permaneçam pérvias</strong>, ou seja, permitindo o fluxo
  de ar e consecutivamente a troca gasosa. Para vítimas com estado de consciência preservado,
  devemos perguntar a vítima o que aconteceu e tentar estabelecer contato verbal, uma vez que
  uma pessoa só consegue falar se tiver ar passando pelas cordas vocais. Caso a vítima esteja inconsciente, algumas manobras são necessárias para verificar e tentar promover a desobstrução
  da via aéreas.
</p>

<img src="images/abordagem-primaria/controle-vias-aereas.png" alt="A - Vias Aereas e controle Cervical">

<p>
  <strong>As seguintes medidas também podem ser utilizadas:</strong>
</p>

<ul class "lista-medidas-desobstrução">
  <li>Aspiração de secreções e corpos estranhos em vias aéreas;</li>
  <li>Via aérea orofaríngena;</li>
  <li>Via aérea nasofaríngena;</li>
  <li>Máscara laríngea;</li>
  <li>IOT;</li>
  <li>Rolamento do paciente.</li>
</ul>

<img src="images/abordagem-primaria/manejo-vias-aereas.png" alt="Manejo das Vias Aereas">

<p>
  <strong>Rolamento de 90°</strong> - Promover a lateralização do paciente, para saída do líquido da cavidade oral,
  sem esquecer o controle cervical. Preferencialmente, o rolamento em situações traumáticas, devem ser
  realizadas em duas ou mais pessoas.
</p>

<p>
  Tal rolamento também é o primeiro passo para o posicionamento do
  paciente em tábua rígida de transporte, porém, é importante ressaltar que <strong>deve ser realizada toda a
  avaliação primária antes de pensar em transporte.</strong>
</p>

<img src="images/abordagem-primaria/manobra-90.png" alt="Manobra de 90 graus">

<p>
  <strong>O controle cervical</strong> é realizado a fim de evitar movimentação de coluna, onde danos em nervos
  cervicais podem gerar sequelas graves. É realizado o controle cervical manual, que permanece até
  que o indivíduo tenha a imobilização na prancha feita efetivamente. O colar cervical é utilizado
  em conjunto do passo <strong>A</strong> para evitar tais danos em região cervical. O colar cervical deve ser utilizado
  quando <strong>dois ou mais</strong> profissionais estão disponíveis.
</p>

<img src="images/abordagem-primaria/controle-cervical.png" alt="Controle Cervical">

<h1>B - Respiração e Ventilação</h1>

<p>
  <strong>No passo B</strong>, devemos avaliar a respiração e ventilação do paciente. Se o paciente não estiver
  respirando (parada respiratória), deve-se iniciar a <strong>Ventilação Não Invasiva por Pressão Positiva
  (VNIPP)</strong> com oxigenoterapia a 100% rapidamente.
</p>

<p>
  Se o paciente estiver respirando, estimar frequência respiratória e profundidade para determinar
  se a ventilação está adequada. O oxímetro deve ser colocado no paciente para verificar sua saturação
  de O2 Analisar qualidade da respiração (Lenta ou rápida, superficial ou profunda, regular ou irregular
  e silenciosa ou ruidosa).
</p>

<img src="images/abordagem-primaria/respiracao-ventilacao.png" alt=""Respiração e Ventilação">

<p>
  Algumas literaturas utilizam o <strong>VER, OUVIR, SENTIR</strong> para avaliar o passo <strong>B
</strong>: 

<p>
  <strong>VER:</strong> Veremos se a vítima apresenta movimentação torácica compatível com movimento
  respiratório.
</p> 

<p>
  <strong>OUVIR:</strong> Ouvir a respiração da vítima ou possíveis ruídos.
</p>

<p>
  <strong>SENTIR:</strong> Sentir o fluxo de ar e possíveis odores.
</p>

<img src="images/abordagem-primaria/ver-ouvir-sentir.png" alt="Ver, Ouvir e Sentir">

<p>
  <strong>O fornecimento de oxigênio à 100%</strong> (de 12 a 15 L/min) também é um importante passo para
  pacientes em situação de urgência. Pacientes portadores de <strong>DPOC</strong>(Doença Pulmonar Obstrutiva Crônica) devem tem oxigenoterapia
  complementar <strong>reduzida para 6 a 9 L/min.</strong> (Se informar prévia ou caso paciente apresente queda
  de saturação após início da oxigenoterapia.
</p>

<img src="images/abordagem-primaria/oxigenio.png" alt="Protocolo de oxigenioterapia">

<h1>C - Circulação e Perfusão</h1>

<p>
  <strong>Avaliação do pulso do paciente</strong>, a fim de descartar parada cardiorrespiratória faz parte
  do passo <strong>C</strong>, a identificação de pulso cheio e forte ou filiforme, assim como a frequência de pulso
  pode indicar agravos ao paciente.
</p>

<p>
  Pacientes <strong>inconscientes</strong> devem ter o pulso aferido <strong>pelo ponto
  carotídeo.</strong>
</p>

<p>
  Paciente <strong>conscientes</strong> devem ter o pulso aferido por <strong>extremidades (radial, ulnar, tibial).</strong>
</p>

<p>
  <strong>A hipotensão</strong> pode gerar um pulso distal difícil de aferir, logo nessas situações usaremos o
carotídeo.
</p>

<img src="images/abordagem-primaria/circulacao-perfusao.png" alt="Circulação e Perfusão">

<p>
  <strong>A perfusão</strong> é avaliada pressionado a polpa digital de algum dos dedos da vítima, aguardando a
  “saída” do sangue da região, soltando, e verificando se o sangue retorna para aquela região no
  tempo correto.
</p>

<p>
  Pode se utilizar também o lóbulo da orelha e os lábios para o teste de preenchimento
  capilar. <strong>O tempo deve ser menor que 2 segundos.</strong> Tempos maiores de 2 segundos podem indicar estados
  de choque e hemorragias internas.
</p>

<img src="images/abordagem-primaria/tempo-perfusao.png" alt="Tempo de Perfusao">

<p>
  Junto com a avaliação da pele, temos <strong>os três “P”s (Pulso, Perfusão e Pele)</strong> da avaliação do passo <strong>C</strong>. A pele deve ser
  avaliada no contexto <strong>sudorese (se sudorese pegajosa), temperatura e cianose.</strong> Havendo quaisquer
  dos indícios acima, deve-se pensar em possível problema circulatório ou perca de volume.
</p>

<img src="images/abordagem-primaria/protocolo-pele.png" alt="Avaliação de Pele">

<h1>D - Estado Neurológico</h1>

<p>
  <strong>A avaliação do estado neurológico</strong> do paciente é muito importante e para isso utilizaremos a
  <strong>Escala de Coma de Glasgow (ECG-P)</strong> para avaliar o estado cognitivo do paciente. Em pediatria
  podemos utilizar uma escala mais simples conhecida como <strong>AVDI</strong>.
</p>

<img src="images/abordagem-primaria/estado-neurologico.png" alt="Avaliação do Estado Neurologico">

<p>
  <strong>A Escala de Coma de Glasgow</strong> – Avaliação Pupilar promove que o prestador de socorro já avalie
  as condições neurológicas do paciente, podendo predefinir a gravidade da situação do trauma apresentado.
</p>

<p>
  A escala avalia a resposta <strong>ocular, verbal e motora</strong> do paciente, onde a reação deste nos fornecerá
  uma pontuação específica ao final da aplicação da escala, podendo variar de 1 a 15 pontos, sendo 1
  a maior gravidade possível, e 15 pontos sem disfunções neurológicas aparentes.
</p> 

<p>
  <strong>DICA:</strong> Para memorizar,
  lembre-se da quantidade de letra das seguintes palavras:
<p/>

<p>
  <strong>OLHO</strong> (4 letras = 4 possibilidades de pontuação);
</p>

<p>
  <strong>VERBO</strong> (5 letras = 5 possibilidades de pontuação);
</p>

<p>
  <strong>MOTORA</strong> ( 6 letras = 6 possibilidades de pontuação);
</p>

<p>
  <strong>A escala de coma de Glasgow</strong> pode ser confusa, principalmente para leigos e pessoas que não são
  profissionais da saúde. Por este motivo, algumas literaturas utilizam-se da escala AVDI para avaliação
  rápida do estado neurológico.
</p>

<h1>E - Exposição e Controle de Ambiente</h1>

<p>
  No passo <strong>E</strong>, é realizada a exposição do paciente para acessar ferimentos (não hemorrágicos) a fim de
  promover o melhor atendimento possível, como em situações de fraturas e ferimentos leves.
</p>

<p>
  <strong>O controle de ambiente</strong> também realizado no passo <strong>E</strong> é referente ao controle de temperatura do paciente, uma vez que a
  exposição pode indiretamente promover uma hipotermia. São utilizados cobertores e mantas térmicas para
  aquecer o paciente.
</p>

<img src="images/abordagem-primaria/exposicao-controle.png" alt="Exposição e Controle do ambiente">

<h1>Referências</h1>

<ul class="Lista-de-referencias">
  <li>National Association Of Emergency Medical Technicians U.S, American College Of Surgeons. Advanced Medical Life Support Committee. AMLS: Advanced medical life support. Burlington, Ma: Jones & Bartlett Learning; 2021.</li>
  <li>National Association Of Emergency Medical Technicians U.S, American College Of Surgeons. Committee On Trauma. PHTLS : prehospital trauma life support. Burlington, Ma: Jones & Bartlett Learning; 2020.</li>
  <li>National Association Of Emergency Medical Technicians U.S, American College Of Surgeons. Committee On Trauma.  ATLS : Advanced trauma life support. Burlington, Ma: Jones & Bartlett Learning; 2018.</li>
  <li>Ministério da Saúde, Protocolos de Suporte Básico de Vida. 2014 Available from: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_suporte_basico_vida.pdf" target="_blank" rel="noopner noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_suporte_basico_vida.pdf</a></li>
  <li>Wilberger JE, Mao G. Trauma cranioencefálico (TCE) [Internet]. Manuais MSD edição para profissionais. Manuais MSD; 2019. Available from: <a href="https://www.msdmanuals.com/pt-br/profissional/les%C3%B5esintoxica%C3%A7%C3%A3o/trauma-cranioencef%C3%A1lico-tce/trauma-cranioencef%C3%A1lico-tce" target="_blank" rel="npp´ner npreferrer">https://www.msdmanuals.com/pt-br/profissional/les%C3%B5esintoxica%C3%A7%C3%A3o/trauma-cranioencef%C3%A1lico-tce/trauma-cranioencef%C3%A1lico-tce</li>
</ul>

  `,
};
