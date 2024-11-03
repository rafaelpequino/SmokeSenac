<script lang="ts">
export default {}
</script>

<template>
    <section id="main-about">
        <div id="inside-main-about">
            <div class="div-about">
                <div class="img-about">
                    <img src="https://www.robocarrace.com.br/wp-content/uploads/2023/11/carros-e1710431384328-1024x650.jpeg" alt="Imagem representativa da competição Robocar Race">
                </div>
                <div class="text-about">
                    <h3>SOBRE A COMPETIÇÃO ROBOCAR RACE</h3>
                    <p>O RoboCar Race é uma corrida de veículos autônomos em escala e a proposta é reunir grupos de pesquisas e entusiastas na área da condução autônoma de veículos terrestres. <br/>“A proposta é reunir grupos de pesquisas e entusiastas na área da condução autônoma de veículos”</p>
                </div>
            </div>
            <div class="div-about">
                <div class="text-about">
                    <h3>O QUE SÃO CARRINHOS AUTÔNOMOS?</h3>
                    <p>Carrinhos autônomos são veículos automatizados que se movem sem motorista, usando sensores, câmeras e inteligência artificial para navegar de forma segura e eficiente. Com aplicações em logística e entregas, eles ajudam a reduzir acidentes e otimizam o transporte de mercadorias em ambientes controlados e urbanos.</p>
                </div>
                <div class="img-about">
                    <img src="/img/car.jpg" alt="Imagem gerada por A.I. mostrando um carrinho eletrônico">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
section#main-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
}

#inside-main-about {
    width: 100%;
    max-width: 1280px;
}

.div-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    overflow: hidden;
    margin: 50px 0;
}

.text-about>h3 {
    font-size: 1.7rem;
    margin-bottom: 20px;
}

.img-about {
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
}

.img-about > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 999px) {

.img-about {
    width: 300px;
    min-width: 300px;
    height: 300px;
}
}

@media (max-width: 750px) {

    .div-about {
        flex-direction: column;
    }

    .div-about:nth-child(2) > .text-about {
        order: 2;
    }
}

@media (max-width: 400px) {


    .img-about {
    width: 250px;
    min-width: 250px;
    height: 250px;
}
}
</style>