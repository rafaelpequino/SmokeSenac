<script lang="ts">
export default {};
</script>

<template>
  <section id="main-more">
    <div id="inside-main-more">
      <h2>Por dentro do Projeto</h2>
      <div class="proj-data">
        <img
          src="/public/img/full-group.jpg"
          alt="Imagem exibindo o trabalho por trás do projeto"
        />
        <p>
          A equipe Smoke estava inicialmente inscrita na modalidade Júnior da
          competição. Porém após avaliar a capacidade de autonomia do carrinho
          desenvolvido, a equipe decidiu participar da modalidade Master, a qual
          levaram o troféu de 1º lugar.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section#main-more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  background-color: var(--first-color);
}

#inside-main-more {
  width: 100%;
  max-width: 1280px;
}

.proj-data {
  width: 100%;
  text-align: center;
}

.proj-data > img {
  width: 100%;
}

.proj-data > p {
  margin-top: 20px;
  color: #fff;
}
</style>
