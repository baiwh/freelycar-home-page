<template>
  <div class="show">

    <!--标题-->
    <div class="show-title">
      <span>气温5-14°C 晴</span>
      <div>
        <img class="show-title-logo" src="./../assets/show/logo2.png" alt="">
        <img class="show-title-text" src="./../assets/show/text.png" alt="">
      </div>
      <span>2020-3-29 11:23</span>
    </div>

    <!--下拉框-->
    <div class="show-search">
      <div class="show-search-box">
        <span>南京</span>
        <div class="show-search-arrow"></div>
      </div>
    </div>

    <el-carousel height="980px" interval="3000000">

      <!--第一屏-->
      <el-carousel-item>
        <div class="show-first">
          <div class="show-first-left">
            <div class="show-card">
              <span class="show-card-title">智能柜总台数</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">使用用户数和注册用户数</span>
              <div class="show-card-echarts"></div>
            </div>
          </div>

          <div class="show-first-car">
            <div class="show-first-car-item" :key="index"
                 v-for="(item,index) in projectRanking">
              <span>{{item.name}}</span>
              <span>{{item.count}}</span>
            </div>
          </div>

          <div class="show-first-project">
            <span>服务项目排名</span>
            <div></div>
            <div></div>
          </div>

          <div class="show-first-right">
            <div class="show-card">
              <span class="show-card-title">智能柜总覆盖用户数</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card-large">
              <span class="show-card-title">业务量和业绩量</span>
              <!--前三名-->
              <div>

              </div>
              <div class="show-card-echarts"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <!--第二屏-->
      <el-carousel-item>
        <div class="show-second">
          <div class="show-second-left">
            <div>用户平均每月消费数
              <span>1872</span>元/月
            </div>
          </div>
          <div class="show-second-right">
            <div class="show-second-top">
              <div class="show-card">
                <span class="show-card-title">用户数增长量和总注册用户数</span>
                <div class="show-card-echarts"></div>
              </div>
              <div class="show-card">
                <span class="show-card-title">用户平均使用频次</span>
                <div class="show-card-echarts"></div>
              </div>
            </div>
            <div class="show-second-bottom">
              <span class="show-second-bottom-title">用户转化率</span>
              <div class="show-second-bottom-box">
                <div class="show-second-bottom-card">
                  <span class="show-card-title">新用户转化率</span>
                  <div class="show-card-echarts"></div>
                </div>
                <div class="show-second-bottom-card">
                  <span class="show-card-title">总用户转化率</span>
                  <div class="show-card-echarts"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <!--第三屏-->
      <el-carousel-item>
        <div class="show-third">
          <div class="show-third-left">
            <span class="show-third-left-title">汽车品牌top10</span>
            <!--列表-->
            <div class="show-third-left-box">
              <div class="show-third-left-item">
                <img src="" alt="">
                <span>福特</span>
                <div></div>
                <span>14%</span>
              </div>
            </div>

          </div>
          <div class="show-third-right">
            <div class="show-card">
              <span class="show-card-title">按消费次数排名</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">按消费金额排名</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">车龄统计</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">用户增长率排名</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">品牌用户复购率排名</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">用户车辆价值</span>
              <div class="show-card-echarts"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>

    </el-carousel>


  </div>
</template>

<script>
  export default {
    name: 'show',
    data() {
      return {
        projectRanking:[
          {
            name:'美容',
            count:36
          },{
            name:'保养',
            count:215
          },{
            name:'检测',
            count:123
          },{
            name:'其他',
            count:239
          },{
            name:'维修',
            count:236
          },{
            name:'精洗',
            count:156
          },
        ]
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style scoped lang="less">
  /*公共class*/
  .show {
    background: url('/static/bg.png') no-repeat;
    background-size: 100% 100%;
    height: 1080px;
    width: 1920px;
  }

  .show-card {
    background: url("./../assets/show/bg_02.png") no-repeat;
    background-size: 100% 100%;
    height: 310px;
    width: 460px;
  }

  .show-card-title {
    font-weight: 600;
    font-size: 16px;
    color: #0ef7ff;
    width: 210px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
  }

  .show-title {
    font-size: 25px;
    color: #e2fcff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 25px;
    .show-title-logo {
      height: 50px;
      width: 90px;
    }
    .show-title-text{
      width: 350px;
      height: 40px;
      margin-right: 165px;
    }
  }

  .show-search {
    background: url("./../assets/show/bg_01.png") no-repeat;
    background-size: 100% 100%;
    width: 336px;
    height: 88px;
    position: absolute;
    top: 103px;
    left: 35px;
    font-size: 16px;
    color: #0ef7ff;
    padding: 22px 0 0 16px;
    .show-search-box{
      height: 33px;
      width: 298px;
      border: #0ef7ff solid 1px;
      line-height: 30px;
      padding-left: 21px;
    }
    .show-search-arrow{
      border-top: #0ef7ff solid 6px;
      width: 0;
      height: 0;
      border-left: transparent solid 6px;
      border-right: transparent solid 6px;
      border-bottom: transparent solid 6px;
      position: absolute;
      top: 36px;
      right: 38px;
    }
  }



  /*第一页*/
  .show-first {
    display: flex;
    justify-content: space-between;
    padding-right: 38px;
    position: relative;
    .show-first-left {
      padding-top: 100px;
      margin-left: 35px;
      div {
        margin-top: 57px;
      }
    }
    .show-first-car{
      background: url("./../assets/show/bg_12.png") no-repeat;
      height: 677px;
      width: 1031px;
      position: absolute;
      left: 340px;
      top: 150px;
      .show-first-car-item{
        height: 106px;
        width: 117px;
        background: url("./../assets/show/bg_03.png") no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        position: absolute;
        span{
          color: #0ef7ff;
          font-size: 16px;
        }
      }
      .show-first-car-item::before{
        content: url("./../assets/show/bg_05.png");
        position: absolute;
        top: 92px;
      }
      .show-first-car-item::after{
        content: '';
        border-left: #0ef7ff solid 1px;
        position: absolute;
        top: 110px;
      }
      :nth-child(1){
        left: 203px;
        top: 250px;
      }
      :nth-child(1)::after{
        height: 60px;
      }
      :nth-child(2){
        left: 307px;
        top: 93px;
      }
      :nth-child(2)::after{
        height: 230px;
      }
      :nth-child(3){
        left: 430px;
        top: 150px;
      }
      :nth-child(3)::after{
        height: 80px;
      }
      :nth-child(4){
        left: 555px;
        top: 195px;
      }
      :nth-child(4)::after{
        height: 80px;
      }
      :nth-child(5){
        left: 618px;
        top: 37px;
      }
      :nth-child(5)::after{
        height: 290px;
      }
      :nth-child(6){
        left: 720px;
        top: 220px;
      }
      :nth-child(6)::after{
        height: 80px;
      }
    }
    .show-first-project{
      background: url("./../assets/show/bg_04.png") no-repeat;
      height: 371px;
      width: 221px;
      position: absolute;
      left: 1180px;
      top: 250px;
      span{
        color: white;
        font-size: 18px;
        position: absolute;
        top: -30px;
        font-weight: 600;
      }
    }
    .show-first-right {
      div {
        margin-top: 55px;
      }
    }
    .show-card-large {
      background: url("./../assets/show/bg_06.png") no-repeat;
      background-size: 100% 100%;
      height: 510px;
      width: 460px;
    }
  }

  /*第二页*/
  .show-second {
    display: flex;
    justify-content: space-between;
    .show-second-left {
      height: 724px;
      width: 654px;
      background: url("./../assets/show/bg_10.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 160px;
      color: #0ef7ff;
      font-size: 24px;
      padding: 40px 0;
      div {
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("./../assets/show/bg_09.png") no-repeat;
        background-position-x: 360px;
        span {
          font-size: 36px;
          line-height: 36px;
          margin: 0 10px 0 30px;
        }
      }
    }
    .show-second-right {
      width: 1076px;
      margin-right: 130px;
      padding-top: 90px;
      .show-second-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
      }
      .show-second-bottom {
        height: 475px;
        width: 1080px;
        background: url("./../assets/show/bg_11.png") no-repeat;
        background-size: 100% 100%;
        .show-second-bottom-title {
          color: #0ef7ff;
          font-size: 16px;
          font-weight: 600;
          line-height: 50px;
          margin-left: 80px;
        }
        .show-second-bottom-box {
          display: flex;
          justify-content: space-between;
        }
        .show-second-bottom-card {
          height: 408px;
          width: 540px;
          padding-top: 25px;
        }
      }
    }
  }

  /*第三页*/
  .show-third {
    display: flex;
    justify-content: space-between;
    .show-third-left {
      width: 338px;
      height: 768px;
      margin-left: 35px;
      background: url("./../assets/show/bg_07.png") no-repeat;
      margin-top: 130px;
      padding-left: 3px;
      border-bottom: rgb(65, 122, 159) solid 2px;
      .show-third-left-title {
        font-size: 16px;
        color: #0ef7ff;
        line-height: 50px;
        padding-left: 95px;
        font-weight: 600;
      }
      .show-third-left-box {
        background: rgba(65, 122, 159, 0.3);
        height: 700px;
        margin-top: 13px;
        margin-bottom: 10px;
      }
      .show-third-left-item {
        height: 70px;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: rgba(65, 122, 159, 0.3) solid 1px;
        margin: 0 12px;
        img {
          width: 50px;
        }
        span {
          margin-right: 13px;
        }
      }
    }
    .show-third-right {
      width: 1500px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 160px;
      .show-card {
        margin-right: 23px;
        margin-bottom: 70px;
      }
    }
  }

</style>
