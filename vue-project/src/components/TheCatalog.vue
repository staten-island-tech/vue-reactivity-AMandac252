<script setup></script>

<template>
  <div class="catalog">
    <h1>This is the main catalog.</h1>
  </div>
</template>

<style>
h1 {
  padding: 0.9rem;
}

@media (min-width: 550px) {
  .cart {
    min-height: 80vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 800px) {
  .cart {
    min-height: 80vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 1024px) {
  .catalog {
    min-height: 100vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}
</style>
