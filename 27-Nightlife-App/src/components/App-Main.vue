<template>
  <main class="main">
    <h2 class="title">What plans do you have tonight?</h2>
    <p class="subtitle">Today is {{ formattedDate }}.</p>
    <SearchArea @on-submit="submit" />
    <ResultsArea />
  </main>
</template>

<script>
import SearchArea from './Search-Area'
import ResultsArea from './Results-Area'

export default {
  name: 'AppMain',
  components: {
    SearchArea,
    ResultsArea
  },
  data () {
    return {
      date: new Date(),
      location: ''
    }
  },
  computed: {
    formattedDate: function () {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${days[this.date.getDay()]}, ${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`
    }
  },
  methods: {
    submit: function (location) {
      this.location = location
      console.log(this.location)
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 400px;
}

.title, .subtitle {
  text-align: center;
}

.subtitle {
  font-style: italic;
}
</style>
