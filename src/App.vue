<template>
  <div id='app'>
  <div id="wrapper">
    <img src="https://board.if.ua/photo/54/54500/54500a.jpg" style="filter: saturate(110%); width: 100%; height: 300px; object-fit:cover; object-position: 50% 50%; border-radius: 30px;">
    <img id="logo1" name="Фермерське господарство 'ТіК'" src="./assets/logo1.png">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--<div class="container"> <h1>Hello</h1> </div>-->
    <nav class="navbar-light" id="NavC" aria-label="Сайт">
    <ul class="menu-main" id="ItemC"  style="text-align:center">
      <li class="nav-item">
        <transition name="fade">
        <router-link to="/home">Головна</router-link>
        </transition>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about_us">Про нас</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/services">Послуги</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contacts">Контакти</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/shop">Товар</router-link>
      </li>
    </ul>
</nav>
<div>
  <router-view></router-view>
</div>
    <!-- <Home/>
    <About/>
    <Services/>
    <Contacts/>
    <Shop/> -->
    <footer tabindex="-1" id="SITE_FOOTER_WRAPPER">
      <div id="SITE_FOOTER">
          <p style="font-size:14px" class="by-name">© 2022 by Name of cropsfarm. Proudly created by karabinkateryna.student.uzhnu </p>
                <div class="panel" aria-label="Панель соцмереж">
                  <div id="facebook" >
                    <a data-testid="linkElement" href="http://www.facebook.com">
                  <img alt="" style="width: 26px; height: 26px; object-fit: cover;" 
                  src="https://creativecatalyst.com/wp-content/uploads/2016/12/FB-fLogo-printpackaging-1.png">
                    </a>
                  </div>
                  <div id="twitter" >
                    <a data-testid="linkElement" href="https://twitter.com/home?lang=uk">
                  <img alt="" style="width: 26px; height: 26px; object-fit: cover;" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY1xCpqA3ViGvbpu3_5Vl1tsXFDIQ1lRNLGNNUaq5tohjlROgl62g20oZsItlNxfiViU&usqp=CAU">
                    </a>
                  </div>
                  <div id="instagram" >
                    <a data-testid="linkElement" href="http://www.facebook.com">
                  <img alt="" style="width: 26px; height: 26px; object-fit: cover;" 
                  src="https://st3.depositphotos.com/6914280/12718/v/600/depositphotos_127186948-stock-illustration-new-instagram-logo-black-color.jpg">
                    </a>
                  </div>
                </div>
      </div>
    </footer>
  </div>
  </div>
</template>

<script>
// import Home from './components/home'
// import About from "./components/about_us";
// import Services from "./components/services";
// import Contacts from "./components/contacts";
// import Shop from "./components/shop";
export default {
  name: 'App',
  components: {
    // Home,
    // About,
    // Services,
    // Contacts,
    // Shop
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');
.menu-main {
  list-style: none;
  padding: 0 30px;
  margin: 0;
  font-size: 18px;
  text-align: center;
  position: relative;
  background: white;
}
.menu-main:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  left: 0;
  bottom: -20px;
  background: radial-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 70%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%) 0 -10px;
  background-size: 20px 20px;
  background-repeat: repeat-x;
}
.menu-main li {display: inline-block;}
.menu-main a {
  text-decoration: none;
  display: inline-block;
  margin: 0 15px;
  padding: 10px 30px;
  font-family: 'PT Sans Caption', sans-serif;
  color: #777777;
  transition: .3s linear;
  position: relative;
}
.menu-main a:before,
.menu-main a:after {
  content: "";
  position: absolute;
  top: calc(50% - 3px);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d6b80e;
  opacity: 0;
  transition: .5s ease-in-out;
}
.menu-main a:before {left: 5px;}
.menu-main a:after {right: 5px;}
.menu-main a.current:before,
.menu-main a.current:after,
.menu-main a:hover:before, 
.menu-main a:hover:after {opacity: 1;}
.menu-main a.current,
.menu-main a:hover {color: #2fa00c;}
@media(max-width:680px) {
  .menu-main li {display: block;}
}
.panel{
 float: right;    
 display: flex;
 text-decoration: none !important;
}

.by-name {
    float: left;
   }

#wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -100px;
}

#logo1 {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 450px;
  height: 139;
  transform: translate(-50%, -50%);
  
  box-shadow: 12px 12px 81px 0px rgb(255, 255, 255);
  font-size: 10px;
  padding: 12px 12px;
  border: none;
  cursor: pointer;
  border-radius: 2px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;}
#app {
  background: rgb(255, 255, 255);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 100px;
}
</style>
