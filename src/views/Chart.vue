<template>
  <div class="root">
    <h1>Sample Chart</h1>
    <button @click="toggleData">toggle data</button>
    <SampleChartVueD3 class="chart" :data="chartData" />
    <hr />
    <SampleChartJustD3 :data="chartData"/>
  </div>
</template>


<script>

import { mapState } from 'vuex' // import state
const SampleChartVueD3 = require('@/components/charting/SampleChartVuePlusD3.vue').default
const SampleChartJustD3 = require('@/components/charting/SampleChartJustD3.vue').default
export default{
  components: {SampleChartVueD3, SampleChartJustD3},
  data() {
    return {
      chartData: [],
      chartData1: [
        {x: 0, y: 0},
        {x: 1, y: 10},
        {x: 2, y: 20},
        {x: 3, y: 5},
        {x: 4, y: 15},
        {x: 5, y: 110}
      ],
      chartData2: [
        {x: 0, y: 0},
        {x: 1, y: 10},
        {x: 2, y: 50},
        {x: 3, y: 5},
        {x: 4, y: 15},
        {x: 5, y: 0}
      ]
    }
  },

  computed: {
    ...mapState(['isAdmin', 'applicationVersion'])
  },

  mounted() {
    // generate some random data
    const dataLength = 20
    this.chartData1 = this.generateData(dataLength)
    this.chartData2 = this.generateData(dataLength)

    // set chart data to the first set
    this.chartData = this.chartData1
  },
  methods: {
    generateData(numPoints) {
      return Array.from({length: numPoints}, (d, i) => ({x: i, y: Math.floor(Math.random() * 100)}) )
    },
    toggleData() {
      this.chartData = this.chartData === this.chartData2 ? this.chartData1 : this.chartData2
    }
  }
}


</script>

<style scoped lang="scss">

</style>
