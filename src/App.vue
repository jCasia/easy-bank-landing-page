<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Info from './components/Info.vue';
import Article from './components/Article.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Hero,
    Info,
    Article,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main class="mt-[70px]">
    <Hero />
    <Info />
    <Article />
  </main>
  <Footer />
</template>
