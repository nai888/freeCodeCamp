<template>
  <button class="panel-button">
    0 going
  </button>
</template>

<script>
export default {
  name: 'ButtonArea',
  props: {
    id: String,
    going: Number
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.count {
  text-align: center;
}

.panel-button {
  height: 2.5rem;
  padding: 0 0.5rem;
  font-weight: bold;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--med-green);
  border-radius: 0.5rem;
}

.panel-button.active {
  color: var(--white);
  background-color: var(--med-green);
  border-color: var(--dark-green);
}
</style>
