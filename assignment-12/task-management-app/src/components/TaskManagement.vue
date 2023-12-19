<template>
    <div>
        <h1>Task Management App</h1>
        <form @submit.prevent="addTask">
            <input v-model="newTask.title" placeholder="Task title">
            <button type="submit">Add Task</button>
        </form>
        <h2>Tasks</h2>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <input type="checkbox" v-model="task.completed">
                <span>{{ task.title }}</span>
            </li>
        </ul>
        <p>Total tasks: {{ totalTasks }}</p>
        <p>Completed tasks: {{ completedTasks }}</p>
        <p>Incomplete tasks: {{ incompleteTasks }}</p>
    </div>
</template>
<script>
export default {
    name: 'TaskManagement',
    data() {
        return {
            newTask: {
                title: '',
                completed: false
            },
            tasks: []
        }
    },
    computed: {
        totalTasks() {
            return this.tasks.length;
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed).length;
        },
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed).length;
        }
    },
    methods: {
        addTask() {
            if (this.newTask.title) {
                this.tasks.push({ ...this.newTask });
                this.newTask.title = '';
            }
        }
    },
    watch: {
        tasks: {
            handler() {
                console.log('Task list modified');
            },
            deep: true
        }
    },
    created() {
        this.tasks = [
            { title: 'Task 1', completed: false },
            { title: 'Task 2', completed: true },
            { title: 'Task 3', completed: false }
        ];
    }
}
</script>