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
  <div class="flex flex-col gap-4 justify-center items-center px-5 py-12">
    <h2 class="text-2xl text-colorDarkBlue">Latest Article</h2>
    <SingleArticle
      v-for="(items, index) in data"
      :key="index"
      :author="items.author"
      :heading="items.heading"
      :text="items.text"
      :image="items.image"
    />
  </div>
</template>
