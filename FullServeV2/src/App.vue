<script setup>
import DestinationCard from './components/DestinationCard.vue'
import Navbar from './components/Navbar.vue'
import PropertyCard from './components/PropertyCard.vue'
</script>

<template>
  <div id="app" class="antialiased">
    HELLLLOOO
    <component :is="this.$route.meta.layout">
      <router-view />
      <DestinationCard />
      <Navbar />
      <PropertyCard />
    </component>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/main.css"></style>
