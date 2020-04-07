<template>
  <div class="show">

    <!--标题-->
    <div class="show-title">
      <span>气温5-14°C 晴</span>
      <div>
        <img class="show-title-logo" src="./../assets/show/logo2.png" alt="">
        <img src="./../assets/show/text.png" alt="">
      </div>
      <span>2020-3-29 11:23</span>
    </div>

    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--下拉框-->
    <div class="show-search">

    </div>

    <!--第一屏-->
    <div v-show="showIndex==='first'" class="show-first">
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

      <div class="show-first-center">
        <div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
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

    <!--第二屏-->
    <div v-show="showIndex==='second'" class="show-second">
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

    <!--第三屏-->
    <div v-show="showIndex==='third'" class="show-third">
      <div class="show-third-left">
        <span class="show-third-left-title">汽车品牌top10</span>
        <div class="show-third-left-item">
          <img src="" alt="">
          <span>福特</span>
          <div></div>
          <span>14%</span>
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
  </div>
</template>

<script>
  export default {
    name: 'show',
    data() {
      return {
        showIndex:'third'
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style scoped lang="less">
  /*公共class*/
  .show{
    background: url('/static/bg.png') no-repeat;
    background-size: 100% 100%;
    height: 1080px;
    width: 1920px;
  }
  .show-card{
    background: url("./../assets/show/bg_02.png") no-repeat;
    background-size: 100% 100%;
    height: 310px;
    width: 460px;
  }
  .show-card-title{
    font-weight: 600;
    font-size: 16px;
    color: #0ef7ff;
    width: 210px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
  }
  .show-title{
    font-size: 25px;
    color: #e2fcff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 25px;
  }
  .show-search{
    background: url("./../assets/show/bg_01.png") no-repeat;
    background-size: 100% 100%;
    width: 336px;
    height: 88px;
    position: absolute;
    top: 103px;
    left: 35px;
  }
  .show-title-logo{
    /*height: 50px;*/
    /*width: 100px;*/
  }

  /*第一页*/
  .show-first{
    display: flex;
    justify-content: space-between;
    padding-left: 75px;
    padding-right: 38px;
    .show-first-left{
      padding-top: 100px;
      div{
        margin-top: 57px;
      }
    }
    .show-first-right{
      div{
        margin-top: 55px;
      }
    }
    .show-card-large{
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
    .show-second-left{
      height: 724px;
      width: 654px;
      background: url("./../assets/show/bg_10.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 160px;
      color: #0ef7ff;
      font-size: 24px;
      padding: 40px 0;
      div{
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("./../assets/show/bg_09.png") no-repeat;
        background-position-x: 360px;
        span{
          font-size: 36px;
          line-height: 36px;
          margin: 0 10px 0 30px;
        }
      }
    }
    .show-second-right{
      width: 1076px;
      margin-right: 130px;
      padding-top: 90px;
      .show-second-top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
      }
      .show-second-bottom{
        height: 475px;
        width: 1080px;
        background: url("./../assets/show/bg_11.png") no-repeat;
        background-size: 100% 100%;
        .show-second-bottom-title{
          color: #0ef7ff;
          font-size: 16px;
          font-weight: 600;
          line-height: 50px;
          margin-left: 80px;
        }
        .show-second-bottom-box{
          display: flex;
          justify-content: space-between;
        }
        .show-second-bottom-card{
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
    }
    .show-third-right{
      width: 1500px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 160px;
      .show-card{
        margin-right: 23px;
        margin-bottom: 70px;
      }
    }
  }

</style>
