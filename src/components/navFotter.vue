<template>
  <div class="footer">
    <div class="call-us">
      <span>网站首页</span>
      <span> | </span>
      <span>关于我们</span>
      <span> | </span>
      <span>智能服务</span>
      <span> | </span>
      <span>商业模式</span>
      <span> | </span>
      <span>申请合作</span>
    </div>
    <div class="beian">
      <span>© 2017 Copyright 南京小易信息科技有限公司 版权所有 <a href="http://www.beian.miit.gov.cn">苏ICP备13061134号-1</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navFotter',
    data() {
      return {
        msg: '首页',
      }
    },
  }
</script>

<style scoped lang="less">
  .footer{
    height: 200px;
    width: 1240px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 30px;
    div{
      display: flex;
      justify-content: space-around;
    }
    .call-us{
      margin-bottom: 30px;
      padding: 30px 300px;
      span{
        color: #7A7A7A;
        font-size: 14px;
      }
    }
    .little{
      b{
        color: #7C7C7C;
        font-size: 12px;
      }
    }
    .beian span,a{
      font-size: 12px;
      color: #D1D1D1;
    }
  }

</style>
