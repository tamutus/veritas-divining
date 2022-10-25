<template>
  <div class="holder">
    <div :class="`card ${turned ? 'turned' : ''}`" @click="turn">
      <div class="front"></div>
      <div class="back">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let turned = ref(false);
function turn() {
  turned.value = !turned.value;
}
</script>

<style scoped>
.holder {
  perspective: 1000px;
}
.card {
  position: relative;
  height: 400px;
  width: 250px;
  transition: rotate 0.5s ease, scale 1s ease, filter 0.4s ease;
  transform-origin: center;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
}
.card.turned {
  rotate: y -180deg;
  scale: 1.5;
}
.card .back,
.card .front {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  transform-origin: center;
  overflow: auto;
}
.card .back {
  background-image: url("/Tarot card back.jpg");
  background-size: cover;
  background-position: -7px 0;
  transform: translateZ(5px);
}
.card .back .content {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: rgba(48, 67, 153, 0.7);
}
.card .front {
  transform: translateZ(-5px) rotateY(180deg);
  background-color: white;
  box-shadow: 0 0 20px 3px white;
}
@media screen and (max-width: 1300px) {
  .card {
    height: 240px;
    width: 150px;
  }
  .card .back {
    background-position: -3px 0;
  }
  .card .back .content {
    padding: 20px;
  }
}
</style>
