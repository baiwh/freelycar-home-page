<template>
  <div>

    <div class="about-us title">
      <h5>About Us</h5>
      <h1>公司简介</h1>
      <b></b>
      <p>
        南京小易信息科技有限公司，坐落于南京市徐庄软件园，是一家由苏宁股权投资的汽车后市场科技网络信息服务的企业， 由行业资深背景及世界名校留学人才共同发起组建。致力通过探索创新“互联网+”等新经济模式，让车主的汽车生活更便捷
      </p>
    </div>

    <div class="title">
      <h5>History Of Enterprise</h5>
      <h1>企业发展历程</h1>
      <b></b>
      <img src="./../assets/timeLine.png" alt="">
    </div>

    <div class="title">
      <h5>Letters Patent</h5>
      <h1>专利证书</h1>
      <b></b>
      <div>
        <img src="./../assets/guapai@2x.png" alt="">
        <img src="./../assets/zhuanli@2x.png" alt="">
      </div>
      <img src="./../assets/01@2x.png" alt="">
      <div>
        <div>
          <img src="./../assets/lingdao1@2x.png" alt="">
          <span>国务院一处张处长视察</span>
        </div>
        <div>
          <img src="./../assets/lingdao2@2x.png" alt="">
          <span>副省长张雷视察</span>
        </div>
        <div>
          <img src="./../assets/lingdao3@2x.png" alt="">
          <span>共青团中央汪书记视察</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'aboutUs',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .about-us{
    padding-top: 96px;
    border-bottom: 1px solid #dcdcdc;
    width: 1000px;
    p{
      font-size: 16px;
    }

  }

</style>
