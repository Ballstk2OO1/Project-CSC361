<template>
<div>

 <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand to="/">Spec Comp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" active></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav right>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/build">Build</b-nav-item>
        <b-nav-item to="/compare">Compare</b-nav-item>
        <userinfo class="dropdown" v-if="$store.state.isLogged"/>
        <thispage v-else-if="$store.state.cansee"/>
        <b-nav-item class="registertab" disabled to="/register">Register</b-nav-item>
        
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <router-view/>
 </div>
 
</template>

<script>
import userinfo from './logout.vue'
import thispage from './loginnavbar.vue'

export default {
    name: 'navigationbar',
    props : {

    },
    components : {
      userinfo,
      thispage

    },
    methods: {

    },
}

</script>

<style lang="scss">
 
 .navbar {
   font-family: 'Kanit';
   box-shadow: 10px;
 }

.navbar .registertab {
  display: none;
}

.dropdown {
    padding-right: 50%;
}

</style>