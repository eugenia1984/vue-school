# 04 - Vue.js course for Beginners with CDN

Here you will find some Vue.js practice of FreeCodeCamp YouTube videos.

In order ti use Vue.js from CDN, add: `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

---

## Directives (v-*)

- `v-model`: vue is **two way data binding**

- `v-if`: `v-if="condition"` if the condition it's true it's going to be render (**conditional rendering**).

- `v-else-if`

- `v-else`

- `v-show`: similar to v-if, but when it's false has: `display: none;`, so it will be rendering, just change the scc from `display: none;`.

- `v-cloak`


## Events

- `v-on`: for events, for example: `v-on:click` or `@click`

- `@keyup.enter`: `enter` it's a modifier, it will happend when the `key up` AND `enter` happend at the same time.

---