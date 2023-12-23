<template>
  <div>
    <h1>Pie Chart</h1>
    <pie-chart :title="Hello" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :datasets="[
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]" :options="{ responsive: true, maintainAspectRatio: false }"></pie-chart>
  </div>
  <div>
    <MySlider :min="0" :max="100" :value="sliderValue" @update:value="updateSliderValue" />
    <p>Selected value: {{ sliderValue }}</p>
  </div>
</template>

<script>
import PieChart from '@/components/other/charts/PieChart.vue';
import MySlider from '@/components/sliders/MySlider.vue';

export default {
  components: {
    PieChart, MySlider
  },
  data() {
    return {
      sliderValue: 50, 
    };
  },
  methods: {
    updateSliderValue(value) {
      this.sliderValue = value;
    },
  },
};
</script>
