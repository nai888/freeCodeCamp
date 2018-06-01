<template>
  <div class="result-panel">
    <div class="image">
      <img :src="image" class="bar-image">
    </div>
    <div class="result-info">
      <a :href="bar.url" target="_blank" ref="noopener noreferrer" class="bar-link">
        <h3 class="bar-name">{{ bar.name }}</h3>
      </a>
      <p class="meta">
        <img class="rating" :src="require(`../assets/regular_${stars}.png`)">
        <span class="separator"> :: </span>
        <span class="price">{{ bar.price }}</span>
      </p>
      <address class="address">
        <template v-for="(line, index) in bar.location.display_address">
          <span class="address-line" v-if="line.length > 0" :key="index">{{ line }}</span>
        </template>
      </address>
    </div>
    <ButtonArea />
  </div>
</template>

<script>
import ButtonArea from './Button-Area'

export default {
  name: 'ResultPanel',
  components: {
    ButtonArea
  },
  props: {
    bar: Object
  },
  data () {
    return {}
  },
  computed: {
    stars: function () {
      let stars

      switch (this.bar.rating) {
        case 5:
          stars = '5'
          break
        case 4.5:
          stars = '4_half'
          break
        case 4:
          stars = '4'
          break
        case 3.5:
          stars = '3_half'
          break
        case 3:
          stars = '3'
          break
        case 2.5:
          stars = '2_half'
          break
        case 2:
          stars = '2'
          break
        case 1.5:
          stars = '1_half'
          break
        case 1:
          stars = '1'
          break
        default:
          stars = '0'
      }

      return stars
    },
    image: function () {
      let url = this.bar.image_url
      const i = url.lastIndexOf('.') - 1
      if (i > 0) {
        url = `${url.slice(0, i)}ms${url.slice(i + 1)}`
      }
      return url
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
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: var(--white);
  border: 1px solid var(--purple);
  border-radius: 0.5rem;
}

.result-panel:hover {
  border: 1px solid var(--pale-green);
}

.image {
  width: 100px;
  height: 100px;
}

.bar-image {
  max-width: 100%;
  max-height: 100%;
}

.result-info {
  flex-grow: 1;
  margin: 0 1rem;
}

.bar-link {
  text-decoration: none;
}

.bar-name {
  margin: 0;
  font-size: 1rem;
}

.meta {
  margin: 0;
}

.rating {
  max-height: 18px;
}

.price {
  color: var(--pale-green);
}

.address {
  font-style: normal;
}

.address-line {
  display: block;
}
</style>
