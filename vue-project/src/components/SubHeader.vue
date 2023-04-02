<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>NIJISANJI Affiliated Unit</h3>
    <h4>Unitized on July 17th, 2018</h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: var(--color-text);
}

.greetings h1,
.greetings h3,
h4 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3,
  h4 {
    text-align: left;
  }
}
</style>
