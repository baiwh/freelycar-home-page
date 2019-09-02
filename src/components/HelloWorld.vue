<template>
  <div class="home">
    <!--首页-->
    <div class="head">
      <div>
        <img src="./../assets/bg1.png" alt="">
        <h1>
          小易智能养车服务
        </h1>
        <h2>
          让您<b>足不出户</b>就能实现爱车养护
        </h2>
        <router-link to="/aboutUs">
          <button>了解小易</button>
        </router-link>
      </div>
    </div>

    <!--开启爱车养护新模式-->
    <div class="love-car title">
      <h5>A New Pattern</h5>
      <h1>开启爱车养护新模式</h1>
      <b></b>

      <img src="./../assets/icon.png" alt="">
      <div>
        <span>小易爱车智能柜</span>
        <span>汽车维修店</span>
        <span>汽车美容院</span>
        <span>汽车4S店</span>
      </div>
      <p>小易爱车运用互联网、物联网、硬件设备等技术、独创智能钥匙柜结合无人值守工位的服务模式，
        在企业、消取内构建车辆服务体系，提供基础养车、服务代办等车辆服务，让智能柜的用户订单与服务有效结合，
        满足车主足不出户高性价的养车用车服务，并逐步向车主个性化综合业务发展。
      </p>
    </div>

    <!--深度赋能-->
    <div class="deep">
      <img class="ipad" src="./../assets/ipad.png" alt="">
      <img class="ipad-320" src="./../assets/ipad2.png" alt="">
      <div>
        <h2>我们是 “商圈营销” 的快速构建者</h2>
        <h1>用互联网为汽车后市场服务深度赋能</h1>
        <p>智能钥匙存取柜终端机+线上服务平台，在车主最需要的地方提供一站式汽车服务，订制业态商圈，独揽流量入口</p>
        <h4><img src="./../assets/blue-circle.png" alt="">真正解决用户“洗车难”和商家服务效率低问题的方案</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">预约服务模式，用户只需按需存取钥匙，大大节省了用户的洗车等待时间</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">极大提升用户的洗车频次，提升服务商家的利益</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">提升停车场物业的服务满意度及形象，增加额外收入</h4>
        <router-link to="/service">
          <button>READ MORE</button>
        </router-link>
      </div>
    </div>

    <!--业务流程-->
    <div class="process title">
      <h5>Business Process Diagram</h5>
      <h1>业务流程介绍</h1>
      <b></b>
      <img src="./../assets/Process.png" alt="">
    </div>

    <!--合作伙伴-->
    <div class="friend title">
      <h5>Cooperation</h5>
      <h1>合作伙伴</h1>
      <b></b>
      <div>
        <img v-for="(item,index) in msg"
             :src="['/static/friendlinks/'+item+'.png']" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: ['suning','beijing','youzheng','zijin',
          'pingan','picc','jinao','weizhen']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home {
    width: 100%;
    overflow: hidden;
    > div {
      transform: translateX(-50%);
      position: relative;
      left: 50%;
    }
  }

  /*手机端css*/
  @media only screen and (max-width: 415px) {
    .head {
      margin-top: 50px;
      height: 237px;
      width: 100%;
      position: relative;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 237px;
      }
      button{
        background: #FFBD02;
        font-size: 9px;
        color: white;
        border: transparent;
        padding: 10px 25px;
        border-radius: 7px;
        top: 139px;
        left: 50%;
        position: absolute;
        transform: translateX(-130px);
      }
      h1,h2{
        position: absolute;
        color: white;
        left: 50%;
        transform: translateX(-130px);
      }
      h1{
        font-size: 18px;
        top: 63px;
      }
      h2{
        font-size: 13px;
        top: 90px;
        b{
          color: #F5BE42;
        }
      }
    }

    .love-car{
      height: 400px;
      width: 100%;
      padding: 49px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 42px;
        width: 276px;
        margin-bottom: 7px;
      }
      div{
        width: 320px;
        display: flex;
        justify-content: space-between;
        font-size: 7px;
        margin-bottom: 37px;
        span{
          display: inline-block;
          width: 70px;
          text-align: center;
          color: #494949;
          font-weight: 600;
        }
      }
      p{
        font-size: 9px;
        color: #7C7C7C;
        margin: 0 15px;
        text-align: center;
        line-height: 20px;
      }
    }

    .deep{
      height: 374px;
      width: 100%;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 374px;
      }
      .ipad{
        display: none;
      }
      div{
        position: absolute;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        left: 50%;
        top: 20px;
        h2{
          color: #C0C1C1;
          font-size: 11px;
          margin-bottom: 8px;
        }
        h1{
          color: #494949;
          font-size: 14px;
        }
        p{
          color: #7C7C7C;
          font-size: 9px;
          margin-bottom: 10px;
          text-align: center;
          line-height: 20px;
          width: 320px;
        }
        h4{
          display: none;
          img{
            display: none;
          }
        }
        button{
          font-size: 9px;
          color: white;
          padding: 7px 15px;
          box-shadow: 0 5px 10px #66D4F4;
          background: #66D4F4;
          border-radius: 40px;
          border: transparent;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
        }
      }
    }

    .process{
      height: 349px;
      width: 100%;
      padding: 37px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 154px;
        width: 291px;
      }
    }

    .friend {
      height: 375px;
      width: 100%;
      padding-top: 29px;
      position: relative;
      transform: translateX(-50%);
      background: url("./../assets/bg2.png");
      background-size: 100% 100%;
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      div {
        height: 200px;
        width: 320px;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        img{
          height: 38px;
          width: 77px;
          margin: 10px;
        }
      }
    }
  }

  /*手机电脑之间*/
  @media screen and (min-width:415px) and (max-width:1240px) {
    .head {
      margin-top: 50px;
      height: 237px;
      width: 100%;
      position: relative;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 237px;
      }
      button{
        background: #FFBD02;
        font-size: 9px;
        color: white;
        border: transparent;
        padding: 10px 25px;
        border-radius: 7px;
        top: 139px;
        left: 50%;
        position: absolute;
        transform: translateX(-130px);
      }
      h1,h2{
        position: absolute;
        color: white;
        left: 50%;
        transform: translateX(-130px);
      }
      h1{
        font-size: 18px;
        top: 63px;
      }
      h2{
        font-size: 13px;
        top: 90px;
        b{
          color: #F5BE42;
        }
      }
    }

    .love-car{
      height: 400px;
      width: 100%;
      padding: 49px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 42px;
        width: 276px;
        margin-bottom: 7px;
      }
      div{
        width: 320px;
        display: flex;
        justify-content: space-between;
        font-size: 7px;
        margin-bottom: 37px;
        span{
          display: inline-block;
          width: 70px;
          text-align: center;
          color: #494949;
          font-weight: 600;
        }
      }
      p{
        font-size: 9px;
        color: #7C7C7C;
        margin: 0 15px;
        text-align: center;
        line-height: 20px;
      }
    }

    .deep{
      height: 374px;
      width: 100%;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 374px;
      }
      .ipad{
        display: none;
      }
      div{
        position: absolute;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        left: 50%;
        top: 20px;
        h2{
          color: #C0C1C1;
          font-size: 11px;
          margin-bottom: 8px;
        }
        h1{
          color: #494949;
          font-size: 14px;
        }
        p{
          color: #7C7C7C;
          font-size: 9px;
          margin-bottom: 10px;
          text-align: center;
          line-height: 20px;
          width: 320px;
        }
        h4{
          display: none;
          img{
            display: none;
          }
        }
        button{
          font-size: 9px;
          color: white;
          padding: 7px 15px;
          box-shadow: 0 5px 10px #66D4F4;
          background: #66D4F4;
          border-radius: 40px;
          border: transparent;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
        }
      }
    }

    .process{
      height: 349px;
      width: 100%;
      padding: 37px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 154px;
        width: 291px;
      }
    }

    .friend {
      height: 375px;
      width: 100%;
      padding-top: 29px;
      position: relative;
      transform: translateX(-50%);
      background: url("./../assets/bg2.png");
      background-size: 100% 100%;
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      div {
        height: 200px;
        width: 320px;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        img{
          height: 38px;
          width: 77px;
          margin: 10px;
        }
      }
    }
  }

  /*电脑端*/
  @media only screen and (min-width: 1241px) {
    .head {
      height: 653px;
      width: 100%;
      position: relative;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 653px;
      }
      button{
        background: #FFBD02;
        font-size: 18px;
        color: white;
        border: transparent;
        padding: 10px 25px;
        border-radius: 7px;
        top: 380px;
        left: 50%;
        position: absolute;
        transform: translateX(-530px);
      }
      h1,h2{
        position: absolute;
        color: white;
        left: 50%;
        transform: translateX(-530px);
      }
      h1{
        font-size: 39px;
        top: 230px;
      }
      h2{
        font-size: 28px;
        top: 300px;
        b{
          color: #F5BE42;
        }
      }
    }

    .love-car{
      height: 711px;
      width: 100%;
      padding: 93px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 134px;
        width: 846px;
        margin-bottom: 23px;
      }
      div{
        width: 930px;
        display: flex;
        justify-content: space-between;
        margin-right: 12px;
        font-size: 16px;
        margin-bottom: 83px;
        span{
          display: inline-block;
          width: 160px;
          text-align: center;
          color: #494949;
          font-weight: 600;
        }
      }
      p{
        width: 800px;
        text-align: center;
        font-size: 14px;
        color: #7C7C7C;
        margin-bottom: 17px;
        line-height: 25px;
      }
    }

    .deep{
      height: 770px;
      width: 100%;
      img{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        height: 770px;
      }
      .ipad-320{
        display: none;
      }
      div{
        position: absolute;
        top: 122px;
        left: 50%;
        h2{
          color: #C0C1C1;
          font-size: 14px;
          margin-bottom: 15px;
        }
        h1{
          color: #494949;
          font-size: 28px;
          margin-bottom: 40px;
        }
        p{
          width: 450px;
          line-height: 30px;
          color: #7C7C7C;
          font-size: 16px;
          margin-bottom: 75px;
        }
        h4{
          color: #7C7C7C;
          font-size: 14px;
          margin-bottom: 15px;
          img{
            width: 18px;
            height: 18px;
            position: relative;
            top: 5px;
            left: 10px;
            margin-right: 15px;
          }
        }
        button{
          font-size: 16px;
          color: white;
          padding: 10px 20px;
          margin: 40px 0 0 0;
          box-shadow: 0 5px 10px #66D4F4;
          background: #66D4F4;
          border-radius: 40px;
          border: transparent;
        }
      }
    }

    .process{
      height: 740px;
      width: 100%;
      padding: 90px 0 0 0;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      img{
        height: 380px;
        width: 820px;
      }
    }

    .friend {
      height: 600px;
      width: 100%;
      padding-top: 90px;
      position: relative;
      transform: translateX(-50%);
      background: url("./../assets/bg2.png");
      background-size: 100% 100%;
      left: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      div {
        height: 60px;
        width: 1240px;
        margin-top: 90px;
        display: flex;
        justify-content: space-around;
        img{
          height: 40px;
          width: 90px;
        }
      }
    }
  }
</style>
