<template>
  <nav class="nav-bar">
    <router-link to="/" class="nav-link" exact>Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/services" class="nav-link">Services</router-link>
    <router-link to="/filim" class="nav-link">Filim</router-link>
  </nav>
</template>

<script>
// import router from "@/router";

// import router from "@/router";

export default {
  name: "MyNavigation",
};
</script>

<style scoped>
.nav-bar {
  background-color: #42b983;
  padding: 15px;
  display: flex;
  justify-content: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
