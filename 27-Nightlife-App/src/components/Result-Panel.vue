<template>
  <div class="result-panel">
    <img :src="bar.image_url" class="bar-image">
    <div class="result-info">
      <a :href="bar.url" target="_blank" ref="noopener noreferrer" class="bar-link">
        <h3 class="bar-name">{{ bar.name }}</h3>
      </a>
      <p class="meta">
        <span class="rating">
          <template v-for="(star, index) in stars">
            <i :key="index" :class="star === 1 ? 'star full' : star === 0.5 ? 'star half' : 'star'"></i>
          </template>
        </span>
        <span class="separator"> :: </span>
        <span class="price">{{ bar.price }}</span>
      </p>
      <address>
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
      let stars = []

      let rating = this.bar.rating

      for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
          stars.push(1)
          rating -= 1
        } else if (rating > 0) {
          stars.push(0.5)
          rating -= 0.5
        } else {
          stars.push(0)
        }
      }

      return stars
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

.bar-image {
  width: 100px;
  height: 100px;
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
  color: var(--purple);
}

.star {
  font-style: normal;
  display: inline-block;
  position: relative;
}

.star:before {
  content: '\2605';
}

.star.full {
  color: var(--pale-green);
}

.star.half:after {
  content: '\2605';
  color: var(--pale-green);
  position: absolute;
  left: 0;
  right: 50%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.price {
  color: var(--pale-green);
}

.address-line {
  display: block;
}
</style>
