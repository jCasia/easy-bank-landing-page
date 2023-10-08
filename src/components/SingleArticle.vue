<script>
export default {
  props: {
    author: String,
    heading: String,
    text: String,
    image: String,
  },
};
</script>
<template>
  <div class="flex flex-col">
    <img
      :src="image"
      :alt="`${heading} image`"
      class="w-full h-full rounded-t-lg"
    />
    <div class="flex flex-col gap-1 p-6">
      <p class="text-xs text-colorGrayBlue mobilemd:text-xl laptopsm:text-xs">
        By {{ author }}
      </p>
      <h3
        class="font-bold text-colorDarkBlue mobilemd:text-2xl laptopsm:text-base laptopsm:leading-5 laptopsm:font-normal"
      >
        <a
          href="#"
          class="hover:text-colorLimeGreen transition-all duration-300"
        >
          {{ heading }}</a
        >
      </h3>
      <p class="text-sm text-colorGrayBlue mobilemd:text-xl laptopsm:text-sm">
        {{ text }}
      </p>
    </div>
  </div>
</template>
