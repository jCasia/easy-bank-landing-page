<template>
  <div
    class="pb-12 mt-[70px] flex justify-center items-center tabletsm:py-12 tabletsm:px-10 tabletsm:bg-[url('./images/bg-intro-desktop.svg')] tabletsm:bg-no-repeat tabletsm:bg-cover tabletsm:bg-[425px_-125px] laptopsm:bg-[500px_-300px] laptop:bg-[725px_-400px]"
  >
    <div class="tabletsm:flex tabletsm:flex-row max-w-[1175px]">
      <div class="relative order-2">
        <img
          :src="mobileBackground"
          alt="mobilebg"
          class="w-full tabletsm:hidden mobilelg:justify-self-end"
        />
        <img
          :src="desktopBackground"
          alt="desktop background"
          class="hidden w-full tabletsm:w-full tabletsm:inline-block tabletsm:invisible tabletsm:opacity-0"
        />
        <img
          :src="mobiles"
          alt="mobile"
          class="absolute -top-28 tabletsm:w-full tabletsm:-right-16 tabletsm:-top-16 w-full laptopsm:-top-28 laptopsm:-right-1/3"
        />
      </div>
      <div
        class="flex flex-col justify-center items-center px-7 text-center gap-5 mobilemd:px-10 mobilemd:gap-10 tabletsm:order-1 tabletsm:text-left tabletsm:items-start tabletsm:px-0"
      >
        <h1
          class="text-4xl text-colorDarkBlue mobilemd:text-5xl tabletsm:text-4xl laptopsm:text-5xl laptop:text-6xl"
        >
          Next generation digital banking
        </h1>
        <p class="text-sm text-colorGrayBlue mobilemd:text-xl tabletsm:text-lg">
          Take you financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <base-button
          label="Request Invite"
          class="mobilemd:text-2xl tabletsm:text-base"
        />
      </div>
    </div>
  </div>
</template>
<script>
import heroBackgroundMobile from '../images/bg-intro-mobile.svg';
import heroBackgroundDesktop from '../images/bg-intro-desktop.svg';
import mobilesImg from '../images/image-mockups.png';
export default {
  data() {
    return {
      mobileBackground: heroBackgroundMobile,
      desktopBackground: heroBackgroundDesktop,
      mobiles: mobilesImg,
    };
  },
};
</script>
