<template>
  <div class="window">
    <div class="catalog">
      <h1>Welcome to the Catalog</h1>
    </div>

    <div class="display">
      <songcard
        v-for="songs in songs"
        :key="songs.title"
        :title="songs.title"
        :release="songs.realease"
        :image="songs.image"
      />
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
  data() {
    return {
      selected: "",
      songs: [
        {
          title: "【初投稿】終末じゃない　歌ってみた",

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
    min-height: 5vh;
    display: flex;
    align-items: top;
    margin: 5rem;
  }
}
</style>
