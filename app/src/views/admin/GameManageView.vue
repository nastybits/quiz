<!-- Компонент страницы для управления активной игрой -->
<template>
  <div class="container">
    <h1>Управление игрой</h1>
    <h2>Играем пакет {{ game.Pack.Title }} с командой {{ game.Team }}</h2>
    <h2>Раунд №{{ game.Round }}. Этап: {{ game.RoundStateName }}</h2>
    <h2>Вопрос: {{game.Question.Text }}</h2>
    <QBtn label="Следующий этап раунда" @click="game.nextState()"/>
    <QBtn label="Следующий раунд" @click="game.nextRound()"/>
  </div>
  <TheGame/>
</template>

<script setup>
import QBtn from "@/components/ui/QBtn.vue"
import TheGame from "@/components/TheGame.vue"
import { useGameState } from "@/stores/gameState"
const game = useGameState()
</script>

<style scoped>

</style>