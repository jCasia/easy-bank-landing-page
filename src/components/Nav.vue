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
    <ul
      class="hidden tabletsm:flex tabletsm:gap-4 text-sm text-colorGrayBlue laptopsm:gap-8"
    >
      <li v-for="(link, index) in linksList" :key="index" class="relative">
        <a
          href="#"
          class="hover:text-colorDarkBlue after:content-[&quot;&quot;] after:bg-colorLimeGreen after:w-0 after:h-1 after:absolute after:-bottom-[25px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >{{ link }}</a
        >
      </li>
    </ul>
  </nav>
</template>
