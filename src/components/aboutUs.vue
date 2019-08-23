<template>
  <div class="about-us">
    <img class="head" src="./../assets/bg-car.png" alt="">

    <div class="company title">
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
      <img class="time-line" src="./../assets/timeLine.png" alt="">
    </div>

    <div class="title">
      <h5>Letters Patent</h5>
      <h1>专利证书</h1>
      <b></b>
      <div class="zhuanli">
        <img src="./../assets/guapai@2x.png" alt="">
        <img src="./../assets/zhuanli@2x.png" alt="">
      </div>
      <div class="zhengshu">
        <img v-for="(item,index) in msg"
             :src="['/static/zhengshu/'+item+'.jpg']" alt="">
      </div>
      <div class="shicha">
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
        msg: ['01','02','03','04','05','06','07','08',
          '09','10','11','12','13','14']
      }
    }
  }
</script>

<style scoped lang="less">

  .about-us{
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    .head {
      height: 464px;
    }
    > div {
      width: 1240px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 100px 0 75px 0;
      border-bottom: 1px solid #dcdcdc;
    }
    p{
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      margin: 0 150px;
    }
  }

  .time-line{
    width: 1224px;
    height: 325px;
    margin: 30px 0;
  }

  .zhuanli{
    img{
      height: 242px;
      width: 170px;
      margin: 0 100px;
    }
  }
  .zhengshu{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 96px 0;
    img{
      height: 215px;
      width: 160px;
    }
  }
  .shicha{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 170px;
    margin: 30px 0;
    justify-content: space-between;
    img{
      width: 264px;
      height: 178px;
      margin-bottom: 30px;
    }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
