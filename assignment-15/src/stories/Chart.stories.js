import LineChart from '../components/other/charts/LineChart.vue';
import PieChart from '../components/other/charts/PieChart.vue';
import BarChart from '../components/other/charts/BarChart.vue';

export default {
    tags: ['autodocs'],
    title: 'Charts',
    argTypes: {
        chartComponent: {
            control: {
                type: 'select',
            },
            options: ['LineChart', 'PieChart', 'BarChart'],
        },
        labels: { control: 'array' },
        datasets: { control: 'array' },
    },
};

const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const chartTemplate = (args, { argTypes }) => ({
    components: { LineChart, PieChart, BarChart },
    props: Object.keys(argTypes),
    setup(props) {
        const options = commonOptions;
        return { args, options };
    },
    template: `
    <div>
      <component v-if="args.chartComponent" :is="args.chartComponent" v-bind="args" />
    </div>
  `,
});

export const Line = chartTemplate.bind({});
Line.args = {
    chartComponent: 'LineChart',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{ label: 'Sales', data: [50, 60, 70, 80, 90, 100, 110] }],
};

export const Pie = chartTemplate.bind({});
Pie.args = {
    chartComponent: 'PieChart',
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{ label: 'Colors', data: [10, 5, 3] }],
};

export const Bar = chartTemplate.bind({});
Bar.args = {
    chartComponent: 'BarChart',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{ label: 'Sales', data: [50, 60, 70, 80, 90, 100, 110] }],
};

Line.parameters = {
    docs: {
        description: { story: 'Displays a line chart with customizable labels and datasets.' },
    },
};

Pie.parameters = {
    docs: {
        description: { story: 'Displays a pie chart with customizable labels and datasets.' },
    },
};

Bar.parameters = {
    docs: {
        description: { story: 'Displays a bar chart with customizable labels and datasets.' },
    },
};
