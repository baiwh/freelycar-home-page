<template>
  <div class="application">
    <img class="head" src="./../assets/bg-car.png" alt="">

    <div class="title center">
      <h5>Contact Us</h5>
      <h1>联系我们</h1>
      <b></b>
      <div class="map">
        <div>ditu</div>
        <h3>南京小易信息科技有限公司</h3>
        <h6>地址：南京市玄武区苏宁青创园C栋3层</h6>
        <h6>邮箱：info@freelycar.com</h6>
      </div>
    </div>

    <div class="center form">
      <h1>递交信息  免费获取项目资料</h1>
      <h2>目前已有<span>1</span>人免费获取加盟方案</h2>
      <hr>
      <input placeholder="姓名" type="text" v-model="name">
      <input placeholder="联系方式" type="text" v-model="phone">
      <input placeholder="区域" type="text" v-model="where">
      <button>免费咨询</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'application',
    data() {
      return {
        msg: '',
        name:'',
        phone:'',
        where:''
      }
    }
  }
</script>

<style scoped lang="less">
  .application {
    width: 1240px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    .head {
      height: 464px;
      width: 99vw;
    }
  }
  .center{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1240px;
    padding: 100px 0;
    border-bottom: 1px solid #dcdcdc;
  }
  .map{
    width: 100%;
    >div{
      height: 500px;
      width: 623px;
      background: #7ac8f5;
      margin-right: 150px;
      float: left;
    }
    h3{
      color: #82D2F0;
      font-size: 18px;
      margin-top: 65px;
      margin-bottom: 25px;
    }
    h6{
      color: #494949;
      font-size: 16px;
      line-height: 30px;
    }
  }
  .form{
    h1{
      font-size: 28px;
      color: #494949;
      margin-bottom: 33px;
    }
    h2{
      font-size: 18px;
      color: #494949;
      margin-bottom: 100px;
      span{
        color: #DB0000;
      }
    }
    input,button{
      height: 65px;
      width: 450px;
      margin-bottom: 24px;
      border-radius: 20px;
      border: transparent;
      padding: 0 50px;
      font-size: 18px;
    }
    button{
      height: 65px;
      width: 550px;
      margin-top: 10px;
      border-radius: 20px;
      border: transparent;
      background: #66D4F4;
      color: white;
      box-shadow: 0 3px 10px #66D4F4;
      font-size: 18px;
    }
    :nth-last-child(2),:nth-last-child(3){
      background: #F5FAFA;
    }
    :nth-last-child(4){
      box-shadow: 0 3px 10px #e4e8e8;
    }

  }
</style>
