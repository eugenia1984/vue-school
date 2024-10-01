<template>
  <div>
    <h1>Your question is:</h1>
    <div class="viewer py-3 text-center">
      {{ question }}
    </div>
    <div class="animate__animated animate__bounceIn animate__delay-1s">
      <hr />
      <button 
        @click="goNext"
        class="btn text-uppercase fw-bold py-2 rounded-pill rounded-2 mb-2"
      >
        Decide it
      </button>
      <button 
        @click="goBack"
        class="btn text-uppercase fw-bold py-2 rounded-pill rounded-2"
      >
        Ask a new question
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:['question'],
  methods:{
    goNext(){
      this.$emit('goto',2);
    },
    goBack(){
      this.$emit('goto',0);
      this.$emit('question','');
    }
  }
}
</script>