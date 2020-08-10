<template>
  <div class="store">
    <div class="title-container">
      <div class="title-name" >查找零售店</div>
      <el-select class="store-selector" v-model="store" placeholder="查找零售店">
        <el-option
          v-for="item in storeList"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <div class="more">
        <el-link>完整零售店列表<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
      </div>
    </div>
    
    <section class="section section-content">
      <section class="section-detail">
        <div class="grid">
          <div class="grid-item safety">
            <div class="grid-content">
              <h1 class="grid-title">确保安全，是我们恢复营业的先决条件。</h1>
              <p class="grid-subtitle">为确保店内环境的清洁与安全，我们采取了这些额外措施：</p>
              <ul class="safety-methods">
                <li>
                  <div class="img-container">
                    <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/face_covering_icon_small_2x.png" style="width: 88px;height: 48px" alt="">
                  </div>
                  进店要求戴口罩
                </li>
                <li>
                  <div class="img-container">
                    <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/touchless_temperature_icon_large_2x.png" style="width: 33px" alt="">
                  </div>
                  无接触式体温检测
                </li>
                <li>
                  <div class="img-container">
                    <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/store_occupancy_icon_large_2x.png" style="width: 81px;height: 48px" alt="">
                  </div>
                  限制客流量
                </li>
                <li>
                  <div class="img-container">
                    <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/social_distancing_icon_large_2x.png" style="width: 96px;height: 48px" alt="">
                  </div>
                  保持社交距离  
                </li>
                <li>
                  <div class="img-container">
                    <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/deep_cleaning_icon_large_2x.png" style="width: 65px;height: 55px" alt="">
                  </div>
                  持续的深度清洁
                </li>
              </ul>
            </div>
          </div>

          <div class="grid-item trade-in">
            <div class="grid-image">
              <img src="https://www.apple.com.cn/retail/find-a-store/images/giveback_banner_large_2x.png" alt="">
            </div>
            <div class="grid-content" :class="[ scrollTop >= 170 ? 'animated fadeInRight' : '' ]">
              <h1 class="grid-title">将你手中的智能手机，变成新 iPhone 11。</h1>
              <div class="more">
                <el-link>进一步了解<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
              </div>
              <p class="grid-subtitle">到 App Store 零售店，用符合条件的智能手机来换购 iPhone 11，享受折抵优惠。</p>
              <ul class="check-items">
                <li>有知识丰富的 Specialist 专家，帮你解答各种问题。</li>
                <li>为你快速转移手机数据提供协助。</li>
                <li>除了全额付款，还能免息分期付款。</li>
                <li>AppleCare+ 服务计划，提供一站式服务与支持。</li>
              </ul>
            </div>
          </div>
          
          <div class="grid-item card-1">
            <div class="grid-content" :class="[ scrollTop >= 800 ? 'animated fadeInUp' : '' ]">
              <div class="title-icons">
                <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/aos_icons_large_2x.png" alt="">
              </div>
              <div>
                <h1 class="grid-title"><div>Apple 的各种好，</div><div>线上一样不少。</div></h1>
                <p class="grid-subtitle">在线上，同样有我们的出色产品和服务，以及 Apple Specialist 专家的帮助。</p>
                <div class="more">
                  <el-link>进一步了解<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
                </div>
              </div>
              
            </div>
          </div>
          <div class="grid-item card-2">
            <div class="grid-content" :class="[ scrollTop >= 800 ? 'animated fadeInDown' : '' ]">
              <div class="title-icons">
                <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/taa_at_home_icon_large_2x.png" alt="">
              </div>
              <div>
                <h1 class="grid-title"><div>趣味十足的指导视频，</div><div>让你在家</div><div>也能挥洒创意。</div></h1>
                <div class="more">
                  <el-link>立即观看<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
                </div>
              </div>
              
            </div>
          </div>
          <div class="grid-item genius">
            <div class="grid-content" :class="[ scrollTop >= 1380 ? 'animated fadeInLeft' : '' ]">
              <h2 class="grid-pre-title">Genius 技术支持</h2>
              <h1 class="grid-title">无论有什么需求，<div>都有我们在。</div></h1>
              <p class="grid-subtitle">你可以通过电话、在线交流、电子邮件或店内咨询获得专家的支持。从设置设备、恢复 Apple ID 到更换屏幕，我们都乐意提供帮助。</p>
              <div class="more">
                <el-link>立即开始<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
              </div>
            </div>
            <div class="grid-image">
              <img src="https://www.apple.com.cn/v/retail/includes/promo/d/images/retail-info/genius_support_large_2x.png" alt="">
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="section-gallary">
      <el-carousel indicator-position="none" height="600px" autoplay>
        <el-carousel-item v-for="item in gallaries" :key="item"> 
          <img :src="item.src" alt="">
          <h3>{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: 'store',
  data() {
    return {
      scrollTop: 0,
      msg: 'store',
      storeList: ['上海，七宝','上海，环贸iapm','上海，五角场','上海，南京东路','上海，浦东','上海，环球港','上海，香港广场'],
      store: '',
      gallaries: [
        { src: 'https://www.apple.com.cn/retail/find-a-store/images/hero_sanlitun_medium_2x.jpg', name: 'Apple 三里屯' },
        { src: 'https://www.apple.com.cn/retail/find-a-store/images/hero_causewaybay_medium_2x.jpg', name: 'Apple CauseWay Bay' },
        { src: 'https://www.apple.com/retail/find-a-store/images/hero_michiganave_medium_2x.jpg', name: 'Apple Michigan Avenue' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll(e) {
      this.scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      console.log(this.scrollTop)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.store {
  height: 100%;
  margin-left: 5%;
}
.title-container {
  font-size: 2em;
  font-weight: bold;
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  color: #fff;
  background-color: #333;
  height: 25%;
}
.title-container .title-name {
  padding: 40px 0 10px;
}
.store-selector {
  width: 320px;
}
.title-container .more > .el-link.el-link--default {
  color: #fff;
}
.title-container .more > .el-link.el-link--default:after {
  border-color: #fff;
}

.section {
  padding: 0;
  background-color: #f5f5f7;
}
.section-content, .section-gallary {
  width: 100%;
}
.section-detail {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  height: 100%;
  padding-top: 75px;
  padding-bottom: 60px;
  background-color: #f5f5f7;
}
.grid-item {
  height: 500px;
  width: 880px;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
}
.grid-item:nth-child(1) {
  flex-direction: column;
  justify-content: center;
}
.grid-item:nth-child(2) .grid-content, .grid-item:nth-child(5) .grid-content {
  width: 50%;
  margin: auto 0;
}
.grid-image {
  width: 50%;
  margin: auto 0;
}
.grid-image img {
  width: 90%;
}
.grid-item:nth-child(1) .grid-title {
  font-size: 2em;
  font-weight: bold;
  margin: 0;
}
.grid-item:nth-child(1) .grid-subtitle {
  font-size: 1em;
  margin-top: .8em;
}
.grid-item:nth-child(2) .grid-title {
  font-size: 2.3em;
  font-weight: bold;
  padding: 0 10px;
  margin: 10px;
}
.grid-item:nth-child(2) .grid-subtitle {
  font-size: 1.1em;
  margin-top: .8em;
}
.grid-item:nth-child(5) {
  padding: 0;
}
.grid-item:nth-child(5) .grid-content {
  padding: 50px;
}
.grid-item:nth-child(5) .grid-title {
  font-size: 2.3em;
  font-weight: bold;
  padding: 0 10px;
  margin: 10px;
}
.grid-item:nth-child(5) .grid-image {
  margin: 0;
}
.grid-item:nth-child(5) .grid-image img {
  width: 126%;
  border-radius: 0 20px 20px 0;
}
.grid-item .more > .el-link.el-link--default {
  color: #409EFF;
}
.grid-item .more > .el-link.el-link--default:after {
  border-color: #409EFF;
}
.safety-methods {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 25px 0;
}
.safety-methods > li {
  width: 20%;
}

.check-items > li {
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 7px;
  text-align: left;
}
.safety-methods .img-container {
  display: flex;
  height: 57px;
  margin-bottom: 16px;
  align-items: center;
}
.safety-methods img {
  margin: 0 auto;
}

.grid-item.card-1, .grid-item.card-2 {
  width: 39%;
  display: inline-flex;
}
.grid-item.card-1 {
  margin-right: 10px;
}
.card-1 .title-icons img {
  width: 80%;
}
.card-2 .title-icons img {
  width: 60%;
}
.card-1 .grid-title, .card-2 .grid-title {
  font-size: 2em;
}
.card-1 .grid-content, .card-2 .grid-content {
  margin: auto 0;
}
.section-gallary img {
  max-height: 100%;
}
.section-gallary h3 {
  position: relative;
  top: -65px;
  color: #fff;
}
</style>
