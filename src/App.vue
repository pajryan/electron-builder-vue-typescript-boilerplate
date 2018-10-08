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
// @import url('~@/assets/css/main.scss');

// this is really helpful for styles/icons: https://github.com/SimulatedGREG/electron-vue/issues/463


</style>
