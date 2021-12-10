<template>

<b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
          <em>{{ $store.getters["username"] }}</em>
          </template>
          <b-dropdown-item to="/userinfo">Profile</b-dropdown-item>
          <b-dropdown-item href="/" v-on:click="logout">Sign Out</b-dropdown-item>

        </b-nav-item-dropdown>


</template>

<script>


export default {
  name : "userinfo",
  props : [ "username" ] ,
   methods: {
    logout() {
      console.log("Logout")
      console.log(this.$store.state.username)
      document.cookie="token=";
      this.$router.push('/')
      this.$store.state.isLogged="false"
      this.$store.state.cansee="true"
      console.log(this.$store.state.isLogged)


      return this.$swal(
                'Logout',
                'Comeback any time',
                'warning')
            
    }
  }

}
</script>

<style lang="scss">
  #logoutbtn{
    justify-content: center;
  }
</style>