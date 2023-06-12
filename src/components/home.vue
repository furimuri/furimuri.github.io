<template>
  <menuVue @update-page="updatePage"/>
  <div class="wrapper">
    <!-- <div class="hello">
      <br>
      <h1>{{ msg }}</h1>
      <br>
      <ul>
        <li v-for="item in sortedSocialMedia" :key="item.id">
          <a :id="item.name" target="_blank" :href="item.url">
            <span data-bs-toggle="tooltip" data-bs-placement="top" :title="item.tooltip">
                <img class="smallIcon" :src="item.img"/>
            </span>
          </a>
        </li>
      </ul>
    </div> -->
    <div class="wrapper">
      <div class="content">
        <div v-if="pageNow=='ABOUT'">
          <aboutPage/>
        </div>
        <div v-else-if="pageNow=='HANDMADE'">
          <handmadePage/>
        </div>
        <div v-else-if="pageNow=='Stickers'">
          <stickersPage/>
        </div>
        <div v-else-if="pageNow=='Line Stickers'">
          <lineStickersPage/>
        </div>
        <div v-else-if="pageNow=='Postcards'">
          <postcardsPage/>
        </div>
        <div v-else-if="pageNow=='Calendar'">
          <calendarPage/>
        </div>
        <div v-else-if="pageNow=='Others'">
          <othersPage/>
        </div>
        <div v-else-if="pageNow=='Illustration'">
          <illustratorPage/>
        </div>
        <div v-else-if="pageNow=='Watercolor'">
          <watercolorPage/>
        </div>
        <div v-else-if="pageNow=='Color pencil'">
          <colorpencilPage/>
        </div>
        <imgScroller/>
      </div>
      <footer class="footer">
        <footerPage/>
      </footer>
    </div>
  </div>
</template>

<script>
import menuVue from "./menuVue.vue"
import aboutPage from "./pages/about.vue"
import handmadePage from "./pages/handmade.vue"
import stickersPage from "./pages/products/stickers.vue"
import lineStickersPage from "./pages/products/lineStickers.vue"
import postcardsPage from "./pages/products/postcards.vue"
import calendarPage from "./pages/products/calendar.vue"
import othersPage from "./pages/products/others.vue"
import illustratorPage from "./pages/artworks/illustration.vue"
import watercolorPage from "./pages/artworks/watercolor.vue"
import colorpencilPage from "./pages/artworks/colorpencil.vue"
import footerPage from "./footer.vue"
import imgScroller from "./imageScroller.vue"
import $ from 'jquery'
export default {
  name: 'homePage',
  components: {
    menuVue,
    aboutPage,
    handmadePage,
    stickersPage,
    lineStickersPage,
    postcardsPage,
    calendarPage,
    othersPage,
    illustratorPage,
    watercolorPage,
    colorpencilPage,
    footerPage,
    imgScroller
  },
  props: {
  },
  data() {
    return {
        socialMedia :[
          {name:"linkFB", url: "https://www.facebook.com/furimuriart", img: require('@/assets/fb.png'), tooltip: "Find us on facebook!", id:3},
          {name:"linkIG", url: "https://www.instagram.com/furimuriart/", img: require('@/assets/ig.png'), tooltip: "Find us on instagram!", id: 2},
          {name:"linkLine", url: "https://lin.ee/L9IaTNx", img: require('@/assets/line.png'), tooltip: "Contact us with LINE", id: 4},
          {name:"linkPinkoi", url: "https://www.pinkoi.com/store/furimuri", img: require('@/assets/pinkoi.jpg'), tooltip: "More things on Pinkoi!", id: 1}
        ],
        pageNow: "home"
    }
  },
  computed: {
    sortedSocialMedia() {
      return this.socialMedia.slice().sort(this.sortById)
    }
  },
  methods: {
    updatePage(menuPageNow){
      this.pageNow = menuPageNow
    },
    sortById(a, b) {
      return a.id - b.id
    },
    getMobileOperatingSystem() {
      let userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
      if (/android/i.test(userAgent)) {
          return "Android";
      }
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
      return "unknown";
    }
  },
  mounted() {
    if(this.getMobileOperatingSystem() == "iOS") {
      $("#linkFB").attr("href", "fb://profile/805794976434515");
      $("#linkIG").attr("href", "instagram://user?username=furimuriart");
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img.smallIcon {
	max-width: 50px;
	margin: 5px 5px 30px 5px;	
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  margin-top: 100px;
  flex: 1;
}
.footer {
  margin-top: auto;
}

</style>
