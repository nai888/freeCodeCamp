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
  --dark-green: #243010;
  --med-green: #87A330;
  --lgt-green: #A1C349;
  --pale-green: #CAD593;
  --dark-purple: #4A314D;
  --white: #FCFCFC;
  --black: #0A0A0A;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--white);
  color: var(--black);
  font-size: 16px;
  font-size: 100%;
  font-size: 1rem;
}

header, main, footer {
  width: 900px;
  max-width: 98%;
  padding: 0;
  margin: 0 auto;
}

h1 {
  font-size: 2.4rem;
}

h2 {
  font-size: 2.0rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1.3rem;
}

h5, p {
  font-size: 1rem;
}

h6 {
  font-size: 0.85rem;
}

a, a:link, a:visited {
  color: var(--med-green)
}

a:hover, a:active {
  color: var(--lgt-green)
}
</style>
