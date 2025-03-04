<template>
    <Pie :data="data" :options="options" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  import * as chartConfig from '../components/chartConfig'
  
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default defineComponent({
    name: 'GraphChart',
    components: {
      Pie
    },
    data() {
      return chartConfig
    }
  })
  </script>
  