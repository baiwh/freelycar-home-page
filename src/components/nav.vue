<template>
  <div class="nav">
    <img src="./../assets/logo.png" alt="">
    <div>
      <button
        :class="[msg===item.value?'yellow':'white']"
        @click="chooseNavTab(item.value)"
        v-for="(item,index) in list">{{item.value}}</button>
      <router-link to="/application">
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
    mounted: function () {

    }
  }
</script>

<style scoped lang="less">
  .nav{
    width: 96.4rem;
    height: 11.6rem;
    border-bottom: 1px solid #7AC8F5;
    transform: translateX(-50%);
    position: absolute;
    top:0;
    z-index: 100;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    img{
      height: 3rem;
      width: 21.6rem;
    }
    button{
      margin-left: 6.5rem;
      background: transparent;
      border: transparent;
      font-weight: 700;
    }
    .apply{
      background: #FFBD02;
      color: white;
      padding:1rem 1.6rem;
      border-radius: 10px;
    }
  }
  .yellow{
    color: #F5BE42;
  }
  .white{
    color: #FFFFFF;
  }
</style>
