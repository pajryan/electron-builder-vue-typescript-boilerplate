<template>
  <div class="chartHolder">
    <svg :width="width" :height="height">
      <g :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
        <path class="line" :d="paths.line" />
      </g>
    </svg>
  </div>
</template>



<script>

/*
  This version of the chart combines vue's data binding with d3
  https://medium.com/tyrone-tudehope/composing-d3-visualizations-with-vue-js-c65084ccb686
*/

import { mapState } from 'vuex' // import state
import * as d3 from 'd3'

// properties passed in
const props = {
  data: {
    type: Array,
    default: () => [],
  },
  margin: {
    type: Object,
    default: () => ({
      left: 0, right: 0, top: 0, bottom: 0,
    }),
  }
}

export default{
  name: 'sample-chart',
  props,
  computed: {
    ...mapState(['isAdmin', 'applicationVersion'])
  },
  data() {
    return {
      width: 0,
      height: 0,
      paths: {
        line: ''
      },
      scaled: {
        x: null,
        y: null,
      },
      points: [],
    }
  },
  computed: {
    padded() {
      const width = this.width - this.margin.left - this.margin.right
      const height = this.height - this.margin.top - this.margin.bottom
      return { width, height }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    data: function dataChanged(newData, oldData) {
      this.initialize()
      this.update()
    },
    width: function widthChanged() {
      this.initialize()
      this.update()
    },
  },
  methods: {
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    createLine: d3.line().x(d => d.x).y(d => d.y),
    initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.padded.width])
      this.scaled.y = d3.scaleLinear().range([this.padded.height, 0])
      d3.axisLeft().scale(this.scaled.x)
      d3.axisBottom().scale(this.scaled.y)
    },
    update() {
      this.scaled.x.domain(d3.extent(this.data, (d, i) => d.x))
      this.scaled.y.domain(d3.extent(this.data, (d, i) => d.y))
      this.points = []
      this.data.forEach(d => {
        this.points.push({
          x: this.scaled.x(d.x),
          y: this.scaled.y(d.y)
        })
      })
      this.paths.line = this.createLine(this.points)
    }
  }
}


</script>

<style scoped lang="scss">
.chartHolder{
  min-height: 270px;
}
.chartHolder path{
  fill: none;
  stroke: blue;
}
</style>
