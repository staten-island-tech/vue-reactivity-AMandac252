<template>
  <div class="cart">
    <h1>This is your cart</h1>

    <div class="display"></div>
  </div>
</template>

<style>
.cart {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: column;
  padding: 0.5rem;
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
  .cart {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 800px) {
  .cart {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}

@media (min-width: 1024px) {
  .cart {
    min-height: 5vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}
</style>
