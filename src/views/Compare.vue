<template>
  <div id="compare">
    <compareapp /> <!-- v-if="$store.state.isLogged -->
    <!-- <alert v-else-if="$store.state.cansee"/> -->
  </div>
</template>

<script>
import compareapp from '../components/compare.vue'
// import alert from '../components/alert.vue'
import axios from 'axios'
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
      else {
        console.log(document.cookie.split("=")[1])
        let apiURL = 'http://localhost:9000/api/create/spec'
            const reqbody = {
              token: document.cookie.split("=")[1],
              title: "test",
              spec: {
                cpu: "i5-11500",
                gpu: "gtx1650",
                mainboard: "B560F",
                memory: "Corsair 16GB",
                storage: "WDBlack 500GB",
                psu: "cv650",
                cooler: "-",
                case: "4000D"
              }
            }
            axios.post(apiURL, reqbody).then((res) => {
              console.log(res.data)
          
              
            }).catch(error => {
              console.log(error)
              
            })
      }
  },
}

</script>