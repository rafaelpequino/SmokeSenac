<script lang="ts">
export default {
  props: {
    name: { type: String, required: true },
    user: { type: String, required: true },
    srcImg: { type: String, required: true },
  },
};
</script>

<template>
  <RouterLink :to="'integrantes/' + user" class="member">
    <div class="member-img">
      <img :src="'img/members/' + srcImg" :alt="'Foto do integrante ' + name" />
    </div>
    <h3>{{ name }}</h3>
  </RouterLink>
</template>

<style lang="css" scoped>
.member {
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  text-decoration: none;
}

.member-img {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.member-img > img {
  width: 100%;
}

.member > h3 {
  font-size: 1em;
}
</style>
