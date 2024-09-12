<script setup>
  import { ref } from 'vue';

  const header = ref('ToDo App');
  const editing = ref(false);
  const items = ref([
    // {id: 1, label: "Read"},
    // {id: 2, label:"Go out for a walk"},
    // {id: 3, label: "Dance"}
  ]);
  const newItem = ref('');
  const newItemHighPriority = ref(false);
  const saveItem = () => {
    items.value.push({ id: items.value.length + 1 ,label: newItem.value });
    newItem.value = '';
  }
  const doEdit = (e) => {
    editing.value = e;
    newItem.value = '';
  }
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn btn-cancel" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">Add todo</button>
  </div>
  <form 
    class="add-item-form" 
    @submit.prevent="saveItem"
    v-if="editing"
  >
    <input 
      v-model.trim="newItem" 
      type="text" 
      placeholder="Add a ToDo item here..." 
      class="todo-list-item-input"
    />
    <label>
      <span class="priority-span">Priority:</span>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
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
  <p v-if="!items.length">
    Nothing to do yet.
  </p>
</template>

