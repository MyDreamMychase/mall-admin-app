<template>
  <div class="home">
    <leftMenu></leftMenu>
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SlideNav></SlideNav>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import SlideNav from './components/slideNav.vue';

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    leftMenu,
    SlideNav,
  },

};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
