<template>
  <div id="app" class="antialiased">
    HELLLLOOO
    <component :is="this.$route.meta.layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/main.css"></style>
