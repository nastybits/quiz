<!-- Компонент отвечающий за игру и переключение ранудов -->
<template>
  <div class="round">
    <div class="round__header">Раунд №{{ game.Round }}. Этап: {{ game.RoundStateName }}</div>
    <div class="round__body">
      Вопрос: {{ game.Question.Text }}
    </div>
    <div class="round__footer"></div>
  </div>
</template>

<script setup>
import { useGameState } from "@/stores/gameState"
const game = useGameState()
</script>

<style scoped>

</style>