<template>
  <div class="nav">
    <img class="logo-white" src="./../assets/logo.png" alt="">
    <img class="logo" src="./../assets/logo2.png" alt="">
    <img class="nav-img" src="./../assets/nav.png" @click="showNav" alt="">
    <div :class="[isShowNav?'nav-item show':'nav-item']">
      <button
        :class="[$route.name===item.value?'yellow':'white']"
        @click="chooseNavTab(item.value)"
        v-for="(item,index) in list">
        {{item.value}}
      </button>
      <router-link to="/contact">
        <button class="apply">申请合作</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        list:[
          {
            value:'首页',
            linkTo:'/'
          },{
            value:'关于我们',
            linkTo:'/aboutUs'
          },{
            value:'智能服务',
            linkTo:'/service'
          },{
            value:'商业模式',
            linkTo:'/business'
          }
//          ,{
//            value:'申请合作',
//            linkTo:'/application'
//          },
        ],
        isShowNav:false
      }
    },
    methods: {
      showNav(){
        this.isShowNav = !this.isShowNav
      },

      chooseNavTab(v){
        this.isShowNav = false
        this.list.map(item=>{
          if(item.value===v){
            this.$router.push({path:item.linkTo})
          }
        })
      }
    },
  }
</script>

<style scoped lang="less">
  /*手机端css*/
  @media only screen and (max-width: 415px) {
    .nav{
      background: white;
      width: 320px;
      height: 50px;
      border-bottom: 1px solid #7AC8F5;
      transform: translateX(-50%);
      position: absolute;
      top:0;
      z-index: 100;
      left: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
        display: none;
      }
      .show{
        display: block;
      }
      .nav-item{
        height: 100vh;
        width: 100vw;
        background: white;
        top: 50px;
        opacity: 0.9;
        position: absolute;
        button{
          color: black;
          width: 100%;
          padding: 10px;
          background: transparent;
          border: transparent;
        }
      }
      .nav-img{
        width: 13px;
        height: 10px;
        margin-right: 15px;
      }
      .logo-white{
        display: none;
      }
      .logo{
        height: 15px;
        width: 94px;
        margin-left: 15px;
      }
    }
    .yellow{
      color: #F5BE42;
    }
    .white{
      color: #FFFFFF;
    }
  }

  /*手机电脑之间*/
  @media screen and (min-width:415px) and (max-width:1240px) {
    .nav{
      background: white;
      width: 320px;
      height: 50px;
      border-bottom: 1px solid #7AC8F5;
      transform: translateX(-50%);
      position: absolute;
      top:0;
      z-index: 100;
      left: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
        display: none;
      }
      .show{
        display: block;
      }
      .nav-item{
        height: 100vh;
        width: 100vw;
        background: white;
        top: 50px;
        opacity: 0.9;
        position: absolute;
        button{
          color: black;
          width: 100%;
          padding: 10px;
          background: transparent;
          border: transparent;
        }
      }
      .nav-img{
        width: 13px;
        height: 10px;
        margin-right: 15px;
      }
      .logo-white{
        display: none;
      }
      .logo{
        height: 15px;
        width: 94px;
        margin-left: 15px;
      }
    }
    .yellow{
      color: #F5BE42;
    }
    .white{
      color: #FFFFFF;
    }
  }

  /*电脑端*/
  @media only screen and (min-width: 1240px) {
    .nav{
      width: 1240px;
      height: 70px;
      border-bottom: 1px solid #7AC8F5;
      transform: translateX(-50%);
      position: absolute;
      top:0;
      z-index: 100;
      left: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        height: 30px;
        width: 206px;
      }
      .nav-img{
        display: none;
      }
      .logo{
        display: none;
      }
      button{
        font-size: 14px;
        margin-left: 78px;
        background: transparent;
        border: transparent;
      }
      .apply{
        background: #FFBD02;
        color: white;
        padding:5px 10px;
        border-radius: 5px;
      }
    }
    .yellow{
      color: #F5BE42;
    }
    .white{
      color: #FFFFFF;
    }
  }

</style>
