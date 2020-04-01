<template>
  <div>
    <navigation></navigation>
    <router-view/>
    <bottom-nav></bottom-nav>
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
