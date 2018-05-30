<template>
  <main id="main">
    <h1>{{ msg }}</h1>
    <div>
      <p>Try this?</p>
      <a href="https://google.com">What's this? All puffy!</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
