<template>
  <div>
    <h1>Cres' Hub of Tarot</h1>
    <section>
      <h2 v-for="tarotPage of tarotPages" key="tarotPage.path">
        <router-link :to="tarotPage.path">{{ tarotPage.name }}</router-link>
      </h2>
    </section>
  </div>
</template>

<script setup lang="ts">
const tarotPages = [
  {
    path: "/divination",
    name: "Insight into Divination",
  },
  {
    path: "/resources",
    name: "Tarot Resources",
  },
  {
    path: "/good-question",
    name: "Good Questions to Ask",
  },
];
</script>

<style></style>
