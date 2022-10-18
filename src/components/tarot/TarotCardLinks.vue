<template>
  <div class="spread">
    <router-link v-for="card of cards" :to="card.link">
      <TarotCard class="card">
        <h3>{{ card.title }}</h3>
      </TarotCard>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import TarotCard from "./TarotCard.vue";
const props = defineProps({
  cards: Array<{ title: String; link: RouterLinkRaw }>,
});
</script>

<style scoped>
.spread {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-evenly;
}
.card {
  margin: 20px;
}
h3 {
  font-weight: 600;
  font-size: 2.6em;
  text-align: center;
}
@media screen and (max-width: 1300px) {
  .card {
    margin: 15px;
  }
  h3 {
    font-size: 1.5em;
  }
}
</style>
