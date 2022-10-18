<template>
  <div>
    <h1>Veritas Divining</h1>
    <section>
      <Portrait
        image-file-name="Cres in space cap transparent.png"
        alt-text="Reader Cres sporting a conical witch hat with a wide, galaxy-print brim"
      >
      </Portrait>

      <h2>
        Hello, I’m Cres (<a href="http://pronouns.page/@CattyFae">they/them</a
        >)!
      </h2>
    </section>
    <section id="bio">
      <p>
        You may know me from elsewhere on the internet as
        <a href="https://twitter.com/cattyfae">@CattyFae</a>, or
        <a href="https://twitter.com/veritasdivining">@VeritasDivining</a>; I am
        a trans, non-binary, agender, ace, Filipino American Tarot Practitioner,
        as well as a Pagan Witch.
      </p>
      <p>
        I have been Reading Tarot since June 2016, so it has been 6 years and
        counting so far on my Tarot Journey. Thank you so much for visiting my
        website, I’m glad to make your acquaintance and am gladly at your
        service as a Diviner.
      </p>
    </section>
    <section id="business-overview">
      <TarotCardLinks :cards="mainPages" />
    </section>
    <h2 id="warm-wish">
      <em>may you rejoice with your friends</em>
    </h2>
  </div>
</template>

<script setup lang="ts">
import Portrait from "@/components/ui/Portrait.vue";
import TarotCardLinks from "@/components/tarot/TarotCardLinks.vue";

const mainPages = [
  {
    title: "Readings I do",
    link: "/services",
  },
  {
    title: "How to Ask",
    link: "/good-question",
  },
  {
    title: "Book a Reading",
    link: "/schedule",
  },
];
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 5em;
  line-height: 2.5em;
  letter-spacing: 10px;
  border: 20px solid transparent;
  border-top: 9px solid rgb(96, 97, 170);
  border-bottom: 5px solid rgb(116, 114, 252);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  animation: appear 0.8s 0.5s both;
}
@keyframes appear {
  0% {
    opacity: 0.8;
    scale: 0.7;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
h2 {
  margin-top: 13vh;
  margin-bottom: 10vh;
}
section {
  padding-left: 15vw;
  padding-right: 15vw;
}

@media screen and (max-width: 1250px) {
  h1 {
    font-size: 4em;
  }
}
@media screen and (max-width: 950px) {
  h1 {
    font-size: 3em;
  }
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 2em;
    line-height: 5em;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    line-height: 6em;
  }
}

@media screen and (max-width: 450px) {
  h1 {
    font-size: 1.3em;
    line-height: 4.5em;
  }
}
</style>
