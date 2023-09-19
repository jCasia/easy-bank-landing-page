<script>
export default {
  props: {
    image: String,
    text: String,
    heading: String,
  },
};
</script>
<template>
  <div class="flex flex-col gap-3 justify-center items-center my-1">
    <img :src="image" :alt="`${heading} image`" class="w-1/4" />
    <h3 class="text-lg text-colorDarkBlue">{{ heading }}</h3>
    <p class="text-sm text-colorGrayBlue">
      {{ text }}
    </p>
  </div>
</template>
