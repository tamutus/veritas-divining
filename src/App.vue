<template>
  <div>
    <a href="#app-box" class="skip-links">Jump to main content</a>
    <GalaxyAnimation />
    <MainNav />
    <main id="app-box" role="main">
      <router-view v-slot="{ Component }">
        <transition name="flipfade">
          <component :is="Component" :key="$route.name"></component>
        </transition>
      </router-view>
    </main>
    <footer role="contentinfo">
      <p><a href="https://cattyfae.carrd.co">Mx. Cres Veritas</a> 2022</p>
      <p>
        Website created by <a href="https://lavrat.space">Mx. Lavra Tamutus</a>.
      </p>
      <!-- <p>
        Behold Chaos at the Heart of Orion, courtesy of the
        <a href="https://images.nasa.gov/details-PIA01322"
          >Hubble Space Telescope</a
        >
      </p> -->
    </footer>
    <SiteMap />
  </div>
</template>

<script setup lang="ts">
import MainNav from "@/components/ui/MainNav.vue";
import GalaxyAnimation from "@/components/space/GalaxyAnimation.vue";
import SiteMap from "./components/ui/SiteMap.vue";
</script>

<style scoped>
#app-box {
  margin: 70px 8vw 14vh 8vw;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

/* animation classes */
.flipfade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.flipfade-enter-active {
  transform-origin: center top;
  transition: opacity 1.4s 0.6s, transform 0.8s 0.6s;
}
.flipfade-leave-active {
  position: absolute;
  transform-origin: center top;
  left: calc(8vw + 40px);
  width: calc(100vw - 16vw - 80px);
}

.flipfade-enter-from {
  opacity: 0;
  transform: translateY(-500px) scale(1.2);
}
.flipfade-leave-to {
  opacity: 0;
  transform: translateY(500px) scale(0.75);
}

/* Responsiveness */
@media screen and (max-width: 850px) {
  #app-box {
    margin-left: 10px;
    margin-right: 10px;
  }
  .flipfade-leave-active {
    width: calc(100vw - 50px);
    left: 25px;
  }
}
@media screen and (max-width: 600px) {
  #app-box {
    padding: 30px 10px;
  }
}
</style>
