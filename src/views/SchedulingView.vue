<template>
  <div>
    <h1>Schedule a Reading with Mx. Cres</h1>
    <section>
      <h2>
        <button @click="showCal" id="booker">Book Now</button>
      </h2>
      <Modal v-show="calIsOpen" @close="closeCal" :is-open="calIsOpen">
        <AppointmentScheduler></AppointmentScheduler>
      </Modal>
      <div class="thin">
        <Quote>
          <h3>
            <a href="https://paypal.me/Feykitty">My PayPal</a>
          </h3>
        </Quote>
        <Quote>
          <h3>
            For my email address, click the @ in the top left of the screen.
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
            <li>Read my <a @click="showDisclaimer">Disclaimer</a></li>
            <li>
              See my advice on
              <router-link to="/good-question"
                >Good Question Asking</router-link
              >
            </li>
          </ol>
        </h3>
      </Quote>
      <Modal
        v-show="disclaimerIsOpen"
        @close="closeDisclaimer"
        :is-open="disclaimerIsOpen"
      >
        <Disclaimer></Disclaimer>
      </Modal>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

// UI Components
import Quote from "@/components/ui/Quote.vue";
import Modal from "@/components/ui/Modal.vue";

// View Components
import Disclaimer from "@/views/Disclaimer.vue";
import AppointmentScheduler from "@/components/booking/AppointmentScheduler.vue";

// Modal Handling
const calIsOpen: Ref<boolean> = ref(false);
function showCal(): void {
  calIsOpen.value = true;
}
function closeCal(): void {
  calIsOpen.value = false;
}

const disclaimerIsOpen: Ref<boolean> = ref(false);
function showDisclaimer(): void {
  disclaimerIsOpen.value = true;
}
function closeDisclaimer(): void {
  disclaimerIsOpen.value = false;
}
</script>

<style scoped>
li {
  line-height: 2em;
}
#booker {
  margin-bottom: 50px;
  background-color: rgb(77, 164, 91);
  transition: background-color 0.4s ease;
}
#booker:hover,
#booker:focus {
  background-color: rgb(78, 201, 25);
}
</style>
