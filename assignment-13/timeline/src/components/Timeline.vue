<template>
    <div class="timeline">
        <div v-for="event in sortedEvents" :key="event.date" class="event">
            <h2 @click="toggleEvent(event)">{{ event.title }}</h2>
            <p>{{ event.date }}</p>
            <p v-if="event.isOpen">{{ event.description }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Timeline',
    props: {
        events: Array,
    },
    computed: {
        sortedEvents() {
            return this.events.sort((a, b) => new Date(b.date) - new Date(a.date));
        },
    },
    methods: {
        toggleEvent(event) {
            event.isOpen = !event.isOpen;
        },
    },
};
</script>
  
<style scoped>
.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.event {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}
</style>
  