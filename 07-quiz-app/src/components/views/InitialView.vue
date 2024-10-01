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
        class="btn text-uppercase  fw-bold py-2 rounded-pill rounded-2"
      >
        Next
      </button>
    </div>
    <div v-if="error" class="fw-bold text-center error">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
      </svg> Your question is too short
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      error: false
    }
  },
  methods: {
    handleNext(e) {
      e.preventDefault();

      if(this.question.length <= 5) {
        this.error = true;
      } else {
        this.error = false;
      }
    }
  }
}
</script>