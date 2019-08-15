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


</style>
