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
  background-color: var(--white);
  color: var(--black);
  font-size: 16px;
  font-size: 100%;
  font-size: 1rem;
  font-family: 'Oxygen', sans-serif;
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
