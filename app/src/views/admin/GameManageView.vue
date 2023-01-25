<!-- Комопнент страницы для управления активной игрой -->
<template>
  <div class="container">
    <h1>Управление игрой</h1>
    <h2>Играем пакет {{ pack.Title }} с командой {{ game.Team }}</h2>
    <h2>Раунд №{{ game.Round }}</h2>
    <h2>{{ game.RoundState }}</h2>
    <h2>Вопрос: {{ pack.Questions[game.QuestionIdx].Text }}</h2>
  </div>
</template>

<script setup>
import { useGameState } from "@/stores/gameState"
import { useQuestionPacks } from "@/stores/questionPacks"
// import { ref, onBeforeMount } from "vue"

const game = useGameState()
const packs = useQuestionPacks()
const pack = packs.getPack(game.PackID)
</script>

<style scoped>

</style>