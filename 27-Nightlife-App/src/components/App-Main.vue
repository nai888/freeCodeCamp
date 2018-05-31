<template>
  <main class="main">
    <h2 class="title">What plans do you have tonight?</h2>
    <p class="subtitle">Today is {{ formattedDate }}.</p>
    <SearchArea @on-submit="submit" />
    <ResultsArea :bars="bars" />
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
      location: '',
      bars: [
        {
          'rating': 4,
          'price': '$',
          'phone': '+14152520800',
          'id': 'E8RJkjfdcwgtyoPMjQ_Olg',
          'alias': 'four-barrel-coffee-san-francisco',
          'is_closed': false,
          'categories': [
            {
              'alias': 'coffee',
              'title': 'Coffee & Tea'
            }
          ],
          'review_count': 1738,
          'name': 'Four Barrel Coffee',
          'url': 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
          'coordinates': {
            'latitude': 37.7670169511878,
            'longitude': -122.42184275
          },
          'image_url': 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
          'location': {
            'city': 'San Francisco',
            'country': 'US',
            'address2': '',
            'address3': '',
            'state': 'CA',
            'address1': '375 Valencia St',
            'zip_code': '94103'
          },
          'distance': 1604.23,
          'transactions': ['pickup', 'delivery']
        },
        {
          'rating': 4,
          'price': '$',
          'phone': '+14152520800',
          'id': 'E8RJkjfdcwgtyoPMjQ_Olg',
          'alias': 'four-barrel-coffee-san-francisco',
          'is_closed': false,
          'categories': [
            {
              'alias': 'coffee',
              'title': 'Coffee & Tea'
            }
          ],
          'review_count': 1738,
          'name': 'Three Cup Coffee',
          'url': 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
          'coordinates': {
            'latitude': 37.7670169511878,
            'longitude': -122.42184275
          },
          'image_url': 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
          'location': {
            'city': 'San Francisco',
            'country': 'US',
            'address2': '',
            'address3': '',
            'state': 'CA',
            'address1': '375 Valencia St',
            'zip_code': '94103'
          },
          'distance': 1604.23,
          'transactions': ['pickup', 'delivery']
        }
      ]
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
