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
  <div
    class="flex flex-col gap-3 justify-center items-center my-1 tabletsm:my-0 laptopsm:items-start laptopsm:text-start laptopsm:gap-8"
  >
    <img :src="image" :alt="`${heading} image`" class="w-1/4" />
    <h3 class="text-lg text-colorDarkBlue mobilemd:text-2xl">{{ heading }}</h3>
    <p class="text-sm text-colorGrayBlue mobilemd:text-lg tabletsm:text-base">
      {{ text }}
    </p>
  </div>
</template>
