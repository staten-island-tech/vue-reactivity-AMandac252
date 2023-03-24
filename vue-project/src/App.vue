<script setup>
import { RouterView } from "vue-router";
import SubHeader from "./components/SubHeader.vue";
</script>

<template>
  <header>
    <img
      alt="ChroNoir Logo"
      class="logo"
      src="@/assets/images/Logo.jpg"
      width="400"
      height="300"
    />

    <div class="wrapper">
      <SubHeader class="subheader" msg="ChroNoir Album Catalog" />

      <nav>
        <RouterLink to="/">Catalog</RouterLink>
        <RouterLink to="/CartView">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.subheader {
  color: var(--dark-blue);
}
.logo {
  display: block;
  margin: 2rem auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin: 5rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
