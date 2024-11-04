<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lalezar", system-ui;
  letter-spacing: .1em;
}

:root {
  --first-color: #062740;
  --second-color: #F18500;
}

h1.page-title {
    font-size: 2em;
    color: #fff;
    position: relative;
    max-width: max-content;
    margin-bottom: 50px;
}

h1.page-title::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 60%;
    height: 3px;
    background-color: #fff;
}

h2 {
  color: var(--second-color);
  margin-bottom: 30px;
  font-size: 3rem;
  line-height: 1em;
  width: 100%;
  text-align: center;
}

p {
  font-weight: 100;
  font-size: 1.1rem;
}

.text-center {
  text-align: center;
}

@media (max-width: 500px) {
  h2 {
    font-size: 2rem;
  }
}

@media (max-width: 300px) {
  body {
    display: none;
  }
}
</style>