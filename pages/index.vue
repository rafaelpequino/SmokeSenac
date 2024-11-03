<script lang="ts">
import Cheader from '~/components/global/Cheader.vue';
import MainAbout from '~/components/index/MainAbout.vue';
import MainGroup from '~/components/index/MainGroup.vue';
import MainHome from '~/components/index/MainHome.vue';
import MainMore from '~/components/index/MainMore.vue';
import Cfooter from '~/components/global/Cfooter.vue';

export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    Data() {
        return {
            array: [
                "Pablo",
                "Isa"
            ]
        }
    },
    components: { Cheader, MainAbout, MainGroup, MainHome, MainMore, Cfooter }
}
</script>

<template>
    <Cheader />
    <div id="btn-scroll-top" @click="scrollToTop"><i class="fa-solid fa-chevron-up"></i></div>
    <main>
        <MainHome />
        <MainAbout />
        <MainGroup />
        <MainMore />
    </main>
    <Cfooter />
</template>

<style lang="css" scoped>
body {
    position: relative;
}

#btn-scroll-top {
    visibility: visible;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 20;
    background-color: var(--first-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0 0 10px #ffffff28;
}

#btn-scroll-top>i {
    color: #fff;
    font-size: 1.5rem;
}
</style>