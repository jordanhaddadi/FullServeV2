<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-taupe">
    <Navbar></Navbar>
    <div
      class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-full lg:py-0 lg:px-10 flex"
    >
      <div class="l:max-w-full l:ml-auto">
        <img class="h-35 w-35 fill-current lg:hidden" src="/img/default.svg" alt="Full Serve" />
        <img
          class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
          src="/img/coworking-hero.jpeg"
          alt="Bright and airy coworking space"
        />

        <div class="w-full mx-10 mt-20">
          <h1
            class="text-2xl font-bold text-gray-900 leading-tight lg:mt-12 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            Full Serve is your new coworking paradise.
            <br class="hidden lg:inline" />
            <span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Full Serve let's you escape your normal surroundings. Featuring themed, work-friendly
            spaces and spa-like amenities for feeling like you're on vacation, even when you're
            working.
          </p>

          <div class="mt-4 sm:mt-6">
            <router-link
              to="/properties"
              v-on:click="navigate()"
              class="btn btn-indigo shadow-lg sm:text-base"
              >Plan your escape</router-link
            >
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:relative">
        <img
          class="mx-20 w-full h-full"
          src="/img/coworking-hero.jpeg"
          alt="Bright and airy coworking space"
        />
      </div>
    </div>

    <div class="sm:bg-taupe md:bg-taupe-lighter">
      <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 class="text-xl text-gray-900">Popular packages</h2>
        <p class="text-gray-600">Curated spaces, set up mindfully for your success</p>
        <div class="flex flex-wrap -mx-4">
          <div
            class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3"
            v-for="destination in popularDestinations"
            v-bind:key="destination"
          >
            <DestinationCard :destination="destination" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DestinationCard from '@/components/DestinationCard.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    DestinationCard,
    Navbar
  },
  data: () => ({
    links: [
      {
        id: 0,
        text: 'Home',
        page: '/Home'
      },
      {
        id: 2,
        text: 'Portfolio',
        page: '/Portfolio'
      },
      {
        id: 2,
        text: 'Contact',
        page: '/Contact'
      }
    ],
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
  })
}
</script>
