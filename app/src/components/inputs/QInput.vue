<!-- Компонент полей ввода для пользователя TODO: В дальнейшем должен быть фабрикой для создания инпутов -->
<template>
<div :class="['q-input', {'q-input_disabled': disabled, 'q-input_error': error}]">
  <label class="q-input__label" :for="$uid">{{ label }}</label>
  <input
      class="q-input__input"
      :value="modelValue"
      :id="$uid"
      :name="name"
      :title="label"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', modelValue)"
  />
</div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue"

const emit = defineEmits([
  "input"
])

const props = defineProps({
  modelValue: {
    type: [null, String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  error: Boolean
})
</script>

<style scoped>

</style>