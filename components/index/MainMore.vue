<script lang="ts">
export default {}
</script>

<template>
    <section id="main-more">
        <div id="inside-main-more">
            <h2>Por dentro do Projeto</h2>
            <div class="proj-data">
                <img src="/public/img/full-group.jpg" alt="Imagem exibindo o trabalho por trás do projeto">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo dolores dolor veniam inventore. Sint neque non deserunt! Recusandae, repellendus voluptatum odit enim esse assumenda soluta dolore doloribus deleniti hic.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque vitae nostrum earum unde autem ipsum in alias incidunt nulla necessitatibus omnis nemo repellat rem odio animi veritatis, esse quisquam.</p>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
section#main-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    background-color: var(--first-color);
}

#inside-main-more {
    width: 100%;
    max-width: 1280px;
}

.proj-data {
    width: 100%;
    text-align: center;
}

.proj-data > img {
    width: 100%;
}

.proj-data > p {
    margin-top: 20px;
    color: #fff;
}
</style>