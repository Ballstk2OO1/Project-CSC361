<template>
  <div id="compare">
    <compareapp /> <!-- v-if="$store.state.isLogged -->
    <!-- <alert v-else-if="$store.state.cansee"/> -->
  </div>
</template>

<script>
import compareapp from '../components/compare.vue'
// import alert from '../components/alert.vue'

export default {
  name: 'compare', 
  components : {
    compareapp,
    // alert
  },
  mounted() {
    if (this.$store.state.isLogged == false) {
        this.$router.push('/login')
        return this.$swal(
        'Login first',
        'this content need authenticate !!',
        'warning');
      } 
  },
}

</script>