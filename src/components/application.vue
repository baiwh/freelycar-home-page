<template>
  <div class="application">
    <img class="head" src="./../assets/bg-car.png" alt="">

    <div class="title center">
      <h5>Contact Us</h5>
      <h1>联系我们</h1>
      <b></b>
      <div class="map">
        <div>
          <div id="container">ditu</div>
        </div>
        <h3>南京小易信息科技有限公司</h3>
        <h6>地址：南京市玄武区苏宁青创园C栋3层</h6>
        <h6>电话：025-86697165</h6>
        <h6>邮箱：info@freelycar.com</h6>
      </div>
    </div>

    <div class="center form">
      <h1>递交信息  免费获取项目资料</h1>
      <h2>目前已有<span>{{number}}</span>人免费获取加盟方案</h2>
      <input placeholder="姓名" type="text" v-model="name">
      <input placeholder="联系方式" type="text" v-model="phone">
      <!--<input placeholder="区域" type="text" v-model="city">-->
      <el-cascader
        :options="options"
        v-model="selectedOptions"
        @change="handleChange"
      ></el-cascader>
      <button @click="submit">免费咨询</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import citys from './../components/citys.json'
  import { MessageBox } from 'element-ui'
  export default {
    name: 'application',
    data() {
      return {
        msg: '',
        name:'',
        phone:'',
        city:'',
        selectedOptions:'',
        number:null,
        options:citys
      }
    },
    methods:{
      // 地图
      baiduMap(){
        // 初始化及坐标
        var map = new BMap.Map("container");
        var point = new BMap.Point(118.897319,32.096467);
        map.centerAndZoom(point, 15);
        // 控件
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        // 创建标注
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        // 窗口标注
        var opts = {
          width : 200,     // 信息窗口宽度
          height: 50,     // 信息窗口高度
          title : '<h3 style="color:#BC724B">南京小易信息科技有限公司</h3>'  // 信息窗口标题
        }
        var infoWindow = new BMap.InfoWindow("南京市玄武区苏宁青创园C栋3层<br/>025-86697165", opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
      },

      // 选择城市
      handleChange(v) {
        console.log(v);
        let city=''
        // 省
        citys.map(item=>{
          if(item.value===v[0]){
            city = item.label
            // 市
            item.children.map(itemChild=>{
              if(itemChild.value===v[1]){
                city = city + itemChild.label
                // 如果有区
                if(itemChild.children){
                  itemChild.children.map(i=>{
                    if(i.value===v[2]){
                      city = city+i.label
                    }
                  })
                }
              }
            })
          }
        })
        this.city=city
      },

      // 提交
      submit(){
        if(this.name&&this.phone&&this.city){
          axios.post('https://www.freelycar.com/api/webapi/saveInfo',
            {
              name:this.name,
              phone:this.phone,
              city:this.city
            }).then(response => {
            if (response.data.code === 1) {
              this.name = ''
              this.phone = ''
              this.city = ''
              this.selectedOptions = ''
              //成功
              this.number+=1
              MessageBox.alert('信息提交成功')
            } else {
              MessageBox.alert('信息提交失败')
            }
          }, err => {})
        } else {
          //补全信息
          MessageBox.alert('请补全信息')
        }
      },

      // 获取登记人数
      getNumber(){
        axios.get('https://www.freelycar.com/api/webapi/getCount').then(response => {
          if (response.data.code === 1) {
            //成功
            this.number=response.data.data
          } else {
            //失败
          }
        }, err => {})
      }
    },
    mounted(){
      this.baiduMap()
      this.getNumber()
    }
  }
</script>

<style scoped lang="less">
  /*手机端css*/
  /*@media only screen and (max-width: 415px) {*/
  @media only screen and (max-width: 1240px) {
    #container{
      height: 100%;
      width: 100%;
    }
    .application {
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
      .head {
        height: 170px;
      }
    }
    .center{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 90vw;
      padding: 30px 0;
      border-bottom: 1px solid #dcdcdc;
    }
    .map{
      width: 100%;
      >div{
        height: 90vw;
        width: 90vw;
        background: #7ac8f5;
        margin-bottom: 30px;
        float: left;
      }
      h3{
        color: #82D2F0;
        font-size: 12px;
        margin-bottom: 15px;
        text-align: center;
      }
      h6{
        color: #494949;
        font-size: 11px;
        text-align: center;
        line-height: 30px;
      }
    }
    .form{
      h1{
        font-size: 14px;
        color: #494949;
        margin-bottom: 17px;
      }
      h2{
        font-size: 11px;
        color: #494949;
        margin-bottom: 40px;
        span{
          color: #DB0000;
        }
      }
      input,button{
        height: 39px;
        width: 250px;
        margin-bottom: 24px;
        border-radius: 10px;
        border: transparent;
        padding: 0 20px;
        font-size: 12px;
      }
      button{
        height: 39px;
        width: 290px;
        margin-top: 30px;
        border-radius: 10px;
        border: transparent;
        background: #66D4F4;
        color: white;
        box-shadow: 0 3px 10px #66D4F4;
        font-size: 13px;
      }
      :nth-last-child(2),:nth-last-child(3){
        background: #F5FAFA;
      }
      :nth-last-child(4){
        box-shadow: 0 3px 10px #e4e8e8;
      }

    }
  }

  /*手机电脑之间*/
  /*@media screen and (min-width:415px) and (max-width:1240px) {*/
  /*}*/

  /*电脑端*/
  @media only screen and (min-width: 1240px) {
    #container{
      height: 100%;
      width: 100%;
    }
    .application {
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
      .head {
        height: 464px;
      }
    }
    .center{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 1240px;
      padding: 100px 0;
      border-bottom: 1px solid #dcdcdc;
    }
    .map{
      width: 100%;
      >div{
        height: 500px;
        width: 623px;
        background: #7ac8f5;
        margin-right: 150px;
        float: left;
      }
      h3{
        color: #82D2F0;
        font-size: 18px;
        margin-top: 65px;
        margin-bottom: 25px;
      }
      h6{
        color: #494949;
        font-size: 16px;
        line-height: 30px;
      }
    }
    .form{
      h1{
        font-size: 28px;
        color: #494949;
        margin-bottom: 33px;
      }
      h2{
        font-size: 18px;
        color: #494949;
        margin-bottom: 100px;
        span{
          color: #DB0000;
        }
      }
      input,button{
        height: 65px;
        width: 450px;
        margin-bottom: 24px;
        border-radius: 20px;
        border: transparent;
        padding: 0 50px;
        font-size: 18px;
      }
      button{
        height: 65px;
        width: 550px;
        margin-top: 50px;
        border-radius: 20px;
        border: transparent;
        background: #66D4F4;
        color: white;
        box-shadow: 0 3px 10px #66D4F4;
        font-size: 18px;
      }
      :nth-last-child(2),:nth-last-child(3){
        background: #F5FAFA;
      }
      :nth-last-child(4){
        box-shadow: 0 3px 10px #e4e8e8;
      }

    }
  }

</style>
