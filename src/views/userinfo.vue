<template>
  <div id="userinfo">
    <history />
  </div>
</template>

<script>
import history from '../components/setting.vue'
export default {
  name : 'userinfo',
  components : {
      history
  },

}

</script>

<style lang="scss">
    
#userinfo {
    font-family: 'Kanit';
}


</style>