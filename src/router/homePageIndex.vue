<template>
  <div>
    <top-bar></top-bar>
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  export default {
    name: 'homePageIndex',
    data() {
      return {
        msg: ''
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style scoped lang="less">

</style>
