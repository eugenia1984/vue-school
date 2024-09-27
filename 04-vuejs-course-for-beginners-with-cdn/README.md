# 04 - Vue.js course for Beginners with CDN

Here you will find some Vue.js practice of FreeCodeCamp YouTube videos.

In order ti use Vue.js from CDN, add: `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

---

## Directives (v-*)

- `v-model`: vue is **two way data binding**, under the hood creates: `:modelValue=""` another props that the parent component will pass to child component.

- `v-if`: `v-if="condition"` if the condition it's true it's going to be render (**conditional rendering**).

- `v-else-if`

- `v-else`

- `v-show`: similar to v-if, but when it's false has: `display: none;`, so it will be rendering, just change the scc from `display: none;`.

- `v-cloak`

- `v-for`: for loop like: `element in elements`, always remember to add unique **key**(like React when you `.map()`). It can be used in HTML tags and also in components.

---

## Events

- `v-on`: for events, for example: `v-on:click` or `@click`

- `@keyup.enter`: `enter` it's a modifier, it will happen when the `key up` AND `enter` happen at the same time.

- `@submit.prevent`: in order to **submit** a `form`.

- `$emit()`: to emit an event that other component can listen to.

## Components

Have **props**, props that pass from parent component to child component are **immutable** (the child component can't updated). 

---

## Component LifeCycle Hook

A **hook** is just a function that will be trigger to run at a specific time of the life cycle of the component.

- `beforeCreate` and once it's  `created`

- `beforeMount` and once it's `mounted`

- `beforeUpdate` and once it's `updated`

- `beforeUnmount` and once it's `unmounted`

---

![image](https://github.com/user-attachments/assets/fc953cc6-0748-4f8e-8ef1-b34b10cc1027)

---
