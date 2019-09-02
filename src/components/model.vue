<template>
  <div class="model">
    <img class="head" src="./../assets/bg-car.png" alt="">
    <h2>“丰巢快递柜 + 美团外卖”的新养车模式</h2>
    <div class="model-img">
      <div>
        <h6>平台：小易爱车</h6>
        <p>铺设智能钥匙柜</p>
        <p>整合及建设洗车工位</p>
      </div>
      <img src="./../assets/model.png" alt="">
      <div>
        <h6>用户：车主</h6>
        <p>预约下单，放车钥匙</p>
        <p>足不出户0耗时</p>
      </div>
      <div>
        <h6>服务：技师</h6>
        <p>计件服务，一对多点</p>
        <p>平均收入40元/小时</p>
      </div>
    </div>
    <p class="model-info">小易智能柜的出现是真正解决了用户“洗车难”和商家洗车效率低问题的方案。
      小易智能柜对接的是基于标准汽车清洗流程的线下门店，不会存在类似上门洗车的
      清洗清洁度问题。
      <br>对用户而言，用户只要下班后把钥匙交给智能柜，
      第二天早上取车就能拿到洗好的车辆，大大节省了用户的洗车等待时间。
      <br>对商家而言，极大提升用户的洗车频次，提升服务商家的利益，
      同时节约人力成本。商家的服务模式也可以轻量化，因为服务时间便于统计，
      完全可以采用对应的兼职或夜间专职服务人员，集中服务。
      使人力成本真正与业务量挂钩，节省单店成本。
      <br>而对于服务人员来说，工作时间可控，即便在早期单店的业务量不够的情况下，
      仍可选择一人服务多个门店的模式维持收入（基于夜间用户对用车时间的弹性，
      普通洗车店无法做到），获得远比普通洗车店员工高额的收入。
    </p>

    <div class="title">
      <h5>Cooperation & Strategic Planning</h5>
      <h1>战略合作规划</h1>
      <b></b>
      <div :class="[item.year==='2020'?'time-line border-dotted':'time-line border-solid']"
           v-for="(item,index) in msg">
        <img src="./../assets/blue-circle.png" alt="">
        <span class="year">{{item.year}}年</span>
        <h3>发展策略</h3>
        <p>{{item.title1}}</p>
        <h3>业务拓展</h3>
        <p v-for="(items,indexs) in item.title2">{{items}}</p>
        <h3>用户数量<span class="big">{{item.user}}</span>万</h3>
        <h3>智能钥匙柜<span class="big">{{item.ark}}</span>台</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'model',
    data() {
      return {
        msg: [
          {
            year:'2018',
            title1:'试点足不出户养车服务方案',
            title2:['服务运营，方案提供'],
            user:'2',
            ark:'5'
          },{
            year:'2019',
            title1:'打造丰巢模式的汽车服务方案商',
            title2:['服务运营，方案提供','服务导流、大屏广告'],
            user:'>10',
            ark:'600'
          },{
            year:'2020',
            title1:'打造外卖模式的汽车服务导流平台',
            title2:['服务运营，方案提供','服务导流、大屏广告','金融、电商'],
            user:'>100',
            ark:'6000'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  /*手机端css*/
  @media only screen and (max-width: 415px) {

  }

  /*手机电脑之间*/
  @media screen and (min-width:415px) and (max-width:1240px) {

  }

  /*电脑端*/
  @media only screen and (min-width: 1240px) {

  }
  .model{
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
    }
    .model-info{
      font-size: 14px;
      width: 1240px;
      line-height: 30px;
      color: #818181;
      margin-bottom: 140px;
      padding: 0 130px;
    }
    h2{
      color: #82D2F0;
      font-size: 28px;
      margin: 130px 0 80px 0;
    }
  }
  .model-img{
    position: relative;
    width: 100%;
    margin-bottom: 110px;
    img{
      height: 570px;
      width: 650px;
    }
    h6{
      font-size: 18px;
      margin-bottom: 30px;
    }
    p{
      color: #7C7C7C;
      font-size: 14px;
      line-height: 10px;
    }
    >:nth-child(3){
      position: absolute;
      left: 180px;
      top: 400px;
    }
    >:nth-child(4){
      position: absolute;
      left: 960px;
      top: 400px;
    }
  }
  .border-solid{
    border-left: 4px solid #66D4F4;
  }
  .border-dotted{
    border-left: 4px dotted #66D4F4;
  }
  .time-line{
    width: 380px;
    height: 450px;
    padding-left: 160px;
    position: relative;
    :nth-child(5),:nth-last-child(1),:nth-last-child(2){
      margin-top: 30px;
    }
    img{
      height: 30px;
      width: 30px;
      position: absolute;
      left: -17px;
      top: -8px;
    }
    span{
      font-size: 20px;
      color: #66D4F4;
    }
    h3{
      font-size: 18px;
      width: 300px;
    }
    p{
      font-size: 14px;
      color: #7C7C7C;
      width: 300px;
    }
    .year{
      position: absolute;
      left: -100px;
      top: -7px;
    }
    .big{
      font-size: 35px;
      margin: 0 10px;
    }
  }
</style>
