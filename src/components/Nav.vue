<script>
import HamburgerMenu from '../images/icon-hamburger.svg';
import MobileMenu from './MobileMenu.vue';
import close from '../images/icon-close.svg';
import { links } from '../data';
export default {
  components: {
    MobileMenu: MobileMenu,
  },
  data() {
    return {
      menuLogo: HamburgerMenu,
      linksList: links,
      closeLogo: close,
      isMenuOpen: false,
    };
  },
  methods: {
    setIsMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <nav>
    <button
      type="button"
      aria-label="menu"
      class="tabletsm:hidden"
      @click="setIsMenuOpen"
    >
      <img v-if="!isMenuOpen" :src="menuLogo" alt="menu" />
      <img v-else="isMenuOpen" :src="closeLogo" alt="close" />
    </button>
    <MobileMenu
      :links="linksList"
      :isOpen="isMenuOpen"
      :setIsMenuOpen="setIsMenuOpen"
    />
    <!-- desktop -->
    <ul class="hidden tabletsm:flex tabletsm:gap-4">
      <li v-for="(link, index) in linksList" :key="index">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>
