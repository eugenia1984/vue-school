<template>
  <div class="container">
    <component 
      :is="screens[position]"
    />
  </div>
</template>

<script>
import InitialView from './components/views/InitialView.vue'
import ConfirmView from './components/views/ConfirmView.vue'
import ResultView from './components/views/ResultView.vue'

export default {
  name: 'App',
  components: {
    InitialView,
    ConfirmView,
    ResultView
  },
  data() {
    return {
      screens: [
        'InitialView',
        'ConfirmView',
        'ResultView'
      ],
      position: 0
    }
  }
}
</script>

<style>
  @import './assets//style.css';
</style>