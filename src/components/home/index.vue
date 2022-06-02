<template>
    <div class="home">
    <h1 class="font_4" dir="ltr" style="text-align:center;font-size:40px" color='#2B5336'>
      <span color="">Фермерське господарство "ТіК"</span>
    </h1>  
    <router-view></router-view>
    <div class = "right_i">

    </div>
    <div class = "left_p">
<p class="font_7" dir="ltr" style="font-size:20px">Зернові культури — найважливіша група вирощуваних однорічних трав'янистих рослин, оброблюваних для отримання зерна — основного продукту харчування людини, сировини для багатьох галузей промисловості, та використовується для виробництва корму для тварин. Ця група рослин є найбільш поширена серед усіх сільськогосподарських культур у світовому землеробстві.</p>
    </div>
    <v-carousel
    :carousel_data="sliderItems"
    />
    <img src="https://static.wixstatic.com/media/2fffff_272596ee6d324c289ab63e05ac613e24~mv2.jpg/v1/fill/w_883,h_277,al_c,q_80,usm_0.66_1.00_0.01/traktor-john-deere-8430-v-agregatuvanni-.webp" alt="traktor-john-deere-8430-v-agregatuvanni-" style="width: 981px; height: 309px; object-fit: contain; object-position: center center;">
</div>
</template>

<script>
import vCarousel from "../v-carousel.vue"
    export default {
        name: 'home',
        components:{
          vCarousel
        },
    props: {
    imageSrc: {
      type: String,
      default:
        '',
    },
  },
  data(){
    return{
      sliderItems:[
        { id: 1, name: 'img1', img: 'tractor.jpg' },
        { id: 2, name: 'img2', img: 'sowing.jpg'  },
        { id: 3, name: 'img3', img: 'drone.jpg'   }
      ]
    }
  }
    }
</script>

<style lang="css" scoped>
.left_p{
margin: auto;
  width:85%;
  text-align:justify;
  font-size: 50px;
}
.home{
  margin-bottom: 35px;
}

</style>