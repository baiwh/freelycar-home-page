<template>
  <div class="home">
    <!--首页-->
    <div class="head">
      <!--导航-->
      <nav></nav>

      <!--其他-->
      <h1>小易智能柜养车服务</h1>
      <h2>让您<span>足不出户</span>就能实现爱车养护</h2>
      <button>了解小易</button>
      <img src="./../assets/phone2.png" alt="">
      <img src="./../assets/phone1.png" alt="">
      <img src="./../assets/car.png" alt="">
    </div>

    <!--开启爱车养护新模式-->
    <!--深度赋能-->
    <!--业务流程-->
    <!--合作伙伴-->
    <!--底部-->
  </div>
</template>

<script>
  import nav from './nav.vue'

  export default {
    name: 'HelloWorld',
    components: {
      nav:nav
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home {
    width: 100%;
    > div {
      transform: translateX(-50%);
      position: relative;
      left: 50%;
    }
  }

  .head {
    height: 58.2vw;
    width: 100%;
    background: url("./../assets/bg1.png");
    background-size: 100% 100%;

  }

</style>
