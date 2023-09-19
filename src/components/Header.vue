<script>
import logo from '../images/logo.svg';
import Nav from './Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      logoImg: logo,
    };
  },
};
</script>
<template>
  <header
    class="p-6 flex justify-between shadow-lg h-[70px] fixed top-0 right-0 w-full z-10 bg-colorWhite"
  >
    <img :src="logoImg" alt="logo" />
    <Nav />
  </header>
</template>
