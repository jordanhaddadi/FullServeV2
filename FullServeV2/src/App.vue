
<template>
  <div id="app" class="antialiased">
    HELLLLOOO
    <component :is="this.$route.meta.layout">
      <RouterView />
    </component>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/main.css"></style>
