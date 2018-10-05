<template>
  <div class="root">
    <h1>Sample Chart</h1>
    <SampleChart class="chart" :data="chartData" />
  </div>
</template>


<script>
/* tslint:disable */

import { mapState } from 'vuex' // import state
let SampleChart = require('@/components/charting/SampleChart.vue').default
export default{
  components: {SampleChart},
  data(){
    return {
      chartData: [
        {x:0, y: 0},
        {x:1, y: 10},
        {x:2, y: 20},
        {x:3, y: 5},
        {x:4, y: 15},
        {x:5, y: 10}
      ]
    }
  },

  computed: {
    ...mapState(['isAdmin', 'applicationVersion'])
  },

  mounted() {
  },
  methods: {
  }
}


</script>

<style scoped lang="scss">
  // .root{
  //   height: 100%;
  // }
  // .chart{
  //   height: 100%;
  // }
</style>
