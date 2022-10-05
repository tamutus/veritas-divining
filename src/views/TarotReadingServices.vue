<template>
  <div>
    <h1>What I Offer You – Mx. Cres' Services</h1>
    <!-- <hr /> -->
    <Quote>
      <p>
        Want some background on Tarot?
        <router-link to="/divination">Click here</router-link>
      </p>
    </Quote>

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
      <p>
        A final card can be drawn after your reading to show you how to change
        your future. If the probable outcome indicated in your reading is not
        favorable to you, have an adjustment card drawn to see how you can alter
        your life path and what corresponding Affirmations your Adjustment Card
        has to offer you.
      </p>

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

      <Pricing cost="36" :add-on="true"> ADD ON: Six Month Projection </Pricing>
      <p>
        In addition to a reading service, you can request an additional spread
        to provide a six month projection of what is up ahead. While the future
        is never fixed and predictive accuracy cannot be guaranteed, the six
        month projection does offer insights into the metaphysical energies
        surrounding a given person, environment, or situation that can help you
        better plan your future accordingly.
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
import Quote from "@/components/ui/Quote.vue";
import Pricing from "@/components/ui/Pricing.vue";
</script>

<style scoped>
section {
  border-top: 9px solid rgb(96, 97, 170);
  border-bottom: 5px solid rgb(116, 114, 252);
}
</style>
