<template>
  <div class="illustrated-content">
    <img
      :src="imageSource"
      :alt="altText || 'Tell me to add alt text to this image!'"
    />

    <slot class="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  imageFileName: String,
  altText: String,
});
const imageSource = computed(() => `/${props.imageFileName}`);
</script>

<style scoped>
.illustrated-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.content {
  flex: 1 1 65%;
}
img {
  max-height: 50vh;
  max-width: 50vw;
  object-fit: contain;
  border-radius: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
}
@media screen and (max-height: 280px) {
  img {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
