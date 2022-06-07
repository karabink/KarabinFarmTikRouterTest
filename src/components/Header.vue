<template>
  <div>
    <li class="nav-item">
      <transition name="fade">
        <router-link to="/">Головна</router-link>
      </transition>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about_us">Про нас</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/services">Послуги</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link contacts" to="/contacts">Контакти</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link prod" to="/shop">Товар</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>