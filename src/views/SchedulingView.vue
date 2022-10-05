<template>
  <div>
    <h1>Schedule a Reading with Mx. Cres</h1>
    <section>
      <h2>
        Please <a href="mailto:daikon.Daiko@gmail.com">email me</a> to set up an
        appointment
      </h2>
      <h3>
        Soon, I will share a calendar here where you can directly book an
        appointment with me.
      </h3>
    </section>
    <section>
      <Quote>
        <h2>To nurture the most beneficial readings, you may:</h2>
        <h3>
          <ol>
            <li>
              Peruse my <router-link to="/services">Services</router-link>
            </li>
            <li>
              See my advice on
              <router-link to="/good-question"
                >Good Question Asking</router-link
              >
            </li>
          </ol>
        </h3>
      </Quote>
    </section>
  </div>
</template>

<script setup lang="ts">
import Quote from "@/components/ui/Quote.vue";
</script>

<style scoped>
li {
  line-height: 2em;
}
</style>
