<template>
  <div class="results-area">
    <ResultPanel v-for="(bar, index) in bars" :key="index"  :bar="bar" />
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
  }
}
</script>

<style scoped>
.results-area {
  margin-top: 1rem;
}
</style>
