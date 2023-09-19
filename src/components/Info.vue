<script>
import Services from './Services.vue';
import { servicesData } from '../data';

export default {
  components: {
    Services,
  },
  data() {
    return {
      data: servicesData,
    };
  },
};
</script>
<template>
  <div
    class="bg-colorLightGrayBlue flex flex-col gap-8 justify-center items-center text-center px-5 py-12"
  >
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl text-colorDarkBlue px-7">Why choose Easybank?</h2>
      <p class="text-sm text-colorGrayBlue">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <Services
      v-for="(items, index) in data"
      :key="index"
      :image="items.image"
      :heading="items.heading"
      :text="items.text"
    />
  </div>
</template>
