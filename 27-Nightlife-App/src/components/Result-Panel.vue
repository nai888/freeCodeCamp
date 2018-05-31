<template>
  <div class="result-panel">
    <img :src="bar.image_url" class="bar-image">
    <div class="result-info">
      <a :href="bar.url" target="_blank" ref="noopener noreferrer" class="bar-link">
        <h3 class="bar-name">{{ bar.name }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultPanel',
  props: {
    bar: Object
  },
  data () {
    return {
      msg: 'Result Panel'
    }
  }
}
</script>

<style scoped>
.result-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
}

.bar-image {
  width: 100px;
  height: 100px;
}

.result-info {
  flex-grow: 1;
}

.bar-link {
  text-decoration: none;
}
</style>
