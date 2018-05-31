<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/App-Header'
import Main from './components/App-Main'
import Footer from './components/App-Footer'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
:root {
  --dark-green: #283F30;
  --med-green: #547243;
  --lgt-green: #659B5E;
  --pale-green: #95BF74;
  --purple: #705596;
  --white: #FAFCFA;
  --black: #0A0C0A;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--black);
  font-size: 16px;
  font-size: 100%;
  font-size: 1rem;
  font-family: 'Oxygen', sans-serif;
  background-color: var(--white);
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23283F30' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
}

header, main, footer {
  width: 900px;
  max-width: 98%;
  padding: 0;
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6, p {
  line-height: 1.3;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--dark-green);
  margin-bottom: 1.6rem;
}

h1 {
  font-size: 2.4rem;
  margin-top: 0;
}

h2 {
  font-size: 2.0rem;
  margin-top: 0;
}

h3 {
  font-size: 1.6rem;
  margin-top: 2.4rem;
}

h4 {
  font-size: 1.3rem;
  margin-top: 2.0rem;
}

h5, p {
  font-size: 1rem;
}

h5 {
  margin-top: 1.6rem;
}

h6 {
  font-size: 0.85rem;
  margin-top: 1.6rem;
}

p {
  margin-top: 0;
}

a, a:link, a:visited {
  color: var(--med-green)
}

a:hover {
  color: var(--lgt-green)
}

a:active {
  color: var(--pale-green)
}
</style>
