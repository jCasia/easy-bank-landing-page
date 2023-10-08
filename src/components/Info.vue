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
    class="bg-colorLightGrayBlue px-5 py-12 flex justify-center items-center mobilemd:px-10 tabletsm:py-24"
  >
    <div
      class="flex flex-col gap-8 items-center text-center max-w-[1175px] laptopsm:gap-16"
    >
      <div
        class="flex flex-col gap-3 laptopsm:text-left laptopsm:w-7/12 laptopsm:self-start laptopsm:gap-5"
      >
        <h2
          class="text-2xl font-bold text-colorDarkBlue px-7 mobilemd:text-3xl laptopsm:px-0 laptopsm:font-normal laptopsm:text-4xl"
        >
          Why choose Easybank?
        </h2>
        <p class="text-sm text-colorGrayBlue mobilemd:text-xl tabletsm:text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div
        class="flex flex-col gap-2 tabletsm:grid tabletsm:grid-cols-2 tabletsm:grid-rows-2 tabletsm:gap-4 laptopsm:grid-cols-4 laptopsm:grid-rows-1 laptop:gap-12"
      >
        <Services
          v-for="(items, index) in data"
          :key="index"
          :image="items.image"
          :heading="items.heading"
          :text="items.text"
        />
      </div>
    </div>
  </div>
</template>
