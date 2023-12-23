<template>
    <div>
        <h2>{{ title }}</h2>
        <canvas ref="pieChart" :width="width" :height="height"></canvas>
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
        this.renderPieChart();
    },
    methods: {
        renderPieChart() {
            const ctx = this.$refs.pieChart.getContext('2d');
            new Chart(ctx, {
                type: 'pie',
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
  