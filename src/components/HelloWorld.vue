<template>
  <div class="home">
    <!--首页-->
    <div class="head">
      <div>
        <h1>小易智能柜养车服务</h1>
        <h2>让您<span>足不出户</span>就能实现爱车养护</h2>
        <img class="phone1" src="./../assets/phone1.png" alt="">
        <router-link to="/aboutUs">
          <button>了解小易</button>
        </router-link>

      </div>
      <img class="phone2" src="./../assets/phone2.png" alt="">

      <img class="car" src="./../assets/car.png" alt="">
    </div>

    <!--开启爱车养护新模式-->
    <div class="love-car">
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
      <h5>小易爱车运用互联网、物联网、硬件设备等技术、独创智能钥匙柜结合无人值守工位的服务模式，</h5>
      <h5>在企业、消取内构建车辆服务体系，提供基础养车、服务代办等车辆服务，让智能柜的用户订单与服务有效结合，</h5>
      <h5>满足车主足不出户高性价的养车用车服务，并逐步向车主个性化综合业务发展。</h5>
    </div>

    <!--深度赋能-->
    <div class="deep">
      <img src="./../assets/ipad.png" alt="">
      <div>
        <h2>我们是 “商圈营销” 的快速构建者</h2>
        <h1>用互联网为汽车后市场服务深度赋能</h1>
        <h3>智能钥匙存取柜终端机+线上服务平台，在车主最需要的地方</h3>
        <h5>提供一站式汽车服务，订制业态商圈，独揽流量入口</h5>
        <h4><img src="./../assets/blue-circle.png" alt="">真正解决用户“洗车难”和商家服务效率低问题的方案</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">预约服务模式，用户只需按需存取钥匙，大大节省了用户的洗车等待时间</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">极大提升用户的洗车频次，提升服务商家的利益</h4>
        <h4><img src="./../assets/blue-circle.png" alt="">提升停车场物业的服务满意度及形象，增加额外收入</h4>
        <router-link to="/ark">
          <button>READ MORE</button>
        </router-link>
      </div>
    </div>

    <!--业务流程-->
    <div class="process">
      <h5>Business Process Diagram</h5>
      <h1>业务流程介绍</h1>
      <b></b>
      <img src="./../assets/Process.png" alt="">
    </div>

    <!--合作伙伴-->
    <div class="friend">
      <h5>Cooperation</h5>
      <h1>合作伙伴</h1>
      <b></b>
      <img src="./../assets/other-logo.png" alt="">
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
    height: 82.38rem;
    width: 100%;
    background: url("./../assets/bg1.png");
    background-size: 100% 100%;
    div{
      width: 96.3rem;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
    }
    h1{
      color: #FFFEFE;
      font-size: 4.3rem;
      top: 32.8rem;
      position: absolute;
    }
    h2{
      color: #FFFEFE;
      font-size: 3.5rem;
      position: absolute;
      top: 40rem;
      span{
        color: #F5BE42;
      }
    }
    button{
      position: absolute;
      top: 50.6rem;
      font-size: 1.9rem;
      background: #FFBD02;
      border-radius: 10px;
      color: white;
      padding:1.5rem 4rem;
      border: transparent;
    }
  }

  .phone2{
    position: absolute;
    left: 0;
    top: 38rem;
    height: 30rem;
    width: 21rem;
  }
  .phone1{
    position: absolute;
    top: 25rem;
    left: 60rem;
    height: 55rem;
    width: 35rem;
  }
  .car{
    position: absolute;
    right: 0;
    top: 32rem;
    height: 30rem;
    width: 15rem;
  }

  .love-car{
    height: 73.3rem;
    width: 90rem;
    padding: 7.5rem 0 10.7rem 0;
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    b{
      background: #66D4F4;
      height: 0.25rem;
      width: 2.7rem;
      margin: 1.75rem 0;
    }
    h5{
      font-size: 1.5rem;
      color: #7C7C7C;
      margin: 1.3rem;
    }
    h1{
      font-size: 2rem;
      color: #494949;
    }
    img{
      height: 12rem;
      width: 81.3rem;
      margin-top: 7.1rem;
      margin-bottom: 2.6rem;
    }
    div{
      width: 103rem;
      display: flex;
      justify-content: space-around;
      color: #494949;
      font-size: 1.56rem;
      margin-bottom: 8.8rem;
      margin-right: 5rem;
    }
  }

  .deep{
    height: 67.69rem;
    background: url("./../assets/bg.png");
    background-size: 100% 100%;
    img{
      height: 61rem;
      width: 60rem;
      position: absolute;
      top: 10.1rem;
      left: 0;
    }
    div{
      position: absolute;
      top: 11.8rem;
      left: 50%;
      h2{
        color: #C0C1C1;
        font-size: 1.9rem;
        margin-bottom: 1.88rem;
      }
      h1{
        color: #494949;
        font-size: 2.78rem;
        margin-bottom: 2.75rem;
      }
      h3{
        color: #7C7C7C;
        font-size: 1.74rem;
        margin-bottom: 1.3rem;
      }
      h5{
        color: #7C7C7C;
        font-size: 1.74rem;
        margin-bottom: 5rem;
      }
      h4{
        color: #7C7C7C;
        font-size: 1.39rem;
        margin-bottom: 1.54rem;
        img{
          width: 1.75rem;
          height: 1.75rem;
          position: relative;
          top: 0.5rem;
          left: 0;
          margin-right: 1.8rem;
        }
      }
      button{
        font-size: 1.3rem;
        color: white;
        padding: 1rem 1.5rem;
        margin: 2rem 0 0 2rem;
        box-shadow: 0 0.5rem 1rem #66D4F4;
        background: #66D4F4;
        border-radius: 3rem;
        border: transparent;
      }
    }
  }

  .process{
    height: 72rem;
    width: 90rem;
    padding: 12rem 0 12rem 0;
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    b{
      background: #66D4F4;
      height: 0.25rem;
      width: 2.7rem;
      margin-bottom: 5.5rem;
    }
    h5{
      font-size: 1.5rem;
      color: #7C7C7C;
      margin-bottom: 1rem;
    }
    h1{
      font-size: 2rem;
      color: #494949;
      margin-bottom: 1.75rem;
    }
    img{
      height: 37.8rem;
      width: 81.6rem;
    }
  }

  .friend {
    height: 58rem;
    width: 100%;
    padding: 12rem 0 12rem 0;
    position: relative;
    transform: translateX(-50%);
    background: url("./../assets/bg2.png");
    background-size: 100% 100%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    b {
      background: #66D4F4;
      height: 0.25rem;
      width: 2.7rem;
      margin-bottom: 10.5rem;
    }
    h5 {
      font-size: 1.5rem;
      color: #7C7C7C;
      margin-bottom: 1.6rem;
    }
    h1 {
      font-size: 2rem;
      color: #494949;
      margin-bottom: 1.75rem;
    }
    img {
      height: 2.9rem;
      width: 102rem;
    }
  }

</style>
