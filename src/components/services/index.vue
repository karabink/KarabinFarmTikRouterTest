<template>
 <div class="services">
  <h1>{{services}}</h1>
  <h1 class="font_0" style="text-align:center;font-size:25px">Послуги</h1>
  <p class="font_6" style="text-align:center;font-size:22px">Шановні друзі, фермерське господарство «ТіК» може запропонувати Вам наступну послуги:</p>
<div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3>{{data.serviceTitle}}</h3>
         <h4>{{data.serviceInfo}}</h4>
      </div>
    </div>
 </div> 
</template>
<script>
 export default{
  name:'services',
  data (){
   return{
    title:'Services',
   products:[
      {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGE1qaGEa98uiR4jpxatILAdb24szxnV-GQ&usqp=CAU",
        productId:1,
        serviceTitle:"Вирощування овочів і баштанних культур, коренеплодів і бульбоплодів",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці "
      },
      {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8ZHxFectLHqs3FCX-hpcl4plssHL93HIYw&usqp=CAU",
        productId:2,
        serviceTitle:"Допоміжна діяльність у рослинництві",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці "
      },
      {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvioeaAB1PIPAnU1dvs7oW6UqUyZ97gAvwuA&usqp=CAU",
        productId:3,
        serviceTitle:"Післяурожайна діяльність. Оприскування агродроном",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці. На рахунок дрона дзвоніть за другим номером "
      },
      {
        image : "https://i.pinimg.com/600x315/24/98/e0/2498e0df241227bc5bd7246e834c8c3e.jpg",
        productId:4,
        serviceTitle:" Оброблення насіння для відтворення",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці "
      },
      {
        image : "https://i.pinimg.com/600x315/24/98/e0/2498e0df241227bc5bd7246e834c8c3e.jpg",
        productId:5,
        serviceTitle:"Складське господарство",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці "
      },
      {
        image : "https://i.pinimg.com/600x315/24/98/e0/2498e0df241227bc5bd7246e834c8c3e.jpg",
        productId:6,
        serviceTitle:"Надання в оренду й експлуатацію власного чи орендованого нерухомого майна",
        serviceInfo:"За детальнішою інформацією зверніться по контактам вказаними у відповідній вкладці"
      }
      ]
   }
  }
 }
</script>
<style scoped>
 .row{
  grid-template-columns: 1fr 1fr;
 }
 .image{
     width: 476px;
    height: 297px;
 }
 .services{
    margin-bottom: 35px;
 }
</style>