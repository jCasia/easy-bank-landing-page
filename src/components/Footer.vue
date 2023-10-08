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
    class="bg-colorDarkBlue text-colorWhite flex justify-center items-center py-8 px-12 mobilemd:gap-7 laptopsm:py-10"
  >
    <div
      class="w-full max-w-[1175px] flex flex-col gap-5 justify-center items-center mobilemd:gap-7 laptopsm:flex-row laptopsm:gap-32 laptopsm:text-left"
    >
      <div
        class="flex flex-col justify-center items-center gap-5 mobilemd:gap-7 laptopsm:gap-12"
      >
        <img
          :src="logoImg"
          alt="logo"
          class="w-1/8 mobilemd:w-full laptopsm:w-full"
        />
        <ul class="flex gap-5 laptopsm:gap-3">
          <li v-for="(links, index) in socialLinks" :key="index">
            <a href="#">
              <img
                :src="links"
                :alt="links"
                class="mobilemd:w-6 laptopsm:w-5"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-5 mobilemd:gap-7"
      >
        <ul
          class="flex flex-col gap-2 text-center text-sm mobilemd:text-xl mobilemd:gap-5 laptopsm:grid laptopsm:grid-cols-2 laptopsm:grid-row-3 laptopsm:text-sm laptopsm:gap-3.5 laptopsm:gap-x-24 laptopsm:text-left"
        >
          <li v-for="(link, index) in links" :key="index">
            <a
              href="#"
              class="hover:text-colorLimeGreen transition-all duration-300"
              >{{ link }}</a
            >
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-5 mobilemd:gap-7 laptopsm:items-end laptopsm:flex-1"
      >
        <base-button
          label="Request Invite"
          class="mobilemd:text-2xl tabletsm:text-lg laptopsm:text-sm"
        />
        <p
          class="text-sm text-colorGrayBlue mobilemd:text-base laptopsm:text-sm"
        >
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
