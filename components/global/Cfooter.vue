<template>
    <footer id="footer">
        <div id="inside-footer">
            <div class="link-img-footer">
                <img src="/public/img/logo_smoke_footer_sf.png"
                alt="Logo do grupo 'Smoke' - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro">
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
footer#footer {
    width: 100%;
    background-color: #000;
    padding: 5px 30px 0;
}

div#inside-footer {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.link-img-footer > img {
    width: 100%;
    max-width: 150px
}
</style>