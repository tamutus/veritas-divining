<template>
  <div>
    <button @click="toggleMenu">
      <span aria-hidden="true" style="margin-right: 1rem">≡</span>
      {{ menuHidden ? "Show" : "Hide" }} Menu
    </button>
    <nav
      role="navigation"
      :class="menuHidden ? 'hidden' : ''"
      :aria-hidden="menuHidden"
    >
      <router-link
        v-for="menuItem of menuItems"
        :class="`menu-item ${menuItem.link === currentPath ? 'focused' : ''}`"
        :to="menuItem.link"
        :tabindex="menuHidden ? '-1' : '0'"
        >{{ menuItem.title }}</router-link
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const menuHidden = ref(false);
const route = useRoute();
const currentPath = ref(route.path);

watch(
  () => route.path,
  async (newPath) => {
    console.log(newPath);
    currentPath.value = newPath;
  }
);

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
    title: "Bookings",
    link: "/bookings",
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

function toggleMenu() {
  menuHidden.value = !menuHidden.value;
  localStorage.setItem("menu-hidden", String(menuHidden.value));
}

onMounted(() => {
  const menuPref = localStorage.getItem("menu-hidden");
  if (menuPref) {
    menuHidden.value = menuPref === "true";
  }
});
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
  transition: opacity 0.8s, height 0.6s;
  transition-timing-function: cubic-bezier(1, 0.6, 0.435, 0.865);
}
nav.hidden {
  opacity: 0;
  pointer-events: none;
  height: 0;
  transition: opacity 0.8s, height 0.5s 0.1s;
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
.menu-item:hover,
.menu-item.focused {
  background-position: 0px 115%;
  color: white;
}
button {
  z-index: 5;
  position: fixed;
  top: 70px;
  left: 3rem;
  width: 40px;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.25s ease-in-out;
  background-image: linear-gradient(
    to bottom,
    rgb(78, 115, 236) 15%,
    rgb(114, 55, 192) 55%,
    rgb(21, 159, 177) 90%
  );
  /* font-family: "Comfortaa", cursive; */
  color: rgb(250, 203, 252);
}
button:focus,
button:hover {
  width: 155px;
}
@media screen and (max-width: 1000px) {
  nav {
    width: 100vw;
    height: 45px;
    left: 0;
  }
  button {
    top: 60px;
    left: 10px;
  }

  .menu-item {
    padding: 10px;
  }
}
@media screen and (max-width: 600px) {
  button {
    padding-left: 1.5em;
  }
}
@media screen and (max-width: 500px) {
  nav {
    height: 39px;
  }
  button {
    top: 54px;
    left: 0px;
  }
  .menu-item {
    margin: 0 2px 15px 2px;
    padding: 7px;
  }
}
</style>
