<template>
  <div>
    <h1>
      <div>Veritas</div>
      <div>Divining</div>
    </h1>
    <div>
      <Portrait
        image-file-name="Cres with cards transparent.png"
        alt-text="Reader Cres sporting a conical witch hat with a wide, galaxy-print brim"
      >
        <h2>
          Hello, I’m Cres (<a href="http://pronouns.page/@CattyFae">They/Them</a
          >)!
        </h2>
        <p>
          You may know me from elsewhere on the internet as
          <a href="https://twitter.com/cattyfae">@CattyFae</a>, or
          <a href="https://twitter.com/veritasdivining">@VeritasDivining</a>. I
          am a trans, non-binary, agender, ace, Filipino American Tarot
          Practitioner, as well as a Pagan Witch. I have been Reading Tarot
          since June 2016, so it has been 6 years and counting so far on my
          Tarot Journey. Thank you so much for visiting my website, I’m glad to
          make your acquaintance and am gladly at your service as a Diviner. 😃
        </p>
      </Portrait>
    </div>

    <hr />

    <h2>
      <em>may you rejoice with your friends</em>
    </h2>
    <TarotCard />
  </div>
</template>

<script setup lang="ts">
import TarotCard from "@/components/tarot/TarotCard.vue";
import Portrait from "@/components/ui/Portrait.vue";
</script>

<style scoped>
hr {
  border-top: 10px dotted;
  border-bottom: none;
  margin: 50px 10%;
}
h1 {
  text-transform: uppercase;
  margin-top: 21vh;
  margin-bottom: 21vh;
  font-size: 5em;
  line-height: 3em;
  letter-spacing: 10px;
  border: 20px solid transparent;
  border-top: 9px solid rgb(96, 97, 170);
  border-bottom: 5px solid rgb(116, 114, 252);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
h1 :first-child {
  translate: 0 -30px;
  animation: above 1.2s 1.9s backwards;
}
h1 :nth-child(2) {
  margin-left: 30px;
  translate: 0 30px;
  animation: below 1.2s 2.5s backwards;
}
@keyframes above {
  0% {
    translate: none;
  }
}
@keyframes below {
  0% {
    translate: none;
  }
}

h2 {
}

@media screen and (max-width: 950px) {
  h1 {
    font-size: 4em;
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
    line-height: 8em;
  }
}
</style>
