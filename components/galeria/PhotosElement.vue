<template>
  <section id="photos">
    <div id="inside-photos">
      <h1 class="page-title">Galeria</h1>
      <div class="photos-picture">
        <div class="photo" v-for="n in 12">
          <img
            :src="'/img/galeria/' + n + '.jpg'"
            alt="Foto do evento Robocar Race"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
section#photos {
  width: 100%;
  min-height: calc(100vh - 98px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  background-color: var(--first-color);
}

#inside-photos {
  width: 100%;
  max-width: 1280px;
  padding: 80px 0;
}

.photos-picture {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.photo {
  width: 300px;
  height: 300px;
}

.photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 400px) {
  .photo {
    width: 280px;
    height: 280px;
  }
}
</style>
