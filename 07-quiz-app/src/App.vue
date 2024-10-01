<template>
  <div class="container">
    <transition name="fade" appear mode="out-in">
      <component 
        :is="screens[position]"
        :question="question"
        :result="result"
        @goto="handleGoTo"
        @question="handleQuestion"
        @showResult="showResult"
        @startOver="startOver"
      />
    </transition>
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
      list: [
        "Yes",
        "No",
        "Maybe",
        "Not sure..try again",
        "Ask a friend",
        "Call the police",
      ],
      screens: [
        'InitialView',
        'ConfirmView',
        'ResultView'
      ],
      position: 0,
      question: '',
      result: ''
    }
  },
  methods: {
    handleGoTo(position) {
      this.position = position;
    },
    handleQuestion(question) {
      this.question = question;
    },
    getRandomValue() {
      return this.list[Math.floor(Math.random() * this.list.length)];
    },
    generateResult() {
      let random = this.getRandomValue();

      if(this.result !== ''){
          while (random === this.result){
            random = this.getRandomValue();
          }
      }

      this.result = random;
    },
    showResult() {
      this.generateResult();
    },
    startOver(){
        this.position = 0;
        this.question = "";
        this.result = "";
    }
  }
}
</script>

<style>
  @import './assets//style.css';

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: 0.5s;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave-from {
    opacity: 1;
  }

  .fade-leave-active {
    transition: 0.5s;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>