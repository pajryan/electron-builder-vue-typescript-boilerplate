<template>
  <div class="about">
    <h1>Application Update</h1>
    <h3>(version {{applicationVersion}})</h3>
    
    <p>Clicking the button below will check for an application update and apply it if needed. (see the console for progress)</p>
    <button @click="checkForApplicationUpdate">click to check for update</button>

    <br />
    <br />
    <p>This demonstrates that the state persists based on the checkbox on the State Management Page</p>
    <p>isAdmin (state) = {{isAdmin}}</p>
  </div>
</template>



<script>
/* tslint:disable */

// I can't really figure out why, but I have to import electron-updater in main.js (background.js) and pass it here
//  If I import it directly here, things blow up
const {remote} = require('electron')
const autoUpdater = remote.getGlobal('autoUpdater')
import { mapState } from 'vuex' // import state

export default{
  props: ['msg'], 
  computed: {
    ...mapState(['isAdmin', 'applicationVersion'])
  },

  mounted() {
    console.log('have mounted Application Update')
  },
  methods: {
    checkForApplicationUpdate() {
      // autoUpdater.logger = log
      console.log('autoupdater', autoUpdater)
      autoUpdater.on('checking-for-update', () => {
        console.log('Checking for update...')
      })
      autoUpdater.on('update-available', (ev, info) => {
        console.log('Update available.')
      })
      autoUpdater.on('update-not-available', (ev, info) => {
        console.log('Update not available.')
      })
      autoUpdater.on('error', (ev, err) => {
        console.log('Error in auto-updater.')
      })
      autoUpdater.on('download-progress', (ev, progressObj) => {
        console.log('Download progress...')
      })
      autoUpdater.on('update-downloaded', (ev, info) => {
        // Wait 5 seconds, then quit and install
        // In your application, you don't need to wait 5 seconds.
        // You could call autoUpdater.quitAndInstall(); immediately
        console.log('Update downloaded; will install in 5 seconds')
        setTimeout(function() {
          autoUpdater.quitAndInstall()
        }, 5000)
      })
      console.log('kicking off update check')
      autoUpdater.checkForUpdates()
    }
  }
}


</script>

<style scoped lang="scss">

</style>
