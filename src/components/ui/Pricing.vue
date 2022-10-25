<template>
  <div class="pricing-container">
    <div class="pricing">
      <img src="/NASA_Hubble_Orion.jpg" />
      <h2 class="item"><slot></slot></h2>
      <h2 class="cost">{{ addOn ? "+ " : "" }}${{ cost }}.00</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cost: String,
  addOn: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.pricing-container {
  margin: 75px auto 40px auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.pricing {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  padding: 30px 40px;
}
img {
  opacity: 0.13;
  transition: opacity 1s ease;
  max-height: 500px;
  object-fit: none;
  object-position: 85% 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px 0;
}
.pricing:hover img {
  opacity: 0.5;
}
.item {
  font-weight: 600;
  line-height: 0.8em;
}
.cost {
  padding-left: 15px;
  font-weight: 600px;
  line-height: 0.8em;
}
h2 {
  z-index: 2;
}
@media screen and (max-width: 450px) {
  .pricing {
    padding: 10px 12px;
  }
}
</style>
