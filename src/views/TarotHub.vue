<template>
  <div>
    <h1>Cres' Hub of Tarot</h1>
    <section>
      <Portrait
        image-file-name="Cres illuminated transparent.png"
        alt-text="Reader Cres illuminated by sunlight, wearing an ABC shirt from Mike Salcedo's Alphabet Lore series"
      >
        <div>
          <h2 v-for="tarotPage of tarotPages" key="tarotPage.path">
            <router-link :to="tarotPage.path">{{ tarotPage.name }}</router-link>
          </h2>
        </div>
      </Portrait>
    </section>
  </div>
</template>

<script setup lang="ts">
import Portrait from "@/components/ui/Portrait.vue";

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
