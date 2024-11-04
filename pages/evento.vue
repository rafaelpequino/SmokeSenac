<template>
    <Cheader />
    <EventElement />
    <Cfooter />    
</template>

<script>
import Cheader from '~/components/global/Cheader.vue';
import EventElement from '~/components/evento/EventElement.vue';
import Cfooter from '~/components/global/Cfooter.vue';

export default {
    components: { Cheader, EventElement, Cfooter }
}

</script>