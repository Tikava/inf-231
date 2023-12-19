<template>
  <div id="app">
    <task-management></task-management>
  </div>
</template>

<script>
import TaskManagement from './components/TaskManagement.vue';

export default {
  name: 'App',
  components: {
    'task-management': TaskManagement
  }
}
</script>

<style>
</style>
