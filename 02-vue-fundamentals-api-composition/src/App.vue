<template>
  <div>
    <h1>Hi {{ name.toUpperCase() }}</h1>
    <hr />
    <h2 :style="colorBlue">I'm blue</h2>
    <hr/>
    <p>{{ isActive ? 'I am active' : 'I am inactive' }}</p>
  </div>
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
  <hr />
  <div>
    <h2>v-show</h2>
    <p v-show="isActive">I'm active with v-show</p>
  </div>
  <hr />
  <div>
    <h2>v-for</h2>
    <ul>
      <li v-for="station in stations" :key="station">{{ station }}</li>
    </ul>
    <span>Fruits</span>
    <ul>
      <li v-for="{name, price, description} in fruitArr" :key="name">
        {{ `EUR ${price} - ${name} (${description})` }}
      </li>
    </ul>
    <span>v-for with object</span>
    <ul>
      <li v-for="(value, propiedad, index) in appleObj" :key="value">
        {{ `${index} - ${propiedad} - ${value}` }}
      </li>
    </ul>
  </div>
  <hr />
  <div>
    <h2>v-on (@click)</h2>
    <button @click="handleClick">Click me</button>
    <button @click="handleClickWithDynamicText('You click me, with dynamic text')">Click me</button>
    <hr />
    <h2>ref() y computed</h2>
    <button @click="decrement">- </button>
    <span class="counter-value" :class="classCounter"> {{ counter }}</span>
    <button @click="increment">+ </button>
    <button @click="reset">Reset</button>
  </div>
  <hr /> 
</template>

<script setup>
import { ref, computed } from 'vue';

const name = "Eugenia";
const colorBlue = "color: blue";
const isActive = true; 
const isOlder = false;
const iAm18 = 18;
const stations = ['Summer', 'Autumn', 'Winter', 'Spring'];
const fruitArr = [
  {
    name: "Apple",
    price: "1.20",
    description: "1kg of apples"
  },
  {
    name: "Banana",
    price: "1.60",
    description: "1kg of bananas"
  }
];
const appleObj = {
  name: "Apple",
  price: "1.20",
  description: "1kg of apples"
}
// Reactivity
const counter = ref(10);
// Methods
const handleClick = () => alert('You click me')
const handleClickWithDynamicText = (message) => alert(message)
const increment = () => counter.value ++;
const decrement = () => {
  if(counter.value > 0) {
    counter.value--;
  }
}
const reset = () => counter.value = 10;
// Computed
const classCounter = computed( () => {
  if(counter.value === 10 ) return 'ten';

  if(counter.value > 10 ) return 'max-ten';
  
  if(counter.value < 10)  return 'less-ten';
})
</script>

<style>
h1 {
  color: red;
}

button {
  margin: 10px;
}

.counter-value {
  margin: 10px;
  font-weight: 800;
}

.max-ten {
  color: green;
}

.ten {
  color: blue;
}

.less-ten {
  color: red;
}
</style>