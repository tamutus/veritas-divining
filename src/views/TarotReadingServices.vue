<template>
  <div>
    <h1>What I Offer You – Mx. Cres' Services</h1>
    <section>
      <Portrait
        image-file-name="Cres with cards transparent.png"
        alt-text="Reader Cres holding a hand of 5 Tarot cards"
      >
      </Portrait>
      <Quote>
        <p>
          Want some background on Tarot? Curious about other spreads I do?
          <router-link to="/divination">Click Here</router-link>
        </p>
      </Quote>
    </section>

    <section>
      <Portrait
        image-file-name="Pendulum.jpg"
        alt-text="Blue pendulum on a silver chain, laying on a blue, space-print cloth"
      >
        <Pricing cost="7"> One Pendulum Question </Pricing>
        <h3>
          If you are seeking an answer to a yes or no question, a pendulum
          reading is the way to go.
        </h3>
      </Portrait>
      <!-- <h3>
        Do you want to know what you should and should not do for a specific
        situation?
      </h3>
      <p>
        This tarot reading uses three cards that will offer a snapshot of the
        most pertinent concerns and energies surrounding your Query.
      </p> -->
    </section>
    <section>
      <Pricing cost="15"> One, Three-Card Tarot Reading </Pricing>
      <h3>
        Do you want to know what you should and should not do for a specific
        situation?
      </h3>
      <p>
        This tarot reading uses three cards that will offer a snapshot of the
        most pertinent concerns and energies surrounding your Query.
      </p>
    </section>
    <section>
      <Pricing cost="25"> One, Five-Card Tarot Reading </Pricing>
      <Portrait
        image-file-name="Spread on red.jpg"
        alt-text="Tarot cards, face-down, in a Cross of truth "
      >
      </Portrait>
      <h3>
        A Cross of Truth spread utilizing five cards that will offer a
        well-rounded understanding of a specific situation.
      </h3>
      <p>
        This reading can be used generally if you have no question in mind and
        will offer a sense of where you are on your life path right now, or it
        can be used for a specific question.
      </p>
    </section>
    <section>
      <h2>ADD-ONS</h2>

      <p>
        For a nominal fee, any reading service listed above can be augmented
        with an add-on.
      </p>
      <p>
        Please discuss any desired add-ons to your reading request prior to
        commencement of the reading.
      </p>
      <p>
        Add-ons are at your option only and are not necessary for a complete
        reading. Any service offered above is a complete and comprehensive
        service by itself. Yet these additional services can add invaluable
        insights that can enhance the original reading service.
      </p>

      <Pricing cost="5" :add-on="true"> ADD ON: Adjustment Card</Pricing>
      <Portrait
        image-file-name="Tarot card back.jpg"
        alt-text="Starry blue back of a tarot card"
      >
        <p>
          A final card can be drawn after your reading to show you how to change
          your future. If the probable outcome indicated in your reading is not
          favorable to you, have an adjustment card drawn to see how you can
          alter your life path and what corresponding Affirmations your
          Adjustment Card has to offer you.
        </p>
      </Portrait>

      <Pricing cost="6.00 ~ $30" :add-on="true">
        ADD ON: Supplemental Oracle Card Reading
      </Pricing>
      <h3>(Price varies according to number of Cards drawn)</h3>
      <p>
        Sometimes a tarot reading will highlight an obstacle, tension, conflict,
        or area that needs improvement and after the reading, you may want
        additional clarification on that specific point as a follow-up to the
        main reading you received. A supplemental oracle card reading can offer
        the affirmations, insights, and additional information you need to
        clarify that point
      </p>

      <h3><em>tips are optional and always appreciated!</em></h3>
    </section>

    <section>
      <button @click="showDisclaimer"><h2>Disclaimer</h2></button>
      <Modal
        v-show="disclaimerIsOpen"
        @close="closeDisclaimer"
        :is-open="disclaimerIsOpen"
      >
        <Disclaimer></Disclaimer>
      </Modal>
    </section>

    <section>
      <h2>Discount Policies</h2>
      <p>
        Sliding scale options are available to queer folks struggling to make
        ends meet. Please ask about my adjusted rates if you are facing
        financial hardship.
      </p>
      <p>
        Also, my
        <a href="https://ko-fi.com/cattyfae/tiers">Monthly Membership Tiers</a>
        are available at a Discounted Rate via my
        <a href="https://ko-fi.com/cattyfae">ko-fi page</a>.
      </p>
    </section>
    <section>
      <h2>Tarot Reading Events</h2>

      <p>
        I am available for in-person reading at events or parties, but only
        after the end of all Pandemics! If there are children present at the
        event AND the parents of the children attending the party consent to a
        tarot reader, only then will I read for minors.
      </p>

      <p>
        We can arrange in advance whether you would like me to give 5 minute
        readings, 10 minute readings, or 15 minute readings per person.
      </p>

      <Quote>
        <div>
          <h4>$75.00 per hour,</h4>
          <h4>or</h4>
          <h4>$400.00 for a 6-hour event</h4>
        </div>
      </Quote>
    </section>
    <h2><router-link to="/terms-of-service">Terms of Service</router-link></h2>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

// UI Components
import Quote from "@/components/ui/Quote.vue";
import Pricing from "@/components/ui/Pricing.vue";
import Portrait from "@/components/ui/Portrait.vue";
import Modal from "@/components/ui/Modal.vue";

// View Components
import Disclaimer from "@/views/Disclaimer.vue";

// Modal Handling
const disclaimerIsOpen: Ref<boolean> = ref(false);
function showDisclaimer(): void {
  disclaimerIsOpen.value = true;
}
function closeDisclaimer(): void {
  disclaimerIsOpen.value = false;
}
</script>

<style scoped>
section {
  border-top: 9px solid rgb(96, 97, 170);
  border-bottom: 5px solid rgb(116, 114, 252);
}
em {
  display: block;
  width: 100%;
  font-style: italic;
  text-align: center;
  font-family: Montserrat, sans-serif;
  margin-top: 12vh;
  margin-bottom: 10vh;
}
</style>
