<script setup>
  import { ref } from 'vue';

  const header = ref('ToDo App');
  const editing = ref(false);
  const items = ref([
    { id: 1, label: "Read", isDone: true, highPriority: false },
    { id: 2, label:"Go out for a walk", isDone: false, highPriority: true},
    { id: 3, label: "Dance", isDone: true, highPriority: false }
  ]);
  const newItem = ref('');
  const newItemHighPriority = ref(false);

  const saveItem = () => {
    items.value.push({ 
      id: items.value.length + 1,
      label: newItem.value,
      highPriority:  newItemHighPriority.value
    });
    // Reset values
    newItem.value = '';
    newItemHighPriority.value='';
  }

  const doEdit = (e) => {
    editing.value = e;
    newItem.value = '';
  }
  
  const toggleTodo = (item) => {
    item.isDone = !item.isDone
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
    <button 
      class="btn btn-primary"
      :disabled="newItem.length < 2"
    >
      Save item
    </button>
    <br />
  </form>
  <ul>
    <!-- <li 
      v-for="{id, label, isDone, highPriority} in items" 
      :key="id"
      class="static-class"
      :class="{
        strikeout: isDone, 
        priority: highPriority
      }"
    > 
      {{ label }}
    </li> -->
    <li 
      v-for="({id, label, isDone, highPriority}, index) in items" 
      @click="toggleTodo(items[index])"
      :key="id"
      class="static-class"
      :class="[
        isDone ? 'strikeout text-gray' : 'underlined',
        highPriority ? 'priority': ''
      ]"
    > 
      {{ label }}
    </li>
  </ul>
  <p v-if="!items.length">
    Nothing to do yet.
  </p>
</template>

