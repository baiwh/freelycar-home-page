<template>
  <div class="ark">
    <img class="head" src="./../assets/bg-car.png" alt="">

    <div class="ark-info">
      <img src="./../assets/ark.png" alt="">
      <h2>小易智能柜服务 = 智能柜终端 + 线上信息平台</h2>
      <span>智能钥匙存取柜</span>
      <div>
        <h6 v-for="(item,index) in msg" :key="index">{{item}}</h6>
      </div>
      <b><img src="./../assets/arr.png" alt="">智能钥匙柜实拍图</b>
    </div>

    <div class="scenes">
      <h4>应用场景</h4>
      <h6>企业   |   单位   |   园区   |   小区</h6>
      <img src="./../assets/Scenes.png" alt="">
    </div>

    <div class="iphone">
      <img src="./../assets/iphone.png" alt="">
      <span>线上信息平台</span>
      <h3>微信用户端</h3>
      <pre>
        1. 简洁预约服务
        2. 精准查询车辆服务状态及订单历史</pre>
      <h3>技师端.</h3>
      <pre>
        1. 验证身份、接单作业全程信息化监督
        2. 系统实时推送派单，全面提高服务效率
        3. 技师大数据平台
      </pre>
    </div>

    <div class="management">
      <h3>管理后台</h3>
      <pre>1. 最前沿的技术架构，分布式文件系统设计，建立更快更稳定的数据库<br>2. 三重安全防护措施，严访用户信息泄露<br>3. 先进的服务器配置，完全记录用户行为并分析匹配需求</pre>
      <img src="./../assets/management.png" alt="">
    </div>

    <div class="title process">
      <h5>Service Flow Chart</h5>
      <h1>服务流程演示</h1>
      <b></b>
      <div>
        <img src="./../assets/arkProcess.png" alt="">
        <span>用户在智能柜扫码下单</span>
        <span>用户把钥匙放入智能柜</span>
        <span>门店技师扫码开柜取走钥匙</span>
        <span>汽车养护服务结束技师将车辆停放回原处</span>
        <span>技师将车开至小区内洗车点或第三方车辆服务门店进行洗车养护服务</span>
        <span>技师将钥匙放入智能柜系统推送消息给用户</span>
        <span>用户支付订单后扫码取走钥匙</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ark',
    data() {
      return {
        msg: [
          '基于美国atmel工业级处理器',
          '单个副柜最大30路支持',
          '最大16个锁板级联',
          '磁隔离抗干扰保障',
          '多重保护加固设计',
          '高可靠性的5557/5569端子设计',
          '一线正品台湾明纬供电',
          '3C认证漏电保护器',
          '带有温控的滚珠风扇散热',
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  /*手机端css*/
  /*@media only screen and (max-width: 415px) {*/
  @media only screen and (max-width: 1240px) {
    .ark {
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
      padding-bottom: 50px;
      .head {
        height: 170px;
      }
    }
    .ark-info{
      margin-top: 30px;
      height: 509px;
      width: 90vw;
      position: relative;
      flex-direction: column;
      display: flex;
      align-items: center;
      img{
        height: 196px;
        position: absolute;
        top: 146px;
      }
      h2{
        font-size: 18px;
        text-align: center;
        width: 70vw;
        color: #82D2F0;
      }
      span{
        font-size: 13px;
        border: 2px solid #82D2F0;
        border-radius: 30px;
        padding: 10px 15px;
        margin: 21px 0 22px 0;
        display: inline-block;
      }
      div{
        top: 240px;
        position: relative;
        width: 90vw;
      }
      h6{
        width: 45vw;
        float: left;
        font-size: 9px;
        line-height: 13px;
        border-left: 3px solid #82D2F0;
        padding-left: 8px;
        color: #7C7C7C;
        margin-bottom: 15px;
      }
      b{
        display: none;
      }
    }
    .scenes{
      height: 351px;
      width: 90vw;
      margin-top: 30px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      h4{
        position: relative;
        font-size: 13px;
        color: #494949;
      }
      h6{
        position: relative;
        font-size: 11px;
        color: #7C7C7C;
        margin: 20px 0 30px 0;
      }
      img{
        width: 300px;
      }
    }
    .iphone{
      height: 490px;
      width: 90vw;
      position: relative;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        position: absolute;
        width: 300px;
        z-index: -2;
      }
      span{
        font-size: 13px;
        border: 2px solid #82D2F0;
        border-radius: 30px;
        padding: 10px 15px;
        margin: 0 0 200px 0;
        display: inline-block;
      }
      h3{
        font-size: 12px;
        line-height: 17px;
        color: #494949;
        margin-bottom: 7px;
        margin-top: 30px;
        font-weight: 600;
        text-align: center;
      }
      pre{
        color: #7C7C7C;
        font-size: 9px;
        line-height: 23px;
        text-align: center;
      }
    }
    .management{
      height: 375px;
      position: relative;
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70vw;
      img{
        width: 160px;
        position: absolute;
      }
      h3{
        font-size: 12px;
        line-height: 17px;
        color: #494949;
        margin-top: 180px;
        font-weight: 600;
      }
      pre{
        color: #7C7C7C;
        font-size: 9px;
        line-height: 23px;
        text-align: center;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
    .process{
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 7px;
      div{
        position: relative;
        img{
          width: 300px;
          position: relative;
          transform: translateX(-50%);
          left: 50%;
        }
        span{
          position: absolute;
          width: 60px;
        }
        :nth-child(2){
          top: 30px;
          left: 30px;
        }
        :nth-child(3){
          top: 30px;
          left: 140px;
        }
        :nth-child(4){
          top: 60px;
          left: 220px;
          width: 50px;
        }
        :nth-child(5){
          top: 113px;
          left: 85px;
          width: 60px;
        }
        :nth-child(6){
          top: 113px;
          left: 180px;
          width: 60px;
        }
        :nth-child(7){
          top: 143px;
          left: 32px;
          width: 54px;
        }
        :nth-child(8){
          top: 180px;
          left: 180px;
          width: 64px;
        }
      }

    }
  }

  /*手机电脑之间*/
  /*@media screen and (min-width:415px) and (max-width:1240px) {*/
  /*}*/

  /*电脑端*/
  @media only screen and (min-width: 1240px) {
    .ark {
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
      padding-bottom: 50px;
      .head {
        height: 464px;
      }
    }
    .ark-info{
      margin-top: 134px;
      height: 644px;
      width: 1040px;
      padding-left: 400px;
      position: relative;
      img{
        height: 644px;
        width: 313px;
        position: absolute;
        left: 0;
        top: -30px;
      }
      h2{
        font-size: 28px;
        color: #82D2F0;
      }
      span{
        font-size: 18px;
        border: 2px solid #82D2F0;
        border-radius: 30px;
        padding: 10px 15px;
        margin: 62px 0 30px 0;
        display: inline-block;
      }
      h6{
        font-size: 14px;
        line-height: 17px;
        border-left: 3px solid #82D2F0;
        padding-left: 21px;
        color: #7C7C7C;
        margin-bottom: 15px;
      }
      b{
        font-size: 14px;
        color: #494949;
        margin-top: 80px;
        display: inline-block;
        img{
          height: 12px;
          width: 6px;
          margin-right: 13px;
          position: relative;
          top: 0;
        }
      }
    }
    .scenes{
      height: 638px;
      width: 840px;
      margin-top: 79px;
      position: relative;
      h4{
        top: 211px;
        position: relative;
        font-size: 18px;
        color: #494949;
      }
      h6{
        top: 240px;
        position: relative;
        font-size: 16px;
        color: #7C7C7C;
      }
      img{
        height: 638px;
        width: 743px;
        position: absolute;
        left: 300px;
        top: -30px;
      }
    }
    .iphone{
      height: 490px;
      width: 1000px;
      padding-left: 710px;
      position: relative;
      padding-top: 20px;
      img{
        height: 718px;
        position: absolute;
        left: -150px;
        top: -220px;
        z-index: -2;
      }
      span{
        font-size: 18px;
        border: 2px solid #82D2F0;
        border-radius: 30px;
        padding: 10px 15px;
        margin: 0 0 45px 0;
        display: inline-block;
      }
      h3{
        font-size: 16px;
        line-height: 17px;
        border-left: 3px solid #82D2F0;
        padding-left: 21px;
        color: #494949;
        margin-bottom: 23px;
        font-weight: 600;
      }
      pre{
        color: #7C7C7C;
        font-size: 14px;
        line-height: 23px;
      }
    }
    .management{
      height: 474px;
      position: relative;
      margin-top: 60px;
      width: 840px;
      padding-top: 88px;
      img{
        height: 460px;
        width: 436px;
        position: absolute;
        left: 570px;
        top: -30px;
      }
      h3{
        font-size: 16px;
        line-height: 17px;
        border-left: 3px solid #82D2F0;
        padding-left: 21px;
        color: #494949;
        margin-bottom: 23px;
        font-weight: 600;
      }
      pre{
        color: #7C7C7C;
        font-size: 14px;
        line-height: 23px;
      }
    }
    .process{
      display: flex;
      align-items: center;
      flex-direction: column;
      div{
        position: relative;
        img{
          height: 525px;
          width: 783px;
          position: relative;
          transform: translateX(-50%);
          left: 50%;
        }
        span{
          position: absolute;
        }
        :nth-child(2){
          top: 87px;
          left: 95px;
        }
        :nth-child(3){
          top: 87px;
          left: 380px;
        }
        :nth-child(4){
          top: 157px;
          left: 532px;
        }
        :nth-child(5){
          top: 302px;
          left: 209px;
          width: 150px;
        }
        :nth-child(6){
          top: 302px;
          left: 466px;
          width: 150px;
        }
        :nth-child(7){
          top: 385px;
          left: 86px;
          width: 150px;
        }
        :nth-child(8){
          top: 520px;
          left: 322px;
        }
      }

    }
  }

</style>
