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
    class="flex justify-center items-center shadow-lg h-[70px] fixed top-0 right-0 w-full z-10 bg-colorWhite"
  >
    <div
      class="p-6 flex justify-between items-center w-full max-w-[1175px] tabletlg:px-12 laptop:px-0"
    >
      <img
        :src="logoImg"
        alt="logo"
        class="mobilemd:w-1/3 tabletsm:w-1/4 laptopsm:w-2/12"
      />
      <Nav />
      <base-button
        label="Request Invite"
        class="hidden tabletsm:inline-block py-1.5 text-xs laptopsm:py-3"
      ></base-button>
    </div>
  </header>
</template>
