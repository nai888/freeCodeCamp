<template>
  <div class="results-area">
    <ResultPanel v-for="(bar, index) in bars" :key="index"  :bar="bar" @on-going="onGoing" />
  </div>
</template>

<script>
import ResultPanel from './Result-Panel'

export default {
  name: 'ResultsArea',
  components: {
    ResultPanel
  },
  props: {
    bars: Array
  },
  data () {
    return {
      msg: 'Results Area'
    }
  },
  methods: {
    onGoing: function (barId) {
      this.$emit('on-going', barId)
    }
  }
}
</script>

<style scoped>
.results-area {
  margin-top: 1rem;
}
</style>
