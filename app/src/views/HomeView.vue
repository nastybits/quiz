<template>
  <div class="page container">
    <h1 class="page__title">Добро пожаловать!</h1>
    <div class="page__body">
      <div class="page__description">
        Вы участвуете в лучшей на свете пародии на игру &laquo;ЧТО?ГДЕ?КОГДА?&raquo;.
        В ней вам необходимо будет отвечать на вопросы. Все вопросы идеально проверены и отобраны лучшими экспертами
        в области подобных игр ;)
      </div>
    </div>
    <div class="page__footer">
      <button class="btn btn_lg" @click="$router.push('/rules')">К правилам</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style lang="scss" scoped>

</style>
