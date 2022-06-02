<template>
 <div class="about_us">
  <h1>{{aboutus}}</h1>
  <h1 class="font_0">Про господарство "ТіК"</h1>
  <div class="container">

   <div class="font_1"><img width="80%" height="80%" src="http://km.dsp.gov.ua/uploads/posts/2020-08/1598434321_unnamed-2.jpg" alt="yak-zminyuvalis-cini-na-pshenicyu-v-ukra"></div>
   <div class="font_2" >
      <!--<h2 class="font_2_1" dir="ltr" style="center" >"ТіК"&nbsp;Про наше господарство</h2>-->
      <p class="font_2_2" dir="ltr" style="font-size:20px" >Cвою історію фермерське господарство «ТіК» веде початок з часів прийняття Земельного кодексу України від 18 грудня 1990 року та набрання чинності Закону України "Про селянське (фермерське) господарство" від 25.12.2003 року.</p>
      <span class="font_2_3" style="font-size:20px" >На той час створення приватного фермерського господарства було унікальною можливістю започаткування нової форми господарювання на землі, використання власних знань та досвіду для запровадження ефективних методів вирощування сільськогосподарських культур.</span></div>

  </div>
 </div>
</template>
<script>
 export default{
  name:'about_us',
  data (){
   return{
    title:'Про нас'
   }
  }
 }
</script>
<style lang="css" scoped>
.font0{
    text-align:center;
    font-size:25px
}
.font_1{
     width: 45%;   
     left: 15%;
     -webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
     -moz-box-shadow: 12px 29px 81px 0px rgba(255, 255, 255, 0.144);
      box-shadow: 12px 29px 81px 0px rgb(255, 255, 255);
 }
 .font_2{
     top: 10;
     margin: 0 0 5px 5px;
     margin: center;
     width:50%;
     text-align:right;
 
 }
 .font2_1{
     font-size:40px
 }
 .font2_2{
     font-size:15px
 }
 .container{
     margin: 35px 0;
     display: flex;
 }
</style>