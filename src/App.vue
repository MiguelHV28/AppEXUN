<template>
  <div id="app">
    <NavBar titulo='EXUN'/>
    <div id="layoutSidenav">
      <SideBar/>
      <div id="layoutSidenav_content">
        <router-view></router-view>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue from 'vue'
//import VueRouter from 'vue-router'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Footer
    //Users
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
