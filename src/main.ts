import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {remote} from 'electron'

// import bootstrap's css
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// add right-click to get menu
const Menu = remote.Menu
const MenuItem = remote.MenuItem
let rightClickPosition: any = null
const menu = new Menu()
const menuItem = new MenuItem({
  label: 'Inspect Element',
  click: () => {
    remote.getCurrentWindow().webContents.inspectElement(rightClickPosition.x, rightClickPosition.y)
  }
})
menu.append(menuItem)
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rightClickPosition = {x: e.x, y: e.y}
  menu.popup({})
}, false)



// build the main view
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
