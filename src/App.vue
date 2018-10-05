<template>
  <div id="app">
      <div class="nav justify-content-center">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/stateManagement" class="nav-link">State</router-link>
        <router-link to="/appUpdate" class="nav-link">App Update</router-link>
        <router-link to="/sampleChart" class="nav-link">Chart</router-link>
        <router-link to="/bootstrap" class="nav-link">Bootstrap</router-link>
      </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// this is ROOT css stuff.  Note that Bootstrap is loaded in main.ts (loading it here doesn't work)
@import url('~@/assets/css/main.css');

// this is really helpful for styles/icons: https://github.com/SimulatedGREG/electron-vue/issues/463
// html, body{
//   height: 100%;
// }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     text-decoration: none;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #008edc;
//     }
//   }
// }
</style>
