<template>
  <div>
    
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    remove(song) {
      this.$emit("remove", song);
    },
  },
};
</script>

<style></style>
