<!-- Комопнент страницы для управления активной игрой -->
<template>
  <div class="container">
    <h1>Управление игрой</h1>
    <h2>Играем пакет {{ pack.Title }} с командой {{ game.Team }}</h2>
    <h2>Раунд №{{ game.Round }}. Этап: {{ game.RoundStateName }}</h2>
    <h2>Вопрос: {{ pack.Questions[game.QuestionIdx].Text }}</h2>
    <QBtn label="Следующий этап раунда" @click="game.nextState()"/>
    <QBtn label="Следующий раунд" @click="game.nextRound()"/>
  </div>
</template>

<script setup>
import { useGameState } from "@/stores/gameState"
import { useQuestionPacks } from "@/stores/questionPacks"
import QBtn from "@/components/ui/QBtn.vue"

const game = useGameState()
const packs = useQuestionPacks()
const pack = packs.getPack(game.PackID)
</script>

<style scoped>

</style>