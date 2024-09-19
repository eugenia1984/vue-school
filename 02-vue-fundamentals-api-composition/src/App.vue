<template>
  <h1>Hi {{ name.toUpperCase() }}</h1>
  <h2 :style="colorBlue">I'm blue</h2>
  <h3>{{ isActive ? 'I am active' : 'I am inactive' }}</h3>
</template>

<script setup>
const name = "Eugenia";
const colorBlue = "color: blue";
const isActive = true;
</script>

<style>
h1 {
  color: red;
}
</style>