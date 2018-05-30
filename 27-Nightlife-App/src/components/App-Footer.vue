<template>
  <footer id="footer">
    <p class="copyright">
      Built by <a :href="authorLink" target="_blank" ref="noopener noreferrer">{{ author }}</a>, copyright &copy; {{ copyrightRange }} under the <a :href="licenseLink" target="_blank" ref="noopener noreferrer">{{ license }} license</a>. <a :href="githubLink" target="_blank" ref="noopener noreferrer">View this project on GitHub</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      author: 'Ian A. Cook',
      authorLink: 'https://www.freecodecamp.com/nai888',
      builtYear: 2018,
      license: 'AGPL-3.0',
      licenseLink: 'https://choosealicense.com/licenses/agpl-3.0/',
      githubLink: 'https://github.com/nai888/freeCodeCamp/tree/master/27-Nightlife-App'
    }
  },
  computed: {
    copyrightRange: function () {
      const y = new Date().getFullYear()
      return this.builtYear >= y ? this.builtYear : `${this.builtYear}–${y}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
