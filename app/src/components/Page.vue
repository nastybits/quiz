<template>
  <div class="page container">
    <div class="page__header">
      <slot name="header">
        <h1 v-if="title" class="page__title" v-html="title"/>
        <h2 v-if="subtitle" class="page__subtitle" v-html="subtitle"/>
      </slot>
    </div>
    <div class="page__body">
      <slot></slot>
    </div>
    <div class="page__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // H1 Заголовок страницы
  title: { type: String, default: ""},
  // H2 Заголовок страницы
  subtitle: { type: String, default: ""}
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 40px 20px;
  height: 100vh;

  @include min-w($xxl) {
    padding-top: 80px;
  }
}

.page__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}

.page__title {
  font-size: 70px;
  margin-bottom: 40px;
  padding: 0;
  text-align: center;

  @include min-w($xxl) {
    font-size: 100px;
  }
}

.page__subtitle {}

.page__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}

.page__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
}

.page__description {
  width: 100%;
  font-size: 40px;
  margin-bottom: 40px;
  text-align: center;

  @include min-w($xxl) {
    font-size: 60px;
    margin-bottom: 60px;
  }
}
</style>