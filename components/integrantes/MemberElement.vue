<template>
    <section id="member" v-if="member">
        <div id="inside-member">
            <h1 class="page-title">{{ member.name }}</h1>
            <RouterLink to="/" class="link-back">Voltar</RouterLink>
            <div class="about-member">
                <img :src="'/img/members/' + member.srcImg" :alt="'Foto do integrante' + member.name">
                <p>{{ member.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import MembersList from '~/js/members.json';

export default {
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            MembersList,
            member: null
        };
    },
    methods: {
        buscarUsuario() {
            this.member = this.MembersList.find(usuario => usuario.user === this.username);
        }
    },
    mounted() {
        this.buscarUsuario();
    }
}
</script>

<style lang="css" scoped>
section#member {
    width: 100%;
    min-height: calc(100vh - 98px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    background-color: var(--first-color);
}

#inside-member {
    width: 100%;
    max-width: 1280px;
    padding: 80px 0;
}

.link-back {
    position: absolute;
    top: 140px;
    right: 30px;
    display: block;
    width: max-content;
    padding: 10px 30px;
    border: 1px solid var(--second-color);
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: .9em;
    transition: .3s;
    margin: auto;
}

.about-member {
    width: 100%;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.about-member>img {
    display: block;
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
}

.about-member>p {
    color: #fff;
    font-size: .9rem;
    opacity: .8;
}

@media (max-width: 700px) {

    .link-back {
        position: inherit;
        display: block;
        width: max-content;
        padding: 10px 30px;
        border: 1px solid var(--second-color);
        border-radius: 30px;
        color: #fff;
        text-decoration: none;
        font-size: .9em;
        transition: .3s;
        margin: -10px auto 30px;
    }

    .about-member {
        flex-direction: column;
    }

    .about-member>p {
        text-align: center;
    }
}
</style>