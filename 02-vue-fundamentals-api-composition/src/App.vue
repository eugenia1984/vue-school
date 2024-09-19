<template>
  <h1>Hi {{ name.toUpperCase() }}</h1>
  <hr />
  <h2 :style="colorBlue">I'm blue</h2>
  <hr/>
  <p>{{ isActive ? 'I am active' : 'I am inactive' }}</p>
  <hr />
  <div>
    <h2>v-if & v-else</h2>
    <p v-if="isOlder">I'm older</p>
    <p v-else>I'm not older</p>
  </div>
  <hr/>
  <div>
    <h2>v-if, v-else-if & v-else</h2>
    <p v-if="iAm18 > 18">I'm older than 18.</p>
    <p v-else-if="iAm18 === 18">I'm 18.</p>
    <p v-else>I'm younger than 18.</p>
  </div>
</template>

<script setup>
const name = "Eugenia";
const colorBlue = "color: blue";
const isActive = true; 
const isOlder = false;
const iAm18 = 18;
</script>

<style>
h1 {
  color: red;
}
</style>