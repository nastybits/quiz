<template>
  <div class="about">
    <h1>This is an NOT FOUND page</h1>
    <router-link :to="{ name: 'Test', params: {} }">Link to test page</router-link>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
