<template>
  <div>
  </div>
</template>

<script>
  /*
    This version of the chart just uses vanilla d3js.
    When the window resizes, the chart is removed and rebuilt from scratch
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

  export default {
    name: 'sample-chart-just-d3',
    props,
    computed: {
      ...mapState(['isAdmin', 'applicationVersion'])
    },
    data() {
      return {
        x: null,
        y: null,
        createPath: null,
        path: null
      }
    },
    mounted() {
      window.addEventListener('resize', this.windowResize)
      this.$nextTick(() => {
          this.buildChart()
        }
      )
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.windowResize)
    },
    watch: {
      data: function dataChanged(newData, oldData) {
        // don't update the whole chart, just the path
        if (this.path) {
          this.path
            .transition()
              .duration(1000)
                .attr('d', this.createPath(this.data))
        }
      }
    },
    methods: {
      buildChart() {
        const svg = d3.select(this.$el)
          .append('svg')
          .attr('width', this.$el.offsetWidth)
          .attr('height', 270)
          .append('g')
          .attr('transform', 'translate(0, 0)')
        this.x = d3.scaleLinear().range([0, this.$el.offsetWidth])
        this.y = d3.scaleLinear().range([270, 0])
        d3.axisLeft().scale(this.x)
        d3.axisTop().scale(this.y)
        this.x.domain(d3.extent(this.data, d => d.x))
        this.y.domain([0, d3.max(this.data, d => d.y)])
        this.createPath = d3.line()
                              .x(d => this.x(d.x))
                              .y(d => this.y(d.y))
        this.path = svg.append('path').attr('d', this.createPath(this.data))
      },

      cleanChart() {
        d3.select(this.$el).selectAll('*').remove()
      },

      windowResize(e) {
        this.cleanChart()
        this.buildChart()
      }
    }
  }
</script>

<style scoped lang="scss">
  // for "/deep/", see https://vue-loader.vuejs.org/guide/scoped-css.html
  //  short answer: it allows the css to be scoped (to this component), but still work for dynamically created elements
  /deep/ svg path{
    fill: none;
    stroke: #76BF8A;
  }
</style>