<template>
  <div class="home">
    
    <b-container class="content" fluid="expand-lg">
      <h1>This Website</h1>
      <p>Is the guideline for whom looking for the computer that suiting to them</p>

      
    <p class="content2">เป็นเว็บไซต์สำหรับผู้ที่มองหาคอมพิวเตอร์ที่ใช้งานได้อย่างเหมาะสมกับความต้องการ</p>
      
    </b-container>

    <b-container class="content3" fluid="lg">
      <b-img 
      left
      src='../img/asus.jpeg' 
      fluid alt="Left image"
      >
      </b-img>
      <div class="main">
          <h3>สเปคของ ASUS VIVOBOOK 15 OLED</h3>
          - ซีพียู: AMD Ryzen 3 3100 <br>
          - เมนบอร์ด: GIGABYTE B450M S2H <br>
          - กราฟิกการ์ด: MSI GTX 1650 SUPER VENTUS XS OC 4GB <br>
          - แรมออนบอร์ด 8GB DDR4 บัส 3200 MHz <br>
          - หน้าจอ 15.6 นิ้ว ความละเอียด Full HD พาเนล OLED <br>
          - มีพอร์ต USB 2.0 x 2, USB-A 3.2 x 1, USB-C 3.2 x 1, HDMI x 1 <br>
          - รองรับการเชื่อมต่อผ่าน Wi-Fi 6 มาตรฐาน 802.11ax รองรับ Bluetooth 5.0 <br>
          - ระบบปฏิบัติการ Windows 10 Home มี Microsoft Office Home & Student 2019 <br>
          - น้ำหนักตัวเครื่อง 1.8 กิโลกรัม <br>
          - ราคา 26,990 บาท  <br>
    </div>

    </b-container>

    
    <b-container class="content4" fluid="expand-lg">
      <b-img 
      right
      src='../img/spec.jpeg' 
      fluid alt="Right image"
      >
      </b-img>
      <div class="main2">
          <h3>สเปคคอมเรียนและทำงาน</h3>
            กลุ่มที่เป็นคนทำงานหรือใช้ในด้านการศึกษา ดูจะมีความจำเป็นและ <br>
            ความหลากหลายในการใช้งานมากกว่าคอมพื้นฐานทั่วไป <br>
            <br>
          - ซีพียู Intel Core i5-1135G7 แบบ 4 คอร์ 8 เธรด ความเร็ว 2.4-4.2 GHz <br>
          - การ์ดจอออนบอร์ด Intel Iris Xe Graphics G7 <br>
          - SSD แบบ M.2 NVMe ความจุ 512GB <br>
          - แรม: KINGSTON HyperX FURY DDR4 8GB (8GBx1) 3200 Black <br>
          - Storage: Western Digital Blue 1TB WD10EZEX <br>
          - เพาเวอร์ซัพพลาย: COOLERMASTER Elite V3 600W <br>
          - เคส: Tsunami Galaxy G7 TG White <br>
          - ราคา 15,800 บาท 
      </div>

    </b-container>

    <b-container id="bgcard" fluid="lg" style="background-color: black;">
      <div class="container flex-center">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-6 mt-4 mb-4">
            <b-card
              title=""
              img-src="../img/20.jpeg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 mx-auto"
            >
              
              <b-card-text>
               
              </b-card-text>
              <router-link to="/build" class="btn btn-link" style="color: azure; padding-top: 16px;">Build your own</router-link>
              
            </b-card>
          </div>

          <div class="col-12 col-lg-6 col-md-6 mt-4 mb-4">
            <b-card id="img1"
              title=""
              align-title="center"
              img-src="../img/19.jpeg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 mx-auto"
            >
            
              <b-card-text>
                
              </b-card-text>

              <router-link to="/compare" class="btn btn-link" style="color: azure; padding-top: 16px;">Compare your own</router-link>
            </b-card>
          </div>

        </div>
      </div>
    </b-container>


  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },

  methods: {

  }
}

</script>


<style lang="scss">
  .home {
    font-family: 'Kanit';
  }

  .content {
    background-image: url('../img/home.png');
    background-position-y: -200px;
    padding-top: 100px;
    padding-left: 40px;
    padding-right: 40px;
    height: 600px;
    color: azure;
  }

  .content2 {
    padding-top: 250px;
    padding-left: 40px;
    padding-right: 40px;

    text-align: right;
    height: 150px;
    ;

    color: azure;
  }

  .content3 {
    height: 500px;
    background-color: white;
    padding-left: 50px;
    padding-right: 50px;
  }

  .content3 img {
    width: 35%;
    float: left;
    padding: 15px;
   
  }

  .content3 div {

    width: 65%;
    float: left;
    padding: 15px;
   
  }

  .content4 {
    height: 550px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: azure;
  }

  .content4 img {
    width: 35%;
    float: right;
    padding: 15px;
  }

  .content4 div {
    width: 65%;
    float: right;
    padding: 15px;
  }

.container {
  float: right;
}

#bgcard {
  background-color: black;
}
</style>

<script>

</script>
40