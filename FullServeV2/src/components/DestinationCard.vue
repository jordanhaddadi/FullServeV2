<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img class="h-32 w-35 flex-shrink-0" :src="destination.imageUrl" :alt="destination.imageAlt" />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ destination.name }}</h3>
      <p class="text-gray-600">{{ destination.description }}</p>
      <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
          >Explore {{ destination.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  props: ['destination'],
  name: 'Destinations',
  data: () => ({
    popularDestinations: [
      {
        name: 'Portland',
        description: 'Perfect for small groups',
        imageUrl: '/img/portland.jpeg',
        imageAlt: 'Small Meeting Space'
      },
      {
        name: 'Brooklyn',
        description: 'Perfect for medium groups',
        imageUrl: '/img/present.jpeg',
        imageAlt: 'Presentation Room'
      },
      {
        name: 'Newport',
        description: 'Perfect for one-on-one meetings',
        imageUrl: '/img/meet-me.jpeg',
        imageAlt: 'Beach in Miami'
      },
      {
        name: 'Seattle',
        description: 'Explore the communal kitchen',
        imageUrl: '/img/park-city.jpeg',
        imageAlt: 'The Kitchen'
      }
    ]
  }),
  methods: {
    navigate() {
      router.push({
        name: 'Properties'
      })
    }
  }
}
</script>
