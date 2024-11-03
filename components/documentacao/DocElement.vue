<template>
    <section id="document">
        <div id="inside-document">
            <h1>Documentação</h1>
            <div class="book-access">
                <div class="doc-icon">
                    <img src="/public/img/doc-icon.png" alt="Ícone de representação de um documento">
                </div>
                <div class="doc-data">
                    <h2>Tenha acesso a nosso caderno</h2>
                    <a href="#">Download</a>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {}
</script>

<style lang="css" scoped>
section#document {
    width: 100%;
    min-height: calc(100vh - 98px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    background-color: var(--first-color);
}

#inside-document {
    width: 100%;
    max-width: 1280px;
    padding: 80px 0;
}

h1 {
    font-size: 2em;
    color: #fff;
    position: relative;
    max-width: max-content;
    margin-bottom: 50px;
}

h1::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 60%;
    height: 3px;
    background-color: #fff;
}

.book-access {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    margin: auto;
    gap: 35px;
}

.doc-icon>img {
    width: 200px;
}

.doc-data>a {
    display: block;
    width: max-content;
    padding: 10px 80px;
    border: 3px solid var(--second-color);
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    transition: .3s;
    margin: auto;
}

.doc-data>a:hover {
    background-color: var(--second-color);
}


@media (max-width: 700px) {

    .book-access {
        flex-direction: column;
        gap: 50px;
    }
}
</style>