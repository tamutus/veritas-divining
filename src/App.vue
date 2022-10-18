<template>
  <GalaxyAnimation />
  <MainNav />
  <div id="app-box">
    <router-view v-slot="{ Component }">
      <transition name="flipfade">
        <component :is="Component" :key="$route.name"></component>
      </transition>
    </router-view>
  </div>
  <footer>
    <p><a href="https://cattyfae.carrd.co">Mx. Cres Veritas</a> 2022</p>
    <p>Website created by <a href="https://lavrat.space">Lavra Tamutus</a>.</p>
    <!-- <p>
        Behold Chaos at the Heart of Orion, courtesy of the
        <a href="https://images.nasa.gov/details-PIA01322"
          >Hubble Space Telescope</a
        >
      </p> -->
  </footer>
</template>

<script setup lang="ts">
import MainNav from "@/components/ui/MainNav.vue";
import GalaxyAnimation from "@/components/space/GalaxyAnimation.vue";
</script>

<style scoped>
#app-box {
  margin: 70px 8vw 23vh 8vw;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

/* animation classes */
.flipfade-enter-active,
.flipfade-leave-active {
  transition: opacity 1.3s, transform 0.8s;
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.flipfade-enter-active {
  transform-origin: center top;
  transition-delay: 0.4s;
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
  transform: translateY(500px) scale(0.6);
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
