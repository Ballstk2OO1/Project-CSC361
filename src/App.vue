<template>
<div>

 <b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
    <b-navbar-brand to="/">Spec Comp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav right>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/build">Build</b-nav-item>
        <b-nav-item to="/compare">Compare</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <router-view/>
 </div>
 
</template>

<script>

</script>

