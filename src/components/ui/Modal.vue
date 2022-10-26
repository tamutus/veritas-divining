<template>
  <transition name="modal-fade">
    <div id="modal-backdrop" @click="close" :aria-hidden="!isOpen">
      <div class="focused-content" @click.stop="">
        <button id="closer" @click="close">
          Close <span aria-hidden="true">❌</span>
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { watch } from "vue";

const emit = defineEmits(["close"]);
function close(e: MouseEvent) {
  emit("close");
}
const props = defineProps({
  isOpen: Boolean,
});
watch(
  () => props.isOpen,
  async () => {
    if (props.isOpen) {
      const scrollY = `${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}`;
      const appElement: Element | null = document.getElementById("app");
      if (appElement) {
        appElement.classList.add("frozen");
      }
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      const appElement: Element | null = document.getElementById("app");
      if (appElement) {
        appElement.classList.remove("frozen");
      }
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
);
</script>

<style scoped>
#modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(24, 24, 31, 0.87);
  z-index: 20;
}
.focused-content {
  background-color: rgb(44, 44, 109);
  box-shadow: 2px 2px 20px 1px rgb(59, 59, 124);
  flex: 0 1 80%;
  height: 80%;
  overflow-y: auto;
}
.backdrop {
}
#closer {
  position: absolute;
  top: 12%;
  right: 12%;
  z-index: 21;
}
/* Fade in and out transitions */
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  scale: 1.3;
  filter: blur(10px);
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.7s ease, scale 0.7s ease, filter 0.7s ease;
}
</style>
