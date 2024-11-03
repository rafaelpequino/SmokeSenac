<template>
    <div>Você está na página do {{ $route.params.integrante }}</div>
</template>

<script>
import MembersList from '~/js/members.json';

export default {
  data() {
    return {
        MembersList,
        member: null
    };
  },
  methods: {
    buscarUsuario() {
      this.member = this.MembersList.find(usuario => usuario.user === this.$route.params.integrante);
    }
  },
  mounted() {
    this.buscarUsuario(); // Chama a função ao montar o componente
  }
};
</script>