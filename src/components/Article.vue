<script>
import SingleArticle from './SingleArticle.vue';
import { articleData } from '../data';
export default {
  components: {
    SingleArticle,
  },
  data() {
    return {
      data: articleData,
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col w-full justify-center items-center px-5 py-10 tabletsm:py-24"
  >
    <div
      class="flex flex-col gap-6 justify-center items-center max-w-[1175px] tabletsm:gap-10 laptopsm:gap-12"
    >
      <h2
        class="text-2xl font-bold text-colorDarkBlue mobilemd:text-3xl laptopsm:self-start laptopsm:text-4xl laptopsm:font-medium"
      >
        Latest Articles
      </h2>
      <div
        class="flex flex-col gap-2 mobilemd:gap-5 tabletsm:grid tabletsm:grid-row-2 tabletsm:grid-cols-2 laptopsm:grid-row-1 laptopsm:grid-cols-4 laptopsm:gap-6"
      >
        <SingleArticle
          v-for="(items, index) in data"
          :key="index"
          :author="items.author"
          :heading="items.heading"
          :text="items.text"
          :image="items.image"
        />
      </div>
    </div>
  </div>
</template>
