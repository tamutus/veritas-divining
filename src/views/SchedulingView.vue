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
      <div class="thin">
        <Quote>
          <h3>
            <a href="https://paypal.me/Feykitty">My PayPal</a>
          </h3>
        </Quote>
        <Quote>
          <h3>
            For Zelle,
            <a href="mailto:daikon.Daiko@gmail.com">inquire by email</a>
          </h3>
        </Quote>
      </div>
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
              Read my <router-link to="/disclaimer">Disclaimer</router-link>
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
h3 {
}
</style>
