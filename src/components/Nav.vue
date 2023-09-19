<script>
import HamburgerMenu from '../images/icon-hamburger.svg';
import { links } from '../data';
export default {
  data() {
    return {
      menuLogo: HamburgerMenu,
      links: links,
    };
  },
};
</script>

<template>
  <nav>
    <button type="button" aria-label="menu" class="mobilelg:hidden">
      <img :src="menuLogo" alt="menu" />
    </button>
    <!-- desktop -->
    <ul class="hidden mobilelg:flex mobilelg:gap-4">
      <li v-for="(link, index) in links" :key="index">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>
