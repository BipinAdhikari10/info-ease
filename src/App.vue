<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import InfoHome from "./components/InfoHome.vue";
// import InfoAbout from "./components/InfoAbout.vue";
export default {
  name: "App",
  components: {
    // InfoHome,
    // InfoAbout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
