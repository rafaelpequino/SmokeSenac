<template>
  <Cheader />
  <PhotosElement />
  <Cfooter />
</template>

<script>
import PhotosElement from "~/components/galeria/PhotosElement.vue";
import Cfooter from "~/components/global/Cfooter.vue";
import Cheader from "~/components/global/Cheader.vue";

export default {
  components: { Cheader, Cfooter, PhotosElement },
};
</script>
