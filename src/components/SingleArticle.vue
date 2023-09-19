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
    <img :src="image" :alt="`${heading} image`" class="w-full" />
    <div class="flex flex-col gap-1 p-6">
      <p class="text-xs text-colorGrayBlue">By {{ author }}</p>
      <h3 class="font-bold text-colorDarkBlue">
        {{ heading }}
      </h3>
      <p class="text-sm text-colorGrayBlue">
        {{ text }}
      </p>
    </div>
  </div>
</template>
