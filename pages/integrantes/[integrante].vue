<template>
  <Cheader />
  <MemberElement :username="$route.params.integrante" />
  <Cfooter />
</template>

<script>
import Cfooter from '~/components/global/Cfooter.vue';
import Cheader from '~/components/global/Cheader.vue';
import MemberElement from '~/components/integrantes/MemberElement.vue';

export default {
  components: { Cheader, MemberElement, Cfooter }
};
</script>