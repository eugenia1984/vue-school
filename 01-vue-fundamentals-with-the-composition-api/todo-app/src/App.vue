<script setup>
  import { ref } from 'vue';

  const header = ref('ToDo App');
  const items = ref([
    { id:1, label: 'Read'},
    { id: 2, label: 'Rest'},
    { id: 3, label: 'Go for a walk'}
  ]);
</script>

<template>
  <h1>{{ header }}</h1>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
    </li>
  </ul>
</template>

