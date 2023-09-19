<script>
import { footerLinks } from '../data';
import { socials } from '../data';
import logo from '../images/logoFooter.svg';
export default {
  data() {
    return {
      links: footerLinks,
      logoImg: logo,
      socialLinks: socials,
    };
  },
};
</script>
<template>
  <footer
    class="bg-colorDarkBlue text-colorWhite flex flex-col gap-5 justify-center items-center py-8 px-12"
  >
    <img :src="logoImg" alt="logo" class="w-1/8" />
    <ul class="flex gap-5">
      <li v-for="(links, index) in socialLinks" :key="index">
        <a href="#">
          <img :src="links" :alt="links" />
        </a>
      </li>
    </ul>
    <ul class="flex flex-col gap-2 text-center text-sm">
      <li v-for="(link, index) in links" :key="index">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
    <base-button label="Request Invite" />
    <p class="text-sm text-colorGrayBlue">
      &copy; Easybank. All Rights Reserved
    </p>
  </footer>
</template>
