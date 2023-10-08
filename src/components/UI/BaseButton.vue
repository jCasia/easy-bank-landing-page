<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <button
    type="button"
    class="py-2 px-6 bg-gradient-to-r from-colorLimeGreen to-colorBrightCyan text-colorWhite rounded-full text-sm transition-all duration-300 hover:opacity-60"
  >
    {{ label }}
  </button>
</template>
