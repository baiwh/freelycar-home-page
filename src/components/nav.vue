<template>
  <div class="nav">
    <img src="./../assets/logo.png" alt="">
    <div>
      <span>首页</span>
      <span>关于我们</span>
      <span>小易智能服务</span>
      <span>商业模式</span>
      <button>申请合作</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        msg: ''
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style scoped lang="less">
  .nav{
    width: 97rem;
    height: 12rem;
    border-bottom: 1px solid #7AC8F5;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      height: 3rem;
      width: 22rem;
    }
  }
</style>
