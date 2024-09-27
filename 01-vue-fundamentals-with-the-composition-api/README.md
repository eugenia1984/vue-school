# 01- Vue fundamentals with the Composition API

---

## TODO APP

Inside `todo-app` I create a little aplication of a to-do list in order to learn Vue fundamentals with Composition API


---

## Commands

`cd todo-app` -> to get inside the project

`npm install`-> to install dependencies

`npm run format`

`npm run dev`-> to run de application

---

## Steps to create the project:


`npm create vue@latest`

This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for several optional features such as TypeScript and testing support:

```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

If you are unsure about an option, simply choose No by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:

```bash
$ cd <your-project-name>
$ npm install
$ npm run dev
```