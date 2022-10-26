<template>
  <div>
    <h1>DISCLAIMER</h1>

    <h2>I do not do Readings on the following:</h2>
    <Quote class="thin-list">
      <ul>
        <li>Third parties and/or others without their consent</li>
        <li>Medical or Death-related Queries</li>
        <li>Past/Future Lives</li>
        <li>Large Legal Matters</li>
        <li>
          "What will the outcome be?" or other Future-related/Fortune-teller
          type Queries; instead, be proactive and ask how best you can make
          things go well for yourself with your own power...
        </li>
      </ul>
    </Quote>
    <p>
      Please note that you are getting advised by a layperson- my advice is not
      a replacement for things best left to professionals, such as therapists
      and legal counsellors.
    </p>
    <p>
      I am not responsible for your actions that you take after/upon receiving
      my advice; also, know that the future is not set in stone, it is up to you
      to make it what you will, not anyone else (especially not me).
    </p>
  </div>
</template>

<script setup lang="ts">
import Quote from "@/components/ui/Quote.vue";
</script>

<style scoped>
.thin-list {
  margin-left: 13vw;
  margin-right: 13vw;
  transition: margin 0.3s ease;
}
li {
  font-size: 1.2em;
  line-height: 2em;
}
p {
  margin: 20px 15vw;
  transition: margin 0.3s ease;
}
@media screen and (max-width: 550px) {
  .thin-list {
    margin-left: 3vw;
    margin-right: 3vw;
  }
  p {
    margin: 20px 8vw;
  }
}
</style>
