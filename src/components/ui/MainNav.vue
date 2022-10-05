<template>
  <nav>
    <router-link
      v-for="menuItem of menuItems"
      class="menu-item"
      :to="menuItem.link"
      >{{ menuItem.title }}</router-link
    >
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Schedule",
    link: "/schedule",
  },
  {
    title: "Tarot",
    link: "/tarot",
  },
  {
    title: "Ethics",
    link: "/ethics",
  },
];
</script>

<style scoped>
nav {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 3rem;
  width: calc(100vw - 6rem);
  height: 55px;
  background-image: linear-gradient(
    to bottom,
    rgb(78, 115, 236) 15%,
    rgb(114, 55, 192) 55%,
    rgb(21, 159, 177) 90%
  );
  border-radius: 0 0 20px 20px;
  background-size: 100% 200%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.menu-item {
  margin: 0 5px 15px 5px;
  height: 25px;
  background-image: linear-gradient(
    to bottom,
    rgb(78, 115, 236) 15%,
    rgb(114, 55, 192) 55%,
    rgb(21, 159, 177) 90%
  );
  background-size: 100% 200%;
  border-radius: 0 0 10px 10px;
  padding: 15px 20px;
  font-family: "Comfortaa", cursive;
  color: rgb(250, 203, 252);
  transition: color 0.35s ease,
    background-position 1.2s cubic-bezier(0.2, 1, 0.8, 0.9);
}
.menu-item:hover {
  background-position: 0px 115%;
  color: white;
}
@media screen and (max-width: 1000px) {
  nav {
    width: 100vw;
    height: 45px;
    left: 0;
  }
  .menu-item {
    padding: 10px;
  }
}
@media screen and (max-width: 500px) {
  nav {
    height: 39px;
  }
  .menu-item {
    margin: 0 2px 15px 2px;
    padding: 7px;
  }
}
</style>
