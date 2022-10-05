<template>
  <div class="quote-block">
    <img src="/Pendulum.jpg" />
    <div class="quote">
      <slot>
        <p>Specify slot content between Quote tags</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.quote-block {
  position: relative;
  margin: 45px 30px 60px 30px;
  margin-bottom: 60px;
  padding: 10px 25px;
  border-radius: 60px 0;
  transform: skew(-4deg);
  z-index: 1;
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: 1;
}
.quote {
  padding: 10px 25px;
  border-radius: 60px 0;
  z-index: 2;
  position: relative;
  background-color: rgba(130, 67, 138, 0.8);
}
@media screen and (max-width: 850px) {
  .quote-block {
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    padding-right: 10px;
    transform: skew(-3deg);
  }
  .quote {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (max-width: 700px) {
  .quote-block {
    margin-left: 0;
    margin-right: 0;
    transform: skew(-1.5deg);
  }
}
</style>
