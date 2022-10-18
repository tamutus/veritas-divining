<template>
  <div>
    <h1>Specifics of Divination Services</h1>

    <section>
      <Portrait image-file-name="Pendulum.jpg" alt-text="Pendulum">
        <div>
          <h2>Pendulum Reading</h2>
          <ul>
            <li>(One) “Yes/No” Query</li>
          </ul>
        </div>
      </Portrait>
    </section>

    <section>
      <h2>Tarot Spreads</h2>

      <h3>3-Cards</h3>

      <h4>“What should I do?” (What to do and not to do):</h4>

      <ol>
        <li>Situation</li>
        <li>Do This</li>
        <li>Don’t do This</li>
      </ol>

      <h3>4-Cards</h3>

      <h4>Money Check in:</h4>

      <ol>
        <li>The current financial situation</li>
        <li>What is the lesson for you regarding money?</li>
        <li>Who or What project will bring in more money?</li>
        <li>A Potential Outcome</li>
      </ol>

      <h4>A Relationship Check-in:</h4>

      <ol>
        <li>Me (the Querent)</li>
        <li>You (the other party)</li>
        <li>Us- the relationship itself</li>
        <li>Advice</li>
      </ol>

      <h3>5-Cards</h3>

      <h4>Cross of Truth</h4>

      <ol>
        <li>Current circumstances</li>
        <li>Hopes and/or Fears</li>
        <li>What is helpful/good to do/don't avoid</li>
        <li>What may be harmful/best avoided/don't do</li>
        <li>A potenial outcome and/or advice</li>
      </ol>

      <h4>Path to Happiness:</h4>
      <ol>
        <li>What do I need most right now to be happy?</li>
        <li>What am I focusing on instead?</li>
        <li>What quality should be developed more?</li>
        <li>Where am I headed in the Short-term? (Potential Outcome)</li>
        <li>Where am I headed in the Long-term? (Another Potential Outcome)</li>
      </ol>

      <h4>My Focus at This Time in my Life:</h4>

      <ol>
        <li>The issue that’s upper most in my mind</li>
        <li>Something more to know about it</li>
        <li>Obstacle to my focus</li>
        <li>What to do about it?</li>
        <li>A Potential Outcome</li>
      </ol>

      <h4>Understanding Self in any Situation:</h4>

      <ol>
        <li>Inner-self regarding the situation</li>
        <li>Outer-self regarding the situation</li>
        <li>What needs to be confronted</li>
        <li>What’s helping you</li>
        <li>A Potential Outcome</li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import Portrait from "@/components/ui/Portrait.vue";
</script>

<style scoped>
h4 {
  text-align: left;
  margin-left: 10%;
}
</style>
