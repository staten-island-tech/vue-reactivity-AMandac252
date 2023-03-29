<template>
  <div data-aos="fade-down" class="display-card">
    <img class="display-img" v-bind:src="image" />
    <h3 class="display-title">{{ title }}</h3>
    <h4 class="display-release">{{ release }}</h4>
    <button class="btn" @click="add">Add to cart</button>
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
  name: "btn",

  methods: {
    add: function () {
      console.log("hellow");
    },
  },
};
</script>

<style scoped>
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

.btn {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 1rem 2rem;
  display: inline-block;
  margin: 2rem;
  font-size: 2rem;
  border: none;
  background-color: #589db3;
  color: #ffffff;
  border-radius: 3rem;
  transition: all 0.2s;
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.btn:hover {
  transform: translateY(-0.3rem);
}
</style>
