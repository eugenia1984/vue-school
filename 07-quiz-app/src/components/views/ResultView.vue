<template>
  <div>
    <h1>Your answer is:</h1>
    <div class="viewer py-3 text-center">
      {{ result }}
    </div>
    <div class="animate__animated animate__bounceIn animate__delay-1s">
      <hr />
      <button 
        @click="startOver"
        class="btn text-uppercase fw-bold py-2 rounded-pill rounded-2 mb-2"
      >
        Start over
      </button>
      <button 
        @click="getResult"
        class="btn text-uppercase fw-bold py-2 rounded-pill rounded-2"
      >
        Decide again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  mounted() {
    this.getResult();
  },
  methods: {
    startOver() {
      this.$emit('startOver')
    },
    getResult() {
      this.$emit('showResult');
    }
  }
}
</script>