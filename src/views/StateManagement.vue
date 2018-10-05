<template>
  <div>
    <h1>State</h1>
    <p>This shows the value of the isAdmin value which is stored in state (store.ts)<br />Clicking the checkbox changes the state.<br />The state is also displayed on the Application Update page (to demonstrate its peristence).</p>
    <h1>isAdmin {{isAdmin}}</h1>
    <p><input type="checkbox" v-model="manageAdmin" />isAdmin</p>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      test: false,
    }
  },
  computed: {
    ...mapState(['isAdmin']),
    manageAdmin: {
      get() { return this.isAdmin },
      set(value) { this.$store.commit('setIsAdmin', value) },
    }
  }
}

</script>

<style scoped lang="scss">

</style>
