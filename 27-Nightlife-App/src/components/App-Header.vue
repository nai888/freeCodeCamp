<template>
  <header class="header">
    <h1 class="title">{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: 'freeCodeCamp Nightlife Coordination App'
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 2rem;
}

.title {
  text-align: center;
}
</style>
