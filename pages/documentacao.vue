<template>
    <Cheader />
    <DocElement />
    <Cfooter />
</template>

<script>
import Cheader from '~/components/global/Cheader.vue';
import DocElement from '~/components/documentacao/DocElement.vue';
import Cfooter from '~/components/global/Cfooter.vue';

export default {
    components: { Cheader, DocElement, Cfooter }
}

</script>

<style lang="css" scoped>

</style>