<template>
  <!-- <img class="logo" src="./assets/logo.jpg"> -->
  <home/>
</template>

<script>
import home from './components/home.vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
html, body {
  height: 100%;
}

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

#app {
  font-family: 'Karla', 'Kaushan Script', cursive, 'Josefin Slab', Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #696969;
  /* margin-top: 60px; */
  overflow: hidden;
  top: 0;
}

img.logo {
  width: 100px;
  opacity: 80%;
}


</style>