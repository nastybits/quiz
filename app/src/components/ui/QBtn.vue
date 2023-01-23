<template>
  <button :class="['q-btn', {'q-btn_lg': lg}]" :title="computedTitle" @click="$emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: String,
  title: String,
  lg: Boolean
})

defineEmits(["click"])

const computedTitle = computed(() => {
  return props.title || props.label
})
</script>

<style lang="scss" scoped>
.q-btn {
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: none;
  background: transparent;
  font-size: 16px;
  padding: 10px 12px;
  color: inherit;
  cursor: pointer;
}

.q-btn_lg {
  font-size: 30px;
  padding: 15px 20px;
}
</style>