<template>
  <header id="header">
    <nav id="navbar-lg">
      <ul>
        <li>
          <a :href="navbarList[0].link" v-html="navbarList[0].text"></a>
        </li>
        <li>
          <a :href="navbarList[1].link" v-html="navbarList[1].text"></a>
        </li>
        <li>
          <a href="#">
            <img
              src="/img/logo_senac.png"
              alt="Logo do Centro Universitário Senac"
              id="logo-senac"
            />
          </a>
        </li>
        <li>
          <a :href="navbarList[2].link" v-html="navbarList[2].text"></a>
        </li>
        <li>
          <a :href="navbarList[3].link" v-html="navbarList[3].text"></a>
        </li>
      </ul>
    </nav>

    <a href="#" id="link-logo-senac-sm">
      <img
        src="/img/logo_senac.png"
        alt="Logo do Centro Universitário Senac"
        id="logo-senac"
      />
    </a>
    <nav id="navbar-sm" class="navbar-close" data-status="closed">
      <ul>
        <li v-for="navbarLink in navbarList">
          <a :href="navbarLink.link" v-html="navbarLink.text"></a>
        </li>
      </ul>
    </nav>
    <div id="btn-toggle-nav" class="btn-to-close" v-on:click="toggleNavbar">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarList: [
        { link: "/", text: "Home" },
        { link: "/documentacao", text: "Documentação" },
        { link: "/evento", text: "Evento" },
        { link: "/galeria", text: "Galeria" },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      const navbarSm = document.getElementById("navbar-sm");
      const btnToggleNav = document.getElementById("btn-toggle-nav");
      if (btnToggleNav) {
        btnToggleNav.classList.toggle("active");
      }
      if (navbarSm) {
        navbarSm.classList.toggle("navbar-open");
        navbarSm.classList.toggle("navbar-close");
        if (navbarSm.getAttribute("data-status") == "closed") {
          navbarSm.setAttribute("data-status", "opened");
        } else {
          navbarSm.setAttribute("data-status", "closed");
          navbarSm.style.minHeight = "";
        }
      }
    },
  },
};
</script>

<style lang="css" scoped>
header#header {
  width: 100%;
  background-color: var(--first-color);
  padding: 10px 40px;
  box-shadow: 0 0 10px var(--second-color);
  position: fixed;
  z-index: 30;
}

nav {
  z-index: 30;
}

#link-logo-senac-sm,
#btn-toggle-nav,
nav#navbar-sm {
  display: none;
}

nav#navbar-lg {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#navbar-lg > ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#navbar-lg > ul > li,
#navbar-sm > ul > li {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 0;
}

#navbar-lg > ul > li > a,
#navbar-sm > ul > li > a {
  display: block;
  width: max-content;
  text-decoration: none;
  color: #fff;
  margin: auto;
}

img#logo-senac {
  width: 80px;
}

@media (max-width: 999px) {
  header#header {
    box-shadow: none;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }

  #btn-toggle-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  #btn-toggle-nav > div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: 0.3s;
  }

  #link-logo-senac-sm {
    display: block;
  }

  nav#navbar-sm {
    display: block;
    position: absolute;
    top: 80px;
    width: 100%;
    min-height: 500px;
    height: calc(100vh - 82px);
    overflow: auto;
    background-color: var(--first-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  .navbar-open {
    left: 0;
  }

  .navbar-close {
    left: -100%;
  }

  .btn-to-close div:nth-child(1) {
    transform: rotate(0);
  }

  .btn-to-close div:nth-child(3) {
    transform: rotate(0);
  }

  .btn-to-close.active div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .btn-to-close.active div:nth-child(2) {
    opacity: 0;
  }

  .btn-to-close.active div:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  #navbar-sm > ul {
    width: 100%;
    height: 70%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  nav#navbar-lg {
    display: none;
  }
}
</style>
