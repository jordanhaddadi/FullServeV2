import Vue from 'vue'
import VueRouter from 'vue-router'
import DestinationCard from '../components/DestinationCard.vue'
import PropertyCard from '../components/PropertyCard.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter) 

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Destinations'
      }
    },
    {
      path: '/home',
      name: 'Destinations',
      component: DestinationCard,
      meta: { layout: Home }
    },
    {
      path: '/properties',
      name: 'Properties',
      component: PropertyCard,
      meta: { layout: Home }
    }
  ]
})

export default router
