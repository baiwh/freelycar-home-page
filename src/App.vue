<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

  },
}
</script>

<style lang="less">
  .el-input__inner{
    height: 65px !important;
    width: 550px !important;
    border: transparent !important;
    padding: 0 50px !important;
  }
body,div,span,h1,h2,h3,h4,h5,h6,img{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 500;
}
input:focus{
  outline: none;
}
button:focus{
  outline: none;
}
button{
  cursor: pointer;
}
html{
  font-size: 13px;
}
  #app{
    width: 100%;
  }

.title{
  h5{
    font-size: 14px;
    color: #7C7C7C;
    margin-bottom: 17px;
  }
  h1{
    font-size: 28px;
    color: #494949;
    margin-bottom: 21px;
  }
  b{
    background: #66D4F4;
    height: 4px;
    width: 34px;
    margin-bottom: 62px;
  }
}
</style>
