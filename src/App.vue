<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <div class="footer">
      <hr>
      <div>
        <img src="./assets/logo2.png" alt="">
        <span
          @click="chooseNavTab(item.value)"
          v-for="(item,index) in list">{{item.value}}</span>
        <span class="apply">申请合作</span>
      </div>
      <div class="little">
        <b>公司简介</b>
        <b>智能柜服务</b>
        <b>爱车解决方案</b>
        <b>联系小易</b>
      </div>
      <div class="call-us">
        <b>联系电话：025-86697165</b>
        <b>咨询邮箱：info@freelycar.com</b>
        <b>地址：南京市玄武区徐庄软件园苏宁青创园C栋3楼</b>
      </div>
      <div class="beian">
        <span>© Copyright 2017</span>
        <span>All rights reserved</span>
        <span>© 2017 Copyright 南京小易信息科技有限公司 版权所有 苏ICP备13061134号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '首页',
      list:[
        {
          value:'首页',
          linkTo:'/'
        },{
          value:'关于我们',
          linkTo:'/aboutUs'
        },{
          value:'智能服务',
          linkTo:'/ark'
        },{
          value:'商业模式',
          linkTo:'/model'
        }
//          ,{
//            value:'申请合作',
//            linkTo:'/application'
//          },
      ]
    }
  },
  methods: {
    chooseNavTab(v){
      this.msg = v
      this.list.map(item=>{
        if(item.value===v){
          this.$router.push({path:item.linkTo})
        }
      })
    }
  },
}
</script>

<style lang="less">
body,div,span,h1,h2,h3,h4,h5,h6,img{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 13px;
}
  #app{
    width: 100%;
  }
  .footer{
    height: 52.1rem;
    width: 101.6rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 8.19rem 0 0 0;
    hr{
      margin-bottom: 4.38rem;
    }
    div{
      display: flex;
      justify-content: space-around;
      span{
        font-size: 1.7rem;
        color: #494949;
        font-weight: 700;
      }
    }
    .call-us{
      margin-top: 12rem;
      border-top: 1px solid #E8E8E8;
      border-bottom: 1px solid #E8E8E8;
      margin-bottom: 3.31rem;
      padding: 1.75rem 0;
      b{
        color: #284BB6;
        font-size: 1.56rem;
      }
    }
    .little{
      padding-left: 47rem;
      padding-right: 5rem;
      justify-content: space-between;
      b{
        color: #7C7C7C;
        font-size: 1.22rem;
      }
    }
    .beian span{
      font-size: 1rem;
      color: #D1D1D1;
    }
  }

</style>
