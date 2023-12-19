<template>
  <div id="app">
    <Accordion :items="accordionItems">
      <template v-slot:name1>
        <p>This is the content for Section 1.</p>
      </template>
      <template v-slot:name2>
        <p>This is the content for Section 2.</p>
      </template>
    </Accordion>
  </div>
</template>

<script>
import Accordion from './components/Accordion.vue';

export default {
  name: 'App',
  components: {
    Accordion
  },
  data() {
    return {
      accordionItems: [
        { name: 'name1', title: 'Section 1' },
        { name: 'name2', title: 'Section 2', expanded: true },
        // Add more accordion items as needed
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
