<script setup>
  import { ref } from 'vue';

  const header = ref('ToDo App');
  const items = ref([
    {id: 1, label: "Read"},
    {id: 2, label:"Go out for a walk"},
    {id: 3, label: "Dance"}
  ]);
  const newItem = ref('');
  const newItemHighPriority = ref(false);
  const saveItem = () => {
    items.value.push({ id: items.value.length + 1 ,label: newItem.value });
    newItem.value = '';
  }
</script>

<template>
  <h1>{{ header }}</h1>
  <form class="flex" @submit.prevent="saveItem">
    <input 
      v-model.trim="newItem" 
      type="text" 
      placeholder="Add a ToDo item here..." 
      class="todo-list-item-input"
    />
    <span class="priority-span">Priority:</span>
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <br />
    <br />
    <button class="btn btn-primary">
      Save item
    </button>
    <br />
  </form>
  <ul>
    <li v-for="{id, label} in items" :key="id"> 
      {{ label }}
    </li>
  </ul>
</template>

