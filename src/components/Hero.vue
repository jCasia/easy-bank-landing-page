<template>
  <div class="relative pb-12">
    <img :src="mobileBackground" alt="mobilebg" class="w-full" />
    <img :src="mobiles" alt="mobile" class="absolute -top-28" />
    <div
      class="flex flex-col justify-center items-center px-7 text-center gap-5"
    >
      <h1 class="text-3xl text-colorDarkBlue">
        Next generation digital banking
      </h1>
      <p class="text-sm text-colorGrayBlue">
        Take you financial life online. Your Easybank account will be
        one-stop-shop for spending, saving, budgeting, inesting and much more.
      </p>
      <base-button label="Request Invite" />
    </div>
  </div>
</template>
<script>
import heroBackgroundMobile from '../images/bg-intro-mobile.svg';
import mobilesImg from '../images/image-mockups.png';
export default {
  data() {
    return {
      mobileBackground: heroBackgroundMobile,
      mobiles: mobilesImg,
    };
  },
};
</script>
