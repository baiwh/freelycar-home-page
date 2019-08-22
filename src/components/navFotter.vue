<template>
  <div class="footer">
    <div class="call-us">
      <div @click="chooseNavTab(item.value)"
           v-for="(item,index) in list">
        <button>{{item.value}}</button>
        <span v-show="item.value!=='申请合作'"> | </span>
      </div>
    </div>
    <div class="beian">
      <span>© 2017 Copyright 南京小易信息科技有限公司 版权所有 <a href="http://www.beian.miit.gov.cn">苏ICP备13061134号-1</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navFotter',
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
            linkTo:'/ark'
          },{
            value:'商业模式',
            linkTo:'/model'
          }
         ,{
           value:'申请合作',
           linkTo:'/application'
         },
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
        window.scroll(0,0)
      }
    },
  }
</script>

<style scoped lang="less">
  .footer{
    height: 200px;
    width: 1240px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 30px;
    div{
      display: flex;
      justify-content: space-around;
    }
    .call-us{
      margin-bottom: 30px;
      padding: 30px 300px;
      span{
        color: #7A7A7A;
        font-size: 14px;
        margin-left: 30px;
      }
      button{
        color: #7A7A7A;
        font-size: 14px;
        background: transparent;
        border: transparent;
      }
    }
    .little{
      b{
        color: #7C7C7C;
        font-size: 12px;
      }
    }
    .beian span,a{
      font-size: 12px;
      color: #D1D1D1;
    }
  }

</style>
