<!-- Компонент страницы для управления активной игрой -->
<template>
  <div class="container">
    <h1>Управление игрой</h1>
    <h2>Играем пакет {{ game.Pack.Title }} с командой {{ game.Team }}</h2>
    <h2>Раунд №{{ game.Round }}</h2>
    <h2>{{ game.RoundState }}</h2>
    <h2>Вопрос: {{game.Question.Text }}</h2>
  </div>
</template>

<script setup>
import { useGameState } from "@/stores/gameState"

const game = useGameState()
game.log()
</script>

<style scoped>

</style>