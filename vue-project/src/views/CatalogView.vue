<template>
  <div class="window">
    <div class="catalog">
      <h1>{{ cart.length }}</h1>
      <img
        alt="Shopping Cart"
        class="logo"
        src="@/assets/images/lightcart.png"
        width="80"
        height="80"
      />

      <button class="cart-btn">View Cart</button>
    </div>

    <div class="display">
      <div
        data-aos="fade-down"
        class="display-card"
        v-for="song in songs"
        :key="song.title"
      >
        <img class="display-img" v-bind:src="song.image" />
        <h3 class="display-title">{{ song.title }}</h3>
        <h4 class="display-release">{{ song.release }}</h4>
        <button class="btn" v-on:click="add(song)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cart: [],
      selected: "",
      songs: [
        {
          title: "終末じゃない　",

          release: ["Aug 23, 2018"],

          image: "src/assets/images/Songimages/終末じゃない　歌ってみた.jpg",
        },

        {
          title: "【MV】ヘテロスタシス ",

          release: ["Feb 11, 2020"],

          image: "src/assets/images/Songimages/Heterostatis.jpg",
        },

        {
          title: "【『Not For You』叶／葛葉】",

          release: ["Feb 11, 2020"],

          image: "src/assets/images/Songimages/Notforyou.png",
        },

        {
          title: "【オリジナルMV】Ice breaker",

          release: ["May 24, 2020"],

          image: "src/assets/images/Songimages/icebreaker.png",
        },

        {
          title: "【オリジナル】常夏★スカイスクレイパー",

          release: ["Sept 13, 2020"],

          image: "src/assets/images/Songimages/SKyScrapper.jpg",
        },

        {
          title: "【オリジナル】LET IT BURN【ChroNoiR feat.加賀美ハヤト】",

          release: ["Oct 30, 2020"],

          image: "src/assets/images/Songimages/LetitBurn.png",
        },

        {
          title: "【オリジナル】Geminids",

          release: ["Dec 20, 2020"],

          image: "src/assets/images/Songimages/Geminids.jpg",
        },

        {
          title: "【オリジナルMV】ChroNoiR HoneyWorks medley",

          release: ["Feb 21, 2021"],

          image: "src/assets/images/Songimages/Honeyworks.jpg",
        },

        {
          title: "【オリジナルMV】シュガーヘイト",

          release: ["May 28, 2021"],

          image: "src/assets/images/Songimages/Sugarhate.jpg",
        },

        {
          title: "【オリジナルMV】アウトサイダー",

          release: ["June 27, 2021"],

          image: "src/assets/images/Songimages/outsider.jpg",
        },

        {
          title: "【オリジナル】マグマグラグラ",

          release: "Nov 6, 2021",

          image: "src/assets/images/Songimages/GuraGura.jpg",
        },

        {
          title: "【オリジナル】ブラッディ・グルービー",

          release: ["Dec 25, 2021"],

          image: "src/assets/images/Songimages/Bloody-Groovy.jpg",
        },

        {
          title: "【オリジナルMV】CandyDance",

          release: ["July 10, 2022"],

          image: "src/assets/images/Songimages/CandyDance.png",
        },

        {
          title: "【オリジナル】スターブラックゲイザー",

          release: ["Aug 22, 2022"],

          image: "src/assets/images/Songimages/blackstargazer.jpg",
        },

        {
          title: "【オリジナルMV】シネマ ",

          release: ["Dec 11, 2022"],

          image: "src/assets/images/Songimages/Cinima.jpg",
        },

        {
          title: "【オリジナル】Up2You - Lily ",

          release: ["Dec 11, 2022"],

          image: "src/assets/images/Songimages/Up2you.jpg",
        },
      ],
    };
  },
  methods: {
    add(song) {
      this.cart.push(song);
      console.log(this.cart);
    },
  },
};
</script>

<style>
h1 {
  font-size: 5rem;
  padding: 0.9rem;
}

.window {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: column;
  margin: auto;
  padding-right: 2rem;
  padding-bottom: 4rem;
  justify-content: space-around;
  justify-content: center;
}

.display {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: fit-content;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #123b4b8e;
  border-radius: 30px;
  padding: 3rem;
}

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
  background-color: #9ecfd6;
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

.cart-btn {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: inline-block;
  margin: 1rem;
  font-size: 1.5rem;
  border: none;
  background: none;
  transition: all 0.2s;
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.cart-btn:hover {
  color: #88b2b8;
  transform: translateY(-0.3rem);
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

h1 {
  font-weight: 500;
  font-size: 2.5rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: var(--color-text);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .logo {
    src: "@/assets/images/darkcart.png";
  }

  .cart-btn {
    color: #ffffff;
  }
}

@media (min-width: 550px) {
  .catalog {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }

  .display-title {
    font-size: 1.3rem;
    padding: 20px;
  }

  .display-card {
    width: 90%;
  }

  .display-img {
    width: 40rem;
    height: 40rem;
  }
}

@media (min-width: 800px) {
  .catalog {
    min-height: 10vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }

  .display-img {
    width: 20rem;
    height: 20rem;
  }

  .display-card {
    width: 30rem;
  }
}

@media (min-width: 1024px) {
  .catalog {
    min-height: 5vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  .display-img {
    width: 15rem;
    height: 15rem;
  }

  .display-card {
    width: 25rem;
  }
}
</style>
