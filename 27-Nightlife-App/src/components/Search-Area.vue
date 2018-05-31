<template>
  <form class="search-area" id="search">
    <label class="search-label" for="location">Where are you?</label>
    <div class="row">
      <input type="text" id="location" name="location" placeholder="e.g., “Chicago, IL”" v-model="location" class="search-bar" />
      <button type="submit" form="search" value="Search" @click.prevent="onSubmit" class="submit-button">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchArea',
  data () {
    return {
      location: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$emit('on-submit', this.location)
    }
  }
}
</script>

<style scoped>
.search-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
}

.search-bar {
  flex-grow: 1;
  height: 2.5rem;
  padding: 0 0.5rem;
  margin-right: 0.25rem;
  background-color: var(--white);
  border: 1px solid var(--dark-green);
  border-radius: 0.5rem;
}

.submit-button {
  height: 2.5rem;
  padding: 0 0.5rem;
  margin-left: 0.25rem;
  font-weight: bold;
  color: var(--white);
  background-color: var(--med-green);
  border: 1px solid var(--dark-green);
  border-radius: 0.5rem;
}

.submit-button:active {
  background-color: var(--purple)
}
</style>
