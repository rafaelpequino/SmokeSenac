<template>
  <section id="event">
    <div id="inside-event">
      <h1 class="page-title">Evento</h1>
      <div class="event-info">
        <div class="event-picture">
          <img
            src="/public/img/robocar-race.png"
            alt="Banner do evento Robocar Race -> 3º Competição Brasileira de Veículos Autônomos em Escala. Novembro 2024. Inscreva-se. Grátis e aberto para estudantes, pesquisadores, hobbistas, makers e entusiastas."
          />
        </div>
        <div class="event-data">
          <p>
            Neste ano, a cidade de Santo André foi palco da 3ª edição da
            RobocarRace, realizada no A.A.C.D do ABC. O evento destacou-se por
            promover competições entre carrinhos autônomos, que utilizam
            tecnologias de visão computacional e sensores ultrassônicos para
            navegação e tomada de decisões. A competição foi dividida em três
            modalidades, cada uma com suas próprias características e desafios:
          </p>
          <br />
          <p>
            <strong>Mini</strong>: Pista compacta, projetada pelos alunos do
            SENAC. A estrutura foi construída em MDF cortado a laser.
          </p>
          <p>
            <strong>Júnior</strong>: Percurso reduzido, mas com a adição de
            cones coloridos para orientar a navegação dos carrinhos.
          </p>
          <p>
            <strong>Master</strong>: Percurso completo inspirado no estilo de
            corrida da Fórmula 1.
          </p>
          <br />
          <p>
            A RobocarRace não apenas promoveu a inovação tecnológica e o
            aprendizado prático, mas também estimulou a criatividade e a
            colaboração entre os participantes, reafirmando seu papel como um
            dos principais eventos de robótica da região.
          </p>
          <a href="https://www.robocarrace.com.br/" target="_blank"
            >Saiba Mais</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
section#event {
  width: 100%;
  min-height: calc(100vh - 98px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  background-color: var(--first-color);
}

#inside-event {
  width: 100%;
  max-width: 1280px;
  padding: 80px 0;
}

.event-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: max-content;
  margin: auto;
  gap: 35px;
  text-align: center;
  color: #fff;
}

.event-picture {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-picture > img {
  height: 300px;
}

.event-data > a {
  display: block;
  width: max-content;
  padding: 10px 80px;
  border: 3px solid var(--second-color);
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  transition: 0.3s;
  margin: 50px auto 0;
}

.event-data > a:hover {
  background-color: var(--second-color);
}

@media (max-width: 600px) {
  .event-picture > img {
    height: 200px;
  }
}

@media (max-width: 400px) {
  .event-picture > img {
    height: 150px;
  }
}
</style>
