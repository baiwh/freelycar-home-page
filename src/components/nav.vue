<template>
  <div class="nav">
    <img src="./../assets/logo.png" alt="">
    <div>
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
        ]
      }
    },
    methods: {
      chooseNavTab(v){
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
</style>
