<template>
  <div id="booking-calendar">
    <IFrame url="https://cal.com/veritasdivining"> </IFrame>
  </div>
</template>

<script setup lang="ts">
import IFrame from "@/components/ui/IFrame.vue";
</script>

<style scoped>
#booking-calendar {
  height: 100%;
}
</style>
