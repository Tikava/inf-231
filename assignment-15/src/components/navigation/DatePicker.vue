<template>
    <div>
        <input type="text" :value="formattedDate" @focus="showPicker = true" @blur="handleBlur">
        <div v-if="showPicker" class="picker-container">
            <div class="picker-overlay" @click="showPicker = false"></div>
            <div class="picker">
                <div class="picker-header">
                    <button @click="decrementMonth">&lt;</button>
                    <span>{{ formattedMonth }}</span>
                    <button @click="incrementMonth">&gt;</button>
                </div>
                <div class="picker-days">
                    <div v-for="day in daysInMonth" :key="day" class="picker-day"
                        :class="{ 'picker-day-selected': day === selectedDay }" @click="selectDay(day)">
                        {{ day }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'DatePicker',
    props: {
        value: {
            type: Date,
            default: null,
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd',
        },
        language: {
            type: String,
            default: 'en',
        },
    },
    data() {
        return {
            selectedDate: this.value ? new Date(this.value) : null,
            showPicker: false,
        };
    },
    computed: {
        formattedDate() {
            if (this.selectedDate) {
                return this.selectedDate.toLocaleDateString(this.language, { format: this.format });
            }
            return '';
        },
        formattedMonth() {
            if (this.selectedDate) {
                const month = this.selectedDate.toLocaleString(this.language, { month: 'long' });
                const year = this.selectedDate.getFullYear();
                return `${month} ${year}`;
            }
            return '';
        },
        daysInMonth() {
            if (this.selectedDate) {
                const year = this.selectedDate.getFullYear();
                const month = this.selectedDate.getMonth();
                const days = new Date(year, month + 1, 0).getDate();
                return Array.from({ length: days }, (_, index) => index + 1);
            }
            return [];
        },
        selectedDay() {
            if (this.selectedDate) {
                return this.selectedDate.getDate();
            }
            return null;
        },
    },
    watch: {
        value(newValue) {
            this.selectedDate = newValue ? new Date(newValue) : null;
        },
    },
    methods: {
        incrementMonth() {
            if (this.selectedDate) {
                const year = this.selectedDate.getFullYear();
                const month = this.selectedDate.getMonth();
                this.selectedDate = new Date(year, month + 1, 1);
            }
        },
        decrementMonth() {
            if (this.selectedDate) {
                const year = this.selectedDate.getFullYear();
                const month = this.selectedDate.getMonth();
                this.selectedDate = new Date(year, month - 1, 1);
            }
        },
        selectDay(day) {
            if (this.selectedDate) {
                const year = this.selectedDate.getFullYear();
                const month = this.selectedDate.getMonth();
                this.selectedDate = new Date(year, month, day);
                this.showPicker = false;
            }
        },
        handleBlur() {
            this.showPicker = false;
        },
    },
};
</script>
  
<style scoped>
.picker-container {
    position: relative;
}

.picker-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.picker {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    z-index: 101;
}

.picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.picker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.picker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    cursor: pointer;
}

.picker-day-selected {
    background-color: #ccc;
}
</style>
  