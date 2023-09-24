<script>
export default {
  props: ['links', 'isOpen', 'setIsMenuOpen'],
  computed: {
    backdrop() {
      return this.isOpen ? 'visible opacity-100' : 'invisible opacity-0';
    },
    animateMenu() {
      return this.isOpen
        ? 'visible opacity-100 translate-y-0'
        : 'invisible opacity-0 -translate-y-10';
    },
  },
};
</script>
<template>
  <div
    class="fixed top-[70px] left-0 w-full h-screen bg-colorDarkBlue/60 tabletsm:hidden transition-all duration-300"
    :class="backdrop"
    @click="setIsMenuOpen"
  ></div>
  <div
    class="bg-colorWhite absolute top-20 left-4 w-[90%] py-6 flex justify-center items-center rounded-lg shadow-lg tabletsm:hidden transition-all duration-500"
    :class="animateMenu"
  >
    <ul class="flex flex-col gap-4 text-center">
      <li v-for="link in links" @click="setIsMenuOpen">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>
