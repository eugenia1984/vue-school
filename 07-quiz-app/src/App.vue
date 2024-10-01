<template>
  <div class="container">
    <component 
      :is="screens[position]"
      @goto="handleGoTo"
      @question="handleQuestion"
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
      position: 0,
      question: ''
    }
  },
  methods: {
    handleGoTo(position) {
      this.position = position;
    },
    handleQuestion(question) {
      this.question = question;
    }
  }
}
</script>

<style>
  @import './assets//style.css';
</style>