<template>
  <nav id="site-map">
    <h3>Site Map</h3>
    <div id="site-map-categories">
      <div class="category" v-for="category of Object.keys(siteMap)">
        <h4>
          {{ category }}
        </h4>
        <ul>
          <li>
            <router-link
              v-for="route of siteMap[category]"
              :class="`route ${route.path === currentPath ? 'focused' : ''}`"
              :to="route.path"
              >{{ route.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { siteMap } from "@/router";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const activeRoute = useRoute();
const currentPath = ref(activeRoute.path);

watch(
  () => activeRoute.path,
  async (newPath) => {
    console.log(newPath);
    currentPath.value = newPath;
  }
);
</script>

<style scoped>
#site-map {
  margin: 27vh auto 0 auto;
  max-width: 90vw;
  padding-top: 30px;
  background-color: rgba(20, 20, 20, 0.7);
}
h3 {
  text-align: center;
  margin: 0 auto;
}
h4 {
  margin: 20px auto;
}
#site-map-categories {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.category {
  box-sizing: border-box;
  margin: 0px 0px 20px 0px;
}
li {
  list-style: none;
  display: flex;
  flex-flow: column wrap;
}
.route {
  transition: color 0.3s ease, padding 0.3s ease, background-color 0.3s ease;
  padding: 5px;
}
.route:hover,
.route.focused {
  color: #a7eee2;
  background-color: rgba(7, 7, 7, 0.863);
}
.route.focused {
  padding: 12px;
}
/* nav {
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
.menu-item:hover,
.menu-item.focused {
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
} */
</style>
