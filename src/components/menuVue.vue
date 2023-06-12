<template>
  <div class="top">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg bg-light fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" @click="changePage('home')">
                <img src="../assets/logo.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                <span> pt Illustration </span>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul  class="navbar-nav">
                  <li v-for="menu in menuList" :key="menu.key" class="nav-item dropdown">
                    <!-- 1 level menu -->
                    <a v-if="Object.values(menu)[0].length==0" class="nav-link" href="#" role="button"  @click="changePage(Object.keys(menu)[0])">
                      {{ Object.keys(menu)[0] }}
                    </a>
                    <!-- 2 level menu -->
                    <a v-else class="nav-link dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ Object.keys(menu)[0] }} 
                    </a>
                    <div v-if="Object.values(menu)[0].length!==0" class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <span v-if="Object.keys(menu)[0]=='Shop'">
                        <a v-for="(item, itemIndex) in Object.values(menu)[0]" :key="itemIndex" class="dropdown-item" :href="Object.values(item)[0].url" target="_blank">
                          {{ Object.values(item)[0].name }}
                        </a>
                      </span>
                      <span v-else>
                        <a v-for="(item, itemIndex) in Object.values(menu)[0]" :key="itemIndex" class="dropdown-item" href="#" @click="changePage(Object.keys(item)[0])">
                          {{ Object.keys(item)[0] }}
                        </a>
                      </span>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a id="linkFB" href="https://www.facebook.com/furimuriart" target="_blank">
                      <img class="menuImg" :src="imgs.fbMenu">
                    </a>
                  </li>
                  <li class="nav-item">
                    <a id="linkIG" href="https://www.instagram.com/furimuriart/" target="_blank">
                      <img class="menuImg" :src="imgs.igMenu">
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://www.pinkoi.com/store/furimuri" target="_blank">
                      <img class="menuImg" :src="imgs.pinkoiMenu">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data() {
    return {
      menuList: [
        {ABOUT: []},
        {PRODUCTS: [{Postcards:"Postcards"}, {Stickers:"Stickers"}, {Calendar:"Calendar"}, {"Line Stickers":"Line Stickers"}, {Others:"Others"}]},
        {ARTWORKS: [{Illustration:"Illustration"}, {Watercolor:"Watercolor"}, {"Color pencil":"Color pencil"}]},
        {HANDMADE:[]},
        {SHOP:[ 
          {
            Ubuntu: "Ubuntu"
          }, 
          {
            Eslite: "Eslite"
          }
          ]
        }
        // ,
        // {"Co-branding":[]}
      ],
      imgs: {
        fbMenu:require('@/assets/facebook.svg'),
        igMenu:require('@/assets/instagram.svg'),
        pinkoiMenu:require('@/assets/pinkoi.jpg')
      }
    }
  },
  methods: {
    changePage(pageName){
      console.log(pageName)
      this.$emit('update-page', pageName)
      let navbarToggler = $('.navbar-toggler')
      if($(window).width()<992) navbarToggler.click()
    }
  }
}
</script>
<style scoped>
.navbar-nav {
  margin-left: auto;
}
.menuImg {
  width:25px;
  margin: 6px 10px 0 5px;
}
</style>
