<template>
  <button class="panel-button" type="submit" value="going" @click.prevent="onGoing">
    {{ going }} going
  </button>
</template>

<script>
export default {
  name: 'ButtonArea',
  props: {
    barId: String,
    going: Number
  },
  data () {
    return {}
  },
  methods: {
    onGoing: function () {
      this.$emit('on-going', this.barId)
    }
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
