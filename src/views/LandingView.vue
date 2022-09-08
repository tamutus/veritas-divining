<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <main>
    <h1>Veritas Divining</h1>
    <hr />
    <h2>New website in development. Check back later this month!</h2>
    <hr />
    <p>
      <em>may you rejoice with your friends</em>
    </p>
  </main>
</template>

<style scoped>
main {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
}
hr {
  border-top: 6px dotted;
  border-bottom: none;
}
</style>
