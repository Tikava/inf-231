<template>
  <div id="app">
    <Timeline :events="events" @update:events="events = $event" />
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue';

export default {
  name: 'App',
  components: {
    Timeline
  },
  data() {
    return {
      events: [
        { title: 'Event 1', date: '2023-01-01', description: 'This is event 1', isOpen: false },
        { title: 'Event 2', date: '2023-02-01', description: 'This is event 2', isOpen: false },
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
