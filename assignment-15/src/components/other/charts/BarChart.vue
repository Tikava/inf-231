<template>
    <div>
        <h2>{{ title }}</h2>
        <canvas ref="barChart" :width="width" :height="height"></canvas>
    </div>
</template>
  
<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        labels: {
            type: Array,
            required: true,
        },
        datasets: {
            type: Array,
            required: true,
        },
        options: {
            type: Object,
            default: () => ({}),
        },
        width: {
            type: [Number, String],
            default: 400,
        },
        height: {
            type: [Number, String],
            default: 300,
        },
        colors: {
            type: Array,
            default: () => [],
        },
        showLegend: {
            type: Boolean,
            default: true,
        },
        showTooltip: {
            type: Boolean,
            default: true,
        },
        animation: {
            type: Object,
            default: () => ({}),
        },
    },
    mounted() {
        this.renderBarChart();
    },
    methods: {
        renderBarChart() {
            const ctx = this.$refs.barChart.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.labels,
                    datasets: this.datasets,
                },
                options: {
                    ...this.options,
                    plugins: {
                        legend: {
                            display: this.showLegend,
                        },
                        tooltip: {
                            enabled: this.showTooltip,
                        },
                    },
                    animation: this.animation,
                },
            });
        },
    },
};
</script>
  