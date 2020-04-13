<template>
  <div class="show">

    <!--标题-->
    <div class="show-title">
      <span>气温5-14°C 晴</span>
      <div>
        <img class="show-title-logo" src="./../assets/show/logo2.png" alt="">
        <img class="show-title-text" src="./../assets/show/text.png" alt="">
      </div>
      <span>2020-3-29 11:23</span>
    </div>

    <!--下拉框-->
    <div class="show-search">
      <div class="show-search-box">
        <span>南京</span>
        <div class="show-search-arrow"></div>
      </div>
    </div>

    <el-carousel height="980px" :interval="30000000">

      <!--第一屏-->
      <el-carousel-item>
        <div class="show-first">
          <div class="show-first-left">
            <div class="show-card">
              <span class="show-card-title">智能柜总台数</span>
              <div class="show-card-echarts" id="ark"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">使用用户数和注册用户数</span>
              <div class="show-card-echarts" id="activeUser"></div>
            </div>
          </div>

          <div class="show-first-car">
            <div class="show-first-car-item" :key="index"
                 v-for="(item,index) in projectRanking">
              <span>{{item.name}}</span>
              <span>{{item.value}}</span>
            </div>
          </div>

          <div class="show-first-project">
            <span>服务项目排名</span>
            <div id="projectTypeSumList"></div>
          </div>

          <div class="show-first-right">
            <div class="show-card">
              <span class="show-card-title">智能柜总覆盖用户数</span>
              <div class="show-card-echarts" id="user"></div>
            </div>
            <div class="show-card-large">
              <span class="show-card-title">业务量和业绩量</span>
              <!--前三名-->
              <div class="top-store">
                <div v-for="(item,index) in topStore" class="top-store-box">
                  <img src="./../assets/show/bg_08.png" class="top-store-icon" alt="">
                  <span class="top-store-index">NO.{{index+1}}</span>
                  <img src="./../assets/show/logo2.png" class="store-img" alt="">
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="show-card-echarts" id="storeRanking"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <!--第二屏-->
      <el-carousel-item>
        <div class="show-second">
          <div class="show-second-left">
            <div>用户平均每月消费数
              <span>{{averageConsumption}}</span>元/月
            </div>
          </div>
          <div class="show-second-right">
            <div class="show-second-top">
              <div class="show-card">
                <span class="show-card-title">用户数增长量和总注册用户数</span>
                <div class="show-card-echarts" id="userSum"></div>
              </div>
              <div class="show-card">
                <span class="show-card-title">用户平均使用频次</span>
                <div class="show-card-echarts" id="averageUsage"></div>
              </div>
            </div>
            <div class="show-second-bottom">
              <span class="show-second-bottom-title">用户转化率</span>
              <div class="show-second-bottom-box">
                <div class="show-second-bottom-card">
                  <span class="show-card-title">新用户转化率</span>
                  <div class="show-card-echarts" id="newUserLeft"></div>
                </div>
                <div class="show-second-bottom-card">
                  <span class="show-card-title">总用户转化率</span>
                  <div class="show-card-echarts" id="newUserRight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <!--第三屏-->
      <el-carousel-item>
        <div class="show-third">
          <div class="show-third-left">
            <span class="show-third-left-title">汽车品牌top10</span>
            <!--列表-->
            <div class="show-third-left-box">
              <div class="show-third-left-item" v-for="(item,index) in topCarBrandByUser">
                <img :src="'/static/images/'+item.name+'.jpg'" alt="">
                <!--<img src="/static/images/" alt="">-->
                <span>{{item.name}}</span>
                <div :style="'width:'+ 150*(item.value/topCarBrandByUser[0].value) +'px'"></div>
                <span>{{item.value*100}}%</span>
              </div>
            </div>

          </div>
          <div class="show-third-right">
            <div class="show-card">
              <span class="show-card-title">按消费次数排名</span>
              <div class="show-card-echarts" id="topCarBrandByConsumptionTime"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">按消费金额排名</span>
              <div class="show-card-echarts" id="topCarBrandByAverageConsumption"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">车龄统计</span>
              <div class="show-card-echarts"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">用户增长率排名</span>
              <div class="show-card-echarts" id="topCarBrandByUserIncrement"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">品牌用户复购率排名</span>
              <div class="show-card-echarts" id="topCarBrandByRepeatUse"></div>
            </div>
            <div class="show-card">
              <span class="show-card-title">用户车辆价值</span>
              <div class="show-card-echarts"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>

    </el-carousel>


  </div>
</template>
<!--用户中汽车品牌top10   topCarBrandByUser-->

<script>
  const echarts = require('echarts')
  import {Loading} from 'element-ui'

  let ws = {}
  export default {
    name: 'show',
    data() {
      return {
        projectRanking: [],
        loading: true,
        averageConsumption: '',
        topStore: [
          {
            img: '',
            name: 'a'
          }, {
            img: '',
            name: 'b'
          }, {
            img: '',
            name: 'c'
          }
        ],
        topCarBrandByUser: [],
        testInfo: {
          "projectTypeSumList": [
            {
              "美容": 396
            }, {
              "测试": 244
            }, {
              "保养": 234
            }, {
              "汽车检测": 209
            }, {
              "汽车精修": 183
            }, {
              "维修": 1
            }],
          "activeUser": [
            {
              "2019-05": 0
            }, {
              "2019-06": 0
            }, {
              "2019-07": 0
            }, {
              "2019-08": 17
            }, {
              "2019-09": 15
            }, {
              "2019-10": 7
            }, {
              "2019-11": 21
            }, {
              "2019-12": 61
            }, {
              "2020-01": 4
            }, {
              "2020-02": 2
            }, {
              "2020-03": 6
            }, {
              "2020-04": 0
            }],
          "storeRanking": [
            {
              "count": 282,
              "name": "徐庄研发三区店",
              "sum": 8704.10
            }, {
              "count": 195,
              "name": "青创演示门店",
              "sum": 480.72
            }, {
              "count": 78,
              "name": "紫金嘉悦",
              "sum": 6418.0
            }],
          "topCarBrandByAverageConsumption": [
            {
              "别克": 448.81
            }, {
              "奥迪": 227.08
            }, {
              "宝骏": 42.52
            }, {
              "宝马": 34.61
            }, {
              "福特": 11.0
            }, {
              "奔驰": 3.58
            },],//按消费金额排名
          "topCarBrandByUserIncrement": [
            {
              "长安轻型车": 1.0
            }, {
              "马自达": 0.25
            }, {
              "宝骏": 0.2
            }, {
              "ALPINA": 0.14
            }, {
              "雪佛兰": 0.13
            }, {
              "宝马": 0.09
            },],//用户增长率
          "topCarBrandByConsumptionTime": [
            {
              "别克": 221
            }, {
              "奥迪": 159
            }, {
              "宝马": 14
            }, {
              "奔驰": 13
            }, {
              "沃尔沃": 11
            }, {
              "宝骏": 9
            },],//消费次数
          "newUser": [
            {
              "date": "2019-05",
              "activeCount": 0,//左边的使用一次
              "totalConversion": 0.02,//右边的折线图
              "invertionRate": 0.0,//左边的折线图
              "sum": 65,//右边的总关注用户
              "effectiveAddition": 1,//右边的使用一次
              "addition": 26//左边的新增注册用户
            }, {
              "date": "2019-06",
              "activeCount": 0,
              "totalConversion": 0.01,
              "invertionRate": 0.0,
              "sum": 73,
              "effectiveAddition": 1,
              "addition": 8
            }, {
              "date": "2019-07",
              "activeCount": 0,
              "totalConversion": 0.01,
              "invertionRate": 0.0,
              "sum": 92,
              "effectiveAddition": 1,
              "addition": 19
            }, {
              "date": "2019-08",
              "activeCount": 3,
              "totalConversion": 0.04,
              "invertionRate": 0.18,
              "sum": 109,
              "effectiveAddition": 4,
              "addition": 17
            }, {
              "date": "2019-09",
              "activeCount": 7,
              "totalConversion": 0.08,
              "invertionRate": 0.26,
              "sum": 136,
              "effectiveAddition": 11,
              "addition": 27
            }, {
              "date": "2019-10",
              "activeCount": 2,
              "totalConversion": 0.09,
              "invertionRate": 0.15,
              "sum": 149,
              "effectiveAddition": 13,
              "addition": 13
            }, {
              "date": "2019-11",
              "activeCount": 7,
              "totalConversion": 0.12,
              "invertionRate": 0.58,
              "sum": 161,
              "effectiveAddition": 20,
              "addition": 12
            }, {
              "date": "2019-12",
              "activeCount": 54,
              "totalConversion": 0.27,
              "invertionRate": 0.48,
              "sum": 274,
              "effectiveAddition": 74,
              "addition": 113
            }, {
              "date": "2020-01",
              "activeCount": 1,
              "totalConversion": 0.26,
              "invertionRate": 0.06,
              "sum": 292,
              "effectiveAddition": 75,
              "addition": 18
            }, {
              "date": "2020-02",
              "activeCount": 0,
              "totalConversion": 0.25,
              "invertionRate": 0.0,
              "sum": 299,
              "effectiveAddition": 75,
              "addition": 7
            }, {
              "date": "2020-03",
              "activeCount": 6,
              "totalConversion": 0.26,
              "invertionRate": 0.43,
              "sum": 313,
              "effectiveAddition": 81,
              "addition": 14
            }, {
              "date": "2020-04",
              "activeCount": 0,
              "totalConversion": 0.26,
              "invertionRate": 0.0,
              "sum": 313,
              "effectiveAddition": 81,
              "addition": 0
            }],
          "topCarBrandByUser": [
            {
              "奥迪": 0.12
            }, {
              "宝马": 0.09
            }, {
              "奔驰": 0.09
            }, {
              "大众": 0.08
            }, {
              "别克": 0.06
            }, {
              "本田": 0.05
            },],//前十名
          "averageUsage": [
            {
              "2019-05": 0.0
            }, {
              "2019-06": 0.0
            }, {
              "2019-07": 0.0
            }, {
              "2019-08": 6.47
            }, {
              "2019-09": 8.93
            }, {
              "2019-10": 10.86
            }, {
              "2019-11": 5.86
            }, {
              "2019-12": 1.51
            }, {
              "2020-01": 2.25
            }, {
              "2020-02": 1.0
            }, {
              "2020-03": 1.5
            }, {
              "2020-04": 0.0
            }],
          "averageConsumption": 13.13,
          "ark": [
            {
              "2019-05": 3
            }, {
              "2019-06": 3
            }, {
              "2019-07": 3
            }, {
              "2019-08": 8
            }, {
              "2019-09": 8
            }, {
              "2019-10": 8
            }, {
              "2019-11": 8
            }, {
              "2019-12": 8
            }, {
              "2020-01": 10
            }, {
              "2020-02": 10
            }, {
              "2020-03": 15
            }, {
              "2020-04": 15
            }],
          "topCarBrandByRepeatUse": [
            {
              "AC Schnitzer": 0.5
            }, {
              "雷克萨斯": 0.5
            }, {
              "阿尔法·罗密欧": 0.43
            }, {
              "宝骏": 0.4
            }, {
              "安凯客车": 0.4
            }, {
              "起亚": 0.33
            },],//复购率
          "user": [
            {
              "2019-05": 1935
            }, {
              "2019-06": 1935
            }, {
              "2019-07": 1935
            }, {
              "2019-08": 5749
            }, {
              "2019-09": 5749
            }, {
              "2019-10": 5749
            }, {
              "2019-11": 5749
            }, {
              "2019-12": 5749
            }, {
              "2020-01": 6950
            }, {
              "2020-02": 6950
            }, {
              "2020-03": 10218
            }, {
              "2020-04": 10218
            }]
        }
      }
    },
    methods: {
      // ws
      openWs() {
        let loadingInstance = Loading.service({fullscreen: true, background: 'rgba(0,0,0,0.8)'});
        ws = new WebSocket("ws://106.14.75.69:8081/screen")
        ws.onopen = (evt) => {
          console.log("连接成功", evt)
        };
        ws.onmessage = (evt) => {
          console.log("收到：", JSON.parse(evt.data))
          console.log("收到：", evt.data)
          this.drawCharts(JSON.parse(evt.data))
          loadingInstance.close();
        };
        ws.onerror = (evt) => {
          alert("错误：" + (evt.data && evt.data !== undefined) ? evt.data : '网络连接出错')
          ws.close()
          this.openWs()
        };
      },

      // 单柱图分离key和value
      getKeyValue(data) {
        let newData = {name: [], value: []}
        data.forEach(value => {
          newData.name.push(Object.keys(value)[0])
          newData.value.push(Object.values(value)[0])
        })
        return newData
      },

      // 环状图分离key和value
      getCarData(data) {
        let newData = []
        data.forEach(value => {
          newData.push({
            name: Object.keys(value)[0],
            value: Object.values(value)[0]
          })
        })
        return newData
      },

      // 数据处理+绘制
      drawCharts(wsData) {
        let data = wsData

        // 第一屏

        // 智能柜总台数
        this.yAxisCharts(
          this.getKeyValue(data.ark),
          'ark',
          ['rgba(255,198,0,0.9)', 'rgba(255,248,169,0.9)']
        )

        // 使用用户数和注册用户数
        this.doubleYAxisCharts(
          this.getKeyValue(data.activeUser),
          data.newUser.map(item => {
            return item.sum
          }),
          'activeUser'
        )

        // 中间的汽车气泡
        this.projectRanking = this.getCarData(data.projectTypeSumList)

        // 服务项目排名
        this.ringCharts(
          this.getCarData(data.projectTypeSumList),
          'projectTypeSumList'
        )

        // 智能柜总覆盖用户数
        this.yAxisCharts(
          this.getKeyValue(data.user),
          'user',
          ['rgba(48,84,203,0.8)', 'rgba(59,70,150,0.8)']
        )

        // top3门店
        this.topStore=data.storeRanking.slice(0,4)

        // 业务量和业绩量
        this.xAxisCharts(
          data.storeRanking.map(item => {
            return item.name
          }),
          data.storeRanking.map(item => {
            return item.count
          }),
          data.storeRanking.map(item => {
            return item.sum
          }),
          'storeRanking',
        )

        // 第二屏

        // 平均消费数
        this.averageConsumption = data.averageConsumption

        // 增长量和总注册数
        this.lineBarCharts(
          data.newUser.map(item => {
            return item.date
          }),
          data.newUser.map(item => {
            return item.addition
          }),
          data.newUser.map(item => {
            return item.sum
          }),
          'userSum'
        )

        // 平均使用频次
        this.yAxisCharts(
          this.getKeyValue(data.averageUsage),
          'averageUsage',
          ['rgba(243,152,24,1)', 'rgba(197,199,83,1)']
        )

        // 新用户转化率
        this.lineCharts(
          data.newUser[11].activeCount,
          data.newUser[11].addition,
          data.newUser.map(item => {
            return item.date
          }),
          data.newUser.map(item => {
            return item.invertionRate
          }),
          'newUserLeft'
        )

        // 总转化率
        this.lineCharts(
          data.newUser[11].effectiveAddition,
          data.newUser[11].sum,
          data.newUser.map(item => {
            return item.date
          }),
          data.newUser.map(item => {
            return item.totalConversion
          }),
          'newUserRight'
        )

        // 第三屏

        // 汽车品牌top10
        this.topCarBrandByUser = this.getCarData(data.topCarBrandByUser)

        // 消费次数
        this.yAxisCharts(
          this.getKeyValue(data.topCarBrandByConsumptionTime),
          'topCarBrandByConsumptionTime',
          ['rgba(255,157,2,0.9)', 'rgba(204,206,82,0.9)']
        )

        // 消费金额
        this.yAxisCharts(
          this.getKeyValue(data.topCarBrandByAverageConsumption),
          'topCarBrandByAverageConsumption',
          ['rgba(76,116,183,0.9)', 'rgba(255,255,255,0.9)']
        )

        // 车龄统计

        // 增长率
        this.overLappingCharts(
          data.topCarBrandByUserIncrement.map(item => {
            return item.brand
          }),
          data.topCarBrandByUserIncrement.map(item => {
            return item.count
          }),
          data.topCarBrandByUserIncrement.map(item => {
            return item.sum
          }),
          'topCarBrandByUserIncrement'
        )

        // 复购率
        this.yAxisCharts(
          this.getKeyValue(data.topCarBrandByRepeatUse),
          'topCarBrandByRepeatUse',
          ['rgba(24,182,106,0.8)', 'rgba(34,174,220,0.8)']
        )

        // 车辆价值

      },

      // 折线图+环状图
      lineCharts(oneTime, sum, date, value, id) {
        let myData = {}
        switch (id) {
          case 'newUserLeft':
            myData = {
              bgColor: 'rgba(63,255,126,0.3)',
              lineColor: 'rgba(63,255,126,0.5)',
              pie: ['#1a90a1', '#55b1f5'],
              legend: ['新增注册用户', '使用一次']
            }
            break
          case 'newUserRight':
            myData = {
              bgColor: 'rgba(255,174,0,0.3)',
              lineColor: 'rgba(255,174,0,1)',
              pie: ['#7f2197', '#ffaf31'],
              legend: ['总注册关注用户', '使用一次']
            }
            break
        }
        let option = {
          xAxis: {
            type: 'category',
            data: date,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          grid: {
            top: 160,
            bottom: 20
          },
          series: [
            {
              data: value,
              type: 'line',
              symbol: 'none',
              lineStyle: {
                color: myData.lineColor
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0.7,
                  color: myData.bgColor
                }, {
                  offset: 1,
                  color: 'transparent'
                }])
              },
            },
            {
              type: 'pie',
              top: '-220',
              radius: ['18%', '28%'],
              color: myData.pie,
              label: {
                formatter: '{b}\n{c}',
                color: 'white',
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data: [
                {value: sum, name: myData.legend[0]},
                {value: oneTime, name: myData.legend[1]}
              ]
            }
          ]
        };

        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 折线图+柱状图
      lineBarCharts(date, addition, sum, id) {
        let option = {
          xAxis: {
            type: 'category',
            data: date,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          legend: {
            data: ['注册用户数', '新增用户数'],
            top:10,
            textStyle:{
              color:'white'
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          series: [
            {
              data: addition,
              name:'新增用户数',
              type: 'line',
              symbol: 'none',
              lineStyle: {
                color: 'rgba(255,217,6,0.8)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0.7,
                  color: 'rgba(255,216,0,0.8)'
                }, {
                  offset: 1,
                  color: 'transparent'
                }])
              },
            },
            {
              data: sum,
              name:'注册用户数',
              type: 'bar',
              barWidth: '11',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(53,86,165,0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(55,189,228,0.8)'
                  }]),
                }
              },
            }
          ]
        };
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 单列柱状图
      yAxisCharts(data, id, color) {
        const myChart = echarts.init(document.getElementById(id));
        myChart.showLoading();
        let option = {
          xAxis: {
            type: 'category',
            data: data.name,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          series: [{
            data: data.value,
            type: 'bar',
            barWidth: '11',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: color[0]
                }, {
                  offset: 1,
                  color: color[1]
                }]),
              }
            },
          }]
        };
        myChart.setOption(option)
        myChart.hideLoading();
      },

      // 双列柱状图
      doubleYAxisCharts(data, user, id) {
        let option = {
          xAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'white'
                }
              },
              axisLabel: {
                fontSize: 9,
                interval: 0
              },
              data: data.name
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'white'
                }
              },
              axisLabel: {
                fontSize: 9,
                interval: 0
              }
            }
          ],
          series: [
            {
              type: 'bar',
              barWidth: '11',
              barGap: '0',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(47,85,251,0.9)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,210,255,0.9)'
                  }]),
                }
              },
              data: data.value
            },
            {
              type: 'bar',
              barWidth: '11',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(225,118,0,0.9)'
                  }, {
                    offset: 1,
                    color: 'rgba(224,226,83,0.9)'
                  }]),
                }
              },
              data: user
            }
          ]
        };
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 横向重叠柱状图
      xAxisCharts(name, count, sum, id) {
        let option = {
          grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top: '5%',
            containLabel: true,
            color: 'rgba(14,247,255,0.3)'
          },
          xAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(14,247,255,0.3)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['rgba(14,247,255,0.3)'],
                width: 1,
                type: 'solid'
              }
            }
          },
          yAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(14,247,255,0.3)'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0,
              color: 'white'
            },
            axisTick: {
              show: false
            },
            data: name
          },
          series: [
            {
              type: 'bar',
              barWidth: '11',
              barGap: '-100%',
              itemStyle: {
                normal: {
                  color: 'rgba(14,247,255,0.2)',
                  barBorderRadius: [0,7,7,0],
                  borderColor: 'rgba(14,247,255,0.6)',
                },
              },
              data: sum
            },
            {
              type: 'bar',
              barWidth: '11',
              itemStyle: {
                normal: {
                  color: '#ff8f0c',
                  barBorderRadius: [0,7,7,0]
                }
              },
              data: count
            }
          ]
        };
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 纵向重叠柱状图
      overLappingCharts(brand, count, sum, id) {
        let option = {
          xAxis: {
            type: 'category',
            data: brand,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisLabel: {
              fontSize: 9,
              interval: 0
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: '11',
              barGap: '-100%',
              barBorderRadius: [0, 10, 10, 0],
              borderColor: 'rgba(14,247,255,0.3)',
              borderWidth: 3,
              borderType: 'solid',
              itemStyle: {
                normal: {
                  color: 'white',
                }
              },
              data: sum
            },
            {
              type: 'bar',
              barWidth: '11',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(225,118,0,0.9)'
                  }, {
                    offset: 1,
                    color: 'rgba(224,226,83,0.9)'
                  }]),
                }
              },
              data: count
            }
          ]
        };
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 饼状图
      pieCharts(data, id) {
        let option = {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [
                {value: 235, name: '视频广告'},
                {value: 274, name: '联盟广告'},
                {value: 310, name: '邮件营销'},
                {value: 335, name: '直接访问'},
                {value: 400, name: '搜索引擎'}
              ]
            }
          ]
        };
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

      // 环状图
      ringCharts(data, id) {
        let option = {
          legend: {
            orient: 'vertical',
            bottom: 0,
            data: data,
            textStyle: {
              color: 'white',
              fontSize: 13
            },
            formatter: function (n) {
              let val = data.filter(value => value.name === n)
              return n + '      ' + val[0].value
            }
          },
          series: {
            type: 'pie',
            left: '15',
            top: '-165',
            radius: ['25%', '40%'],
            color: ['#2cb2ca', '#8aa771', '#b83fbc', '#ca942c', '#2c3eca', '#9ac534'],
            label: {
              formatter: '{b}\n{d}%',
              color: 'white',
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: data
          }
        }
        const myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
      },

    },
    mounted: function () {
      this.drawCharts(JSON.parse(JSON.stringify(this.testInfo)))
      // this.openWs()

    },
    destroyed: function () {
      ws.close()
    }

  }
</script>

<style scoped lang="less">
  /*公共class*/
  .show {
    background: url('/static/bg.png') no-repeat;
    background-size: 100% 100%;
    height: 1080px;
    width: 1920px;
  }

  .show-card {
    background: url("./../assets/show/bg_02.png") no-repeat;
    background-size: 100% 100%;
    height: 310px;
    width: 460px;
    .show-card-echarts {
      height: 270px;
      width: 460px;
      margin: 0;
      padding-left: 10px;
    }
  }

  .show-card-title {
    font-weight: 600;
    font-size: 16px;
    color: #0ef7ff;
    width: 210px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
  }

  .show-title {
    font-size: 25px;
    color: #e2fcff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 25px;
    .show-title-logo {
      height: 50px;
      width: 90px;
    }
    .show-title-text {
      width: 350px;
      height: 40px;
      margin-right: 165px;
    }
  }

  .show-search {
    background: url("./../assets/show/bg_01.png") no-repeat;
    background-size: 100% 100%;
    width: 336px;
    height: 88px;
    position: absolute;
    top: 103px;
    left: 35px;
    font-size: 16px;
    color: #0ef7ff;
    padding: 22px 0 0 16px;
    .show-search-box {
      height: 33px;
      width: 298px;
      border: #0ef7ff solid 1px;
      line-height: 30px;
      padding-left: 21px;
    }
    .show-search-arrow {
      border-top: #0ef7ff solid 6px;
      width: 0;
      height: 0;
      border-left: transparent solid 6px;
      border-right: transparent solid 6px;
      border-bottom: transparent solid 6px;
      position: absolute;
      top: 36px;
      right: 38px;
    }
  }

  /*第一页*/
  .show-first {
    display: flex;
    justify-content: space-between;
    padding-right: 38px;
    position: relative;
    .show-first-left {
      padding-top: 100px;
      margin-left: 35px;
      > div {
        margin-top: 57px;
      }
    }
    .show-first-car {
      background: url("./../assets/show/bg_12.png") no-repeat;
      height: 677px;
      width: 1031px;
      position: absolute;
      left: 340px;
      top: 150px;
      .show-first-car-item {
        height: 106px;
        width: 117px;
        background: url("./../assets/show/bg_03.png") no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        position: absolute;
        span {
          color: #0ef7ff;
          font-size: 16px;
        }
      }
      .show-first-car-item::before {
        content: url("./../assets/show/bg_05.png");
        position: absolute;
        top: 92px;
      }
      .show-first-car-item::after {
        content: '';
        border-left: #0ef7ff solid 1px;
        position: absolute;
        top: 110px;
      }
      :nth-child(1) {
        left: 203px;
        top: 250px;
      }
      :nth-child(1)::after {
        height: 60px;
      }
      :nth-child(2) {
        left: 307px;
        top: 93px;
      }
      :nth-child(2)::after {
        height: 230px;
      }
      :nth-child(3) {
        left: 430px;
        top: 150px;
      }
      :nth-child(3)::after {
        height: 80px;
      }
      :nth-child(4) {
        left: 555px;
        top: 195px;
      }
      :nth-child(4)::after {
        height: 80px;
      }
      :nth-child(5) {
        left: 618px;
        top: 37px;
      }
      :nth-child(5)::after {
        height: 290px;
      }
      :nth-child(6) {
        left: 720px;
        top: 220px;
      }
      :nth-child(6)::after {
        height: 80px;
      }
    }
    .show-first-project {
      background: url("./../assets/show/bg_04.png") no-repeat;
      height: 371px;
      width: 221px;
      position: absolute;
      left: 1180px;
      top: 250px;
      span {
        color: white;
        font-size: 18px;
        position: absolute;
        top: -30px;
        font-weight: 600;
      }
      #projectTypeSumList {
        height: 350px;
        width: 220px;
      }
    }
    .show-first-right {
      > div {
        margin-top: 55px;
      }
    }
    .show-card-large {
      background: url("./../assets/show/bg_06.png") no-repeat;
      background-size: 100% 100%;
      height: 510px;
      width: 460px;
      position: relative;
      .top-store {
        height: 175px;
        padding: 0 75px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;
        .top-store-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          position: relative;
          font-size: 14px;
          .top-store-index {
            position: absolute;
            left: 50px;
            top: 13px;
          }
          .top-store-icon {
            position: relative;
            top: 10px;
          }
          .store-img {
            height: 75px;
            width: 75px;
            border-radius: 75px;
          }
        }
        > :nth-child(1) {
          align-self: flex-start;
          order: 2;
          .store-img {
            border: 2px #ffda0c dotted;
          }
        }
        > :nth-child(2) {
          order: 1;
          .store-img {
            border: 2px white dotted;
          }
        }
        > :nth-child(3) {
          order: 3;
          .store-img {
            border: 2px #ff9000 dotted;
          }
        }

      }
      .show-card-echarts {
        height: 280px;
        width: 460px;
        position: absolute;
        bottom: 0;
      }
    }
  }

  /*第二页*/
  .show-second {
    display: flex;
    justify-content: space-between;
    .show-second-left {
      height: 724px;
      width: 654px;
      background: url("./../assets/show/bg_10.png") no-repeat;
      background-size: 100% 100%;
      margin-top: 160px;
      color: #0ef7ff;
      font-size: 24px;
      padding: 40px 0;
      div {
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("./../assets/show/bg_09.png") no-repeat;
        background-position-x: 360px;
        span {
          font-size: 36px;
          line-height: 36px;
          margin: 0 10px 0 30px;
        }
      }
    }
    .show-second-right {
      width: 1076px;
      margin-right: 130px;
      padding-top: 90px;
      .show-second-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
      }
      .show-second-bottom {
        height: 475px;
        width: 1080px;
        background: url("./../assets/show/bg_11.png") no-repeat;
        background-size: 100% 100%;
        .show-second-bottom-title {
          color: #0ef7ff;
          font-size: 16px;
          font-weight: 600;
          line-height: 50px;
          margin-left: 80px;
        }
        .show-second-bottom-box {
          display: flex;
          justify-content: space-between;
        }
        .show-second-bottom-card {
          height: 408px;
          width: 540px;
          padding-top: 25px;
          position: relative;
          div {
            height: 372px;
            width: 443px;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 35px;
          }
        }
      }
    }
  }

  /*第三页*/
  .show-third {
    display: flex;
    justify-content: space-between;
    .show-third-left {
      width: 338px;
      height: 768px;
      margin-left: 35px;
      background: url("./../assets/show/bg_07.png") no-repeat;
      margin-top: 130px;
      padding-left: 3px;
      border-bottom: rgb(65, 122, 159) solid 2px;
      .show-third-left-title {
        font-size: 16px;
        color: #0ef7ff;
        line-height: 50px;
        padding-left: 95px;
        font-weight: 600;
      }
      .show-third-left-box {
        background: rgba(65, 122, 159, 0.3);
        height: 700px;
        margin-top: 13px;
        margin-bottom: 10px;
        >:nth-child(1) div{
          background-image: linear-gradient(to right, #e86c11 , #cf2c1b);
        }
        >:nth-child(2) div{
          background-image: linear-gradient(to right, #e86c11 , #cf2c1b);
        }
        >:nth-child(3) div{
          background-image: linear-gradient(to right, #e86c11 , #cf2c1b);
        }
      }
      .show-third-left-item {
        height: 70px;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: rgba(65, 122, 159, 0.3) solid 1px;
        margin: 0 12px;
        img {
          width: 50px;
          height: 50px;
        }
        div{
          height: 14px;
          background-image: linear-gradient(to right, #119ae8 , #0c5fbd);
        }
        span {
          margin:0 10px;
        }
      }
    }
    .show-third-right {
      width: 1500px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 160px;
      .show-card {
        margin-right: 23px;
        margin-bottom: 70px;
      }
    }
  }

</style>
