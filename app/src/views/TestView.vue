<!-- Тестовый компонент. Доступен только в dev окружении -->
<template>
  <div class="page">
    <h2 class="page__title">Counter 1: {{ counter1 }} is {{ computeCounter1Type }}</h2>
    <h2 class="page__title">Counter 2: {{ counter2 }} is {{ computeCounter2Type }}</h2>
    <h2 class="page__title">Watcher: <small>{{ watcherState }}</small></h2>
    <button @click="increment(1)">Increment to Counter 1</button>
    <button @click="increment()">Increment to Counter 2</button>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
const counter1 = ref(1)
const counter2 = ref(1)

const computeCounter1Type = computed(() => {
  return counter1.value % 2 === 0 ? "even" : "odd"
})

const computeCounter2Type = computed(() => {
  return counter2.value % 2 === 0 ? "even" : "odd"
})

let watcherState = "No effects appeared"
watchEffect(() => {
  watcherState = counter1.value + " is " + computeCounter1Type.value + " | " + counter2.value + " is " + computeCounter2Type.value
})

function increment(id) {
  id === 1
      ? counter1.value++
      : counter2.value++
}

</script>

<style scoped>

</style>
