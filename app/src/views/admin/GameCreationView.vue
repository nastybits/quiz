<!-- Компонент страницы для создания игры -->
<template>
  <div class="container">
    <div class="row">
      <div class="md-8">
        <h2>Создание игры</h2>
        <form action="#">
          <div>
            <label for="teamName">Введите название команды</label>
            <input type="text" v-model="teamName" name="teamName" id="teamName">
          </div>
          <div>
            <label for="packID">Выберите пакет вопросов</label>
            <select v-model="pack" name="packID" id="packID">
              <option v-for="(p, i) of packsStore.packs" :value="p" :key="i">{{p.Name}}</option>
            </select>
          </div>
        </form>
        <hr>
        <div v-if="pack">
          <h2>Описание пакета</h2>
          <table>
            <tr>
              <td>Имя</td>
              <td>{{ pack.Title }}</td>
            </tr>
            <tr>
              <td>Описание</td>
              <td>{{ pack.Description }}</td>
            </tr>
            <tr>
              <td>Автор</td>
              <td>{{ pack.Author }}</td>
            </tr>
            <tr>
              <td>Количество вопросов</td>
              <td>{{ pack.Questions.length }}</td>
            </tr>
          </table>
          <QBtn :label="isQuestionsShown ? 'Скрыть список вопросов' : 'Показать cписок вопросов'" :title="isQuestionsShown ? 'Скрыть' : 'Показать'" @click="isQuestionsShown = !isQuestionsShown"/>
          <ol v-show="isQuestionsShown">
            <li v-for="(q, i) of pack.Questions" :key="'q'+i">
              <p>{{ q.Text }}</p>
              <p>{{ q.Wording }}</p>
              <p>{{ q.Answer.Text}}</p>
              <p>{{ q.Comment }}</p>
            </li>
          </ol>
        </div>
        <hr>
        <QBtn v-if="pack && teamName" label="Начать" title="Начать" @click="startGame(pack.ID, teamName)"/>
      </div>
      <div class="md-4">
        <h2>Активные игры</h2>
        <div v-if="!activePack">Нет активных игр</div>
        <div v-if="activePack">
          <table>
            <tr>
              <td>Команда</td>
              <td>{{ game.Team }}</td>
            </tr>
            <tr>
              <td>Пакет</td>
              <td>{{ activePack.Title }}</td>
            </tr>
            <tr>
              <td>Раунд</td>
              <td>{{ game.Round }}</td>
            </tr>
            <tr>
              <td>Состояние раунда</td>
              <td>{{ game.RoundState }}</td>
            </tr>
            <tr>
              <td>Индекс вопроса</td>
              <td>{{ game.QuestionIdx }}</td>
            </tr>
          </table>
          <QBtn label="Проложить" title="Продолжить" @click="router.push('/admin/manage')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useQuestionPacks } from "@/stores/questionPacks"
import { useGameState } from "@/stores/gameState"
import { useRouter } from "vue-router"
import QBtn from "@/components/ui/QBtn.vue"

// Хранилище пакетов
const packsStore = useQuestionPacks()
const game = useGameState()
const router = useRouter()

// Поля формы
const teamName = ref(null)
const pack = ref(null)
const isQuestionsShown = ref(false)

const activePack = computed(() => {
    return game.Pack
})

/**
 * Запуск новой игры
 * @param {number} id - Идентификатор пакета
 * @param {string} team - Имя команды
 */
function startGame(id, team) {
  game.start(id, team)
  router.push("/admin/manage")
}
</script>

<style lang="scss" scoped>

</style>