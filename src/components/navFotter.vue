<template>
  <div class="footer">
    <div class="call-us">
      <b>联系电话：025-86697165</b>
      <b>咨询邮箱：info@freelycar.com</b>
      <b>地址：南京市玄武区徐庄软件园苏宁青创园C栋3楼</b>
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
      border-bottom: 1px solid #E8E8E8;
      margin-bottom: 30px;
      padding: 30px 0;
      b{
        color: #284BB6;
        font-size: 16px;
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
