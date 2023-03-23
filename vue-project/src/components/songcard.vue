<template>
  <div data-aos="fade-down" class="display-card">
    <img class="display-img" v-bind:src="image" />
    <h3 class="display-title">{{ title }}</h3>
    <h4 class="display-release">{{ release }}</h4>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    release: Array,
    image: String,
  },
};
</script>

<style>
.display-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  font-style: italic;
  margin: 2rem;
  width: 29%;
  justify-content: space-around;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: #abd3d8;
  transition: all 0.2s;
}
.display-img {
  padding: 5%;
  width: 70%;
  justify-content: space-around;
  border-radius: 30px;
}
.display-title {
  margin-top: 1rem;
  font-size: var(--h4);
  margin-bottom: 1rem;
}

.display-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 1rem 1rem #589db3;
}
</style>
