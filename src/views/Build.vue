<template>
  <div id="build">
    <h1>{{ products.data.mainboard[0].title }}</h1>

    <b-container class="card">
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group label="Brand" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="CPU" :options="Brand"></b-form-select>
        </b-form-group>

        <b-form-group label="Model" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="CPU" :options="Model"></b-form-select>
        </b-form-group>

      </b-col>

      <b-col lg="6">

          <b-card 
                        img-src="https://picsum.photos/600/300/?image=11"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mb-1 mx-auto"
                        >            
            <b-card-text>
              detail
            </b-card-text>
          </b-card>

      </b-col>
    </b-row>
  </b-container>

  <b-container class="card">
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group label="Mainboard" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="mainboard" :options="variants"></b-form-select>
        </b-form-group>
        <b-form-group label="product" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="CPU" :options="variants"></b-form-select>
        </b-form-group>

      </b-col>

      <b-col lg="6">

          <b-card 
                        img-src="https://picsum.photos/600/300/?image=12"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mb-1 mx-auto"
                        >            
            <b-card-text>
              detail
            </b-card-text>
          </b-card>

      </b-col>
    </b-row>
  </b-container>

  <b-container class="card">
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group label="VGA card" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="vga" :options="variants"></b-form-select>
        </b-form-group>
        <b-form-group label="product" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="CPU" :options="variants"></b-form-select>
        </b-form-group>

      </b-col>

      <b-col lg="6">

          <b-card 
                        img-src="https://picsum.photos/600/300/?image=13"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mb-1 mx-auto"
                        >            
            <b-card-text>
              detail
            </b-card-text>
          </b-card>

      </b-col>
    </b-row>
  </b-container>

  <b-container class="card">
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group label="Memory" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="memory" :options="variants"></b-form-select>
        </b-form-group>
        <b-form-group label="product" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="CPU" :options="variants"></b-form-select>
        </b-form-group>

      </b-col>

      <b-col lg="6">

          <b-card 
                        img-src="https://picsum.photos/600/300/?image=14"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mb-1 mx-auto"
                        >            
            <b-card-text>
              detail
            </b-card-text>
          </b-card>

      </b-col>
    </b-row>
  </b-container>


        <btn class="btn" style="color: azure; padding-top: 16px;" @click="showAlert">Hello world</btn>
  </div>

 
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
        products: [],
        Brand: [
          "Intel",
          "AMD"
        ]
      }
  },
  mounted() {
    axios.get('http://localhost:9000/api/compare/getAllData')
    .then((res) => {
      this.products = res.data
      console.log("test1", res.data)
    })
    .catch((err) => {
      console.log("test2", err)
    })
  },

  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal(
        'Good job!',
        'You clicked the button!',
        'success');

    }
  },

};
</script>

<style lang="scss">

#build {
    padding-top: 100px;
    font-family: 'Kanit';
}

#build h1 {
  padding-left: 40px;
}

.card {
  padding-top: 0px;
}

</style>