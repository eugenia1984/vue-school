<template>
  <div>
    <h1 class="mb-5">Ask a question</h1>
    <div>
      <input 
        name="question"
        type="text"
        class="form-control mb-3"
        id="question"
        v-model="question"
      />
      <button 
        v-if="question"
        @click="handleNext"
        class="btn animate__animated animate__fadeIn text-uppercase fw-bold py-2 rounded-pill rounded-2"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: ''
    }
  },
  methods: {
    handleNext(e) {
      e.preventDefault();

      if(this.question.length <= 5) {
        this.$emit('handleToast', {
          type: 'error',
          message: 'Your question is too short!'
        })
      } else if(this.question.length >= 50) {
        this.$emit('handleToast', {
          type: 'error',
          message: 'Your question is too long!'
        })
      } else {
        this.$emit('goto', 1);
        this.$emit('question', this.question);
      }
    }
  }
}
</script>