<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,div,span,h1,h2,h3,h4,h5,h6,img{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 16px;
}
  #app{
    width: 100%;
  }
</style>
