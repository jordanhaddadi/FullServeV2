<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <header class="flex items-center justify-end px-4 py-3 bg-main-purple">
    <!--    <div>-->
    <!--      <img class="h-20" src="/img/default.svg" alt="Full Serve">-->
    <!--    </div>-->

    <div>
      <nav>
        <router-link
          class="text-gray-400 hover:text-white focus:text-white px-2"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
          >{{ routes.text }}</router-link
        >
      </nav>
      <!--      <button type="button" class="block text-gray-500 hover:text-white focus:text-white">-->
      <!--        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">-->
      <!--          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>-->
      <!--        </svg>-->
      <!--      </button>-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
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
      ]
    }
  }
}
</script>
