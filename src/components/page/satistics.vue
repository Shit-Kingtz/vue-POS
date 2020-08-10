<template>
  <div class="satistics">
    <div class="title">
      <el-row :gutter="50">
        <el-col :span="8">
          <el-card class="box-card sales">
            <div class="card-content" @mouseenter="hover('sales')" @mouseleave="dishover('sales')">
              <template v-if="!salesShow">
                <div class="content-header">今日销售额</div>
                <div class="content-container">¥123,456</div>
              </template>
              <template v-else>
                <el-col :span="12">
                  <div class="content-inner">
                    <div class="content-inner-title">今日销售额</div>
                    <div class="content-inner-detail">¥123,456</div>
                    <div class="content-inner-desc">本月较上月：<span style="color: #fff">+</span><span style="color: #fff">10%</span></div>
                  </div>
                  <div class="content-inner">
                    <div class="content-inner-title">今日已完成</div>
                    <div class="content-inner-detail">¥12,345</div>
                    <div class="content-inner-desc">较昨日：<span style="color: #fff">+</span><span style="color: #fff">30%</span></div>
                  </div>
                  <div class="content-inner">
                    <div class="content-inner-title">今日进行中</div>
                    <div class="content-inner-detail">¥12,345</div>
                    <div class="content-inner-desc">较昨日：<span style="color: #fff">+</span><span style="color: #fff">30%</span></div>
                  </div>
                  <div class="content-inner">
                    <div class="content-inner-title">全年销售额</div>
                    <div class="content-inner-detail">¥123,456,789</div>
                    <div class="content-inner-desc">较去年：<span style="color: #fff">+</span><span style="color: #fff">30%</span></div>
                  </div>
                </el-col>
                <el-col :span="12" style="padding: 0">
                  <el-progress type="circle" :percentage="70" :color="'#f59b28'" :width="200"></el-progress>
                </el-col>
              </template>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card members">
            <div class="card-content" @mouseenter="hover('members')" @mouseleave="dishover('members')">
              <template v-if="!memberShow">
                <div class="content-header">今日新增会员</div>
                <div class="content-container">20<span class="unit">人</span></div>
              </template>
              <template v-else>
                <div class="content-inner">
                  <div class="content-inner-title">今日新增会员</div>
                  <div class="content-inner-detail">20<span class="unit">人</span></div>
                  <div class="content-inner-desc">本月较上月：<span style="color: #fff">+</span><span style="color: #fff">10%</span></div>
                  <div class="content-inner-desc">今年较去年：<span style="color: #fff">+</span><span style="color: #fff">30%</span></div>
                </div>
              </template>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card orders">
            <div class="card-content" @mouseenter="hover('orders')" @mouseleave="dishover('orders')">
              <template v-if="!orderShow">
                <div class="content-header">今日订单数</div>
                <div class="content-container">123,456<span class="unit">单</span></div>
              </template>
              <template v-else>
                <div class="content-inner">
                  <div class="content-inner-title">今日待支付订单</div>
                  <div class="content-inner-detail">123,456<span class="unit">单</span></div>
                </div>
                <div class="content-inner">
                  <div class="content-inner-title">今日已完成订单</div>
                  <div class="content-inner-detail">1,234,567<span class="unit">单</span></div>
                  <div class="content-inner-desc">较昨日：<span style="color: #fff">+</span><span style="color: #fff">50%</span></div>
                </div>
                <div class="content-inner">
                  <div class="content-inner-title">本月新增订单</div>
                  <div class="content-inner-detail">1,234,567,890<span class="unit">单</span></div>
                  <div class="content-inner-desc">较上月：<span style="color: #fff">+</span><span style="color: #fff">30%</span></div>
                </div>
                <div class="content-inner">
                  <div class="content-inner-title">今年新增订单</div>
                  <div class="content-inner-detail">123,456,789,012<span class="unit">单</span></div>
                  <div class="content-inner-desc">较去年：<span style="color: #fff">+</span><span style="color: #fff">10%</span></div>
                </div>
              </template>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-col :span="14">
      <div class="tops">
        <div class="top-header">最热单品</div>
        <div class="top-container">
          <div v-for="good in normalGoods" v-bind:key="good.goodsId">
            <el-col :span="12">
              <el-card class="box-card" style="height: 150px; margin: 10px; box-shadow: none">
                <el-col :span="10" class="image-container">
                  <el-image 
                      class="image" 
                      :src="good.goodsImg"
                  ></el-image>
                </el-col>
                <el-col :span="14">
                    <div class="detail">
                      <el-tag class="foodPrice" type="warning" effect="dark" size="small">
                        ￥{{ good.price }}
                      </el-tag>
                      <div class="foodName">{{ good.goodsName }}</div>
                    </div>
                </el-col>
              </el-card>
            </el-col>
          </div>
          
        </div>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="line">
        <div class="line-header">上周销售额曲线图</div>
        <div class="line-container">
          <div id="main" style="width: 600px;height: 400px;"></div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import echarts from 'echarts'
import store from '@/vuex/store.js'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'satistics',
  data () {
    return {
      msg: 'satistics',
      salesShow: false,
      memberShow: false,
      orderShow: false,
    }
  },
  computed: {
    ...mapGetters(['normalGoods'])
  },
  beforeCreate: function(){
    this.$store.dispatch('init')
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine('main')
    })
  },
  methods:{
    hover(type) {
      switch(type) {
        case 'sales': this.salesShow = true; break;
        case 'members': this.memberShow = true; break;
        case 'orders': this.orderShow = true; break;
      }
      console.log(this.memberShow)
    },
    dishover(type) {
      switch(type) {
        case 'sales': this.salesShow = false; break;
        case 'members': this.memberShow = false; break;
        case 'orders': this.orderShow = false; break;
      }
      console.log(this.memberShow)

    },
    drawLine(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
          }
        },
        legend: {
          data: ['香辣鸡腿堡', '田园鸡腿堡', '和风汉堡', '快乐全家桶', '脆皮炸鸡腿']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '香辣鸡腿堡',
          type: 'line',
          stack: '销售额',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: '田园鸡腿堡',
          type: 'line',
          stack: '销售额',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: '和风汉堡',
          type: 'line',
          stack: '销售额',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        }, {
          name: '快乐全家桶',
          type: 'line',
          stack: '销售额',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        }, {
          name: '脆皮炸鸡腿',
          type: 'line',
          stack: '销售额',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.satistics {
  margin-left: 5%;
  height: 100%;
}
.satistics > .title {
  padding: 40px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.title .el-card {
  border-radius: 20px;
  height: 180px;
  transition: all .5s;
}
.title .el-card .card-content {
  padding: 20px;
}
.content-inner {
  text-align: left;
  margin-bottom: 15px;
}
.content-inner .unit {
  margin-left: 10px;
}
.sales .content-inner .content-inner-title {
  color: #90cfff;
  line-height: 2;
  font-size: 13px;
}
.sales .content-inner .content-inner-detail {
  line-height: 1.5;
  font-size: 20px;
  font-weight: bold;
}
.sales .content-inner .content-inner-desc {
  color: #90cfff;
  font-size: 13px;
}
.members .content-inner .content-inner-title {
  color: #ffe7c5;
  line-height: 2;
  font-size: 18px;
}
.members .content-inner .content-inner-detail {
  line-height: 1.5;
  font-size: 20px;
  font-weight: bold;
}
.members .content-inner .content-inner-desc {
  color: #ffe7c5;
  font-size: 13px;
}
.orders .content-inner .content-inner-title {
  color: #bfffff;
  line-height: 2;
  font-size: 13px;
}
.orders .content-inner .content-inner-detail {
  line-height: 1.5;
  font-size: 20px;
  font-weight: bold;
}
.orders .content-inner .content-inner-desc {
  color: #bfffff;
  font-size: 13px;
}
.el-card .content-header {
  text-align: left;
  font-size: 1.3em;
  font-weight: bold;
  padding: .5em 1em;
}
.el-card .content-container {
  text-align: end;
  font-size: 2.5em;
  padding: .8em 1em 0;
}
.el-card .content-container .unit {
  font-size: 20px;
  margin-left: 10px;
}
.el-card__body {
  padding: 0;
  height: 100%!important;
}
.el-progress-circle {
  margin-top: 40%;
  margin-bottom: 40%;
}
.el-progress__text {
  font-weight: bold;
  color: #fff;
  margin-left: 25%;
}

.sales:hover {
  background-color: #3d9de6;
  height: 380px;
  color: #fff;
}
.members:hover {
  background-color: #f59b28;
  color: #fff;
}
.orders:hover {
  background-color: #43cecd;
  height: 380px;
  color: #fff;
}

.tops {
  height: 400px;
  margin: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  /* overflow: auto; */
}
.top-header {
  padding: 20px;
  text-align: left;
}
.top-container {
  height: 80%;
  overflow-y: scroll;
}
.top-container .image-container {
  height: 150px;
}
.top-container .image-container .image {
  width: 100%;
  height: 100%;
  display: block;
}
.top-container .el-col, .top-container .detail {
  height: 100%;
  position: relative;
}


.line {
  height: 480px;
  margin: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  /* overflow: auto; */
}
.line-header {
  padding: 20px;
  text-align: left;
}
.satistics .detail .foodPrice {
  position: absolute;
  left: 5%;
  top: 15%;
}
.satistics .detail .foodName {
  color: #999;
  position: absolute;
  left: 5%;
  top: 35%;
}
</style>
