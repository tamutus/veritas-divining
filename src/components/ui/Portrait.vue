<template>
  <div class="illustrated-content">
    <div class="content">
      <slot class="content"></slot>
    </div>
    <img
      :src="imageSource"
      :alt="altText || 'Tell me to add alt text to this image!'"
    />
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
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.content {
  flex: 1 1 65%;
}
img {
  max-height: 500px;
  max-width: 50%;
  object-fit: cover;
  border-radius: 50px;
  margin-left: 30px;
  flex: 1 1 30%;
}
</style>
