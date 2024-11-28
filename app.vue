<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", serif;
  letter-spacing: 0.1em;
}

:root {
  --first-color: #062740;
  --second-color: #f18500;
}

h1.page-title {
  font-size: 2em;
  color: #fff;
  position: relative;
  max-width: max-content;
  margin-bottom: 50px;
}

h1.page-title::before {
  content: "";
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
  font-size: 2.2rem;
  line-height: 1em;
  width: 100%;
  text-align: center;
}

p,
li {
  font-weight: 300;
  opacity: 0.9;
}

.text-center {
  text-align: center;
}

@media (max-width: 500px) {
  h1.page-title {
    font-size: 1.8em;
    line-height: 1em;
  }

  h2 {
    font-size: 1.7rem;
  }
}

@media (max-width: 300px) {
  body {
    display: none;
  }
}
</style>
