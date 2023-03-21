<template>
  <div class="window">
    <div class="catalog">
      <h1>Welcome to the Catalog</h1>
    </div>

    <div class="display">
      <songcard image="" title="hellow" release="" />
    </div>
  </div>
</template>

<script>
import songcard from "../components/songcard.vue";

export default {
  name: "home",
  components: {
    songcard,
  },
  data() {},
};
</script>

<style>
h1 {
  padding: 0.9rem;
}

.window {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: column;
  padding: 0.9rem;
}

.display {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #197d9e22;
  border-radius: 30px;
  padding: 3rem;
}

@media (min-width: 550px) {
  .catalog {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 800px) {
  .catalog {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 1024px) {
  .catalog {
    min-height: 30vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}
</style>
