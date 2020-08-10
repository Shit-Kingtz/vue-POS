<template>
    <div>
        <div class="normal-goods">
            <div class="title">常用商品</div>
            <div class="normal-goods-list">
                <ul>
                    <li v-for="good in normalGoods" v-bind:key="good.goodsId" @click="addOrderList(good)">
                        <span>{{ good.goodsName }}</span>
                        <span class="normal-price"><small>￥</small>{{ good.price }}</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="goods-type">
            <div class="spinner1">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="spinner2">
                <div></div>
                <div></div>
            </div>
            <el-tabs>
                <el-tab-pane label="汉堡">
                    <div v-for="good in type0Goods" v-bind:key="good.goodsId" @click="addOrderList(good)">
                        <el-col :span="6" style="margin: 0 20px 10px">
                            <el-card :body-style="{ padding: '0px' }" shadow="always">
                                <el-col :span="10" class="image-container">
                                    <el-image 
                                        class="image" 
                                        :src="good.goodsImg"
                                    ></el-image>
                                </el-col>
                                <el-col :span="14">
                                    <div class="detail">
                                        <div class="foodName">{{ good.goodsName }}</div>
                                        <el-col :span="13" class="foodBottom">
                                            <span class="foodPrice"><small>￥</small>{{ good.price }}</span>
                                        </el-col>
                                    </div>
                                </el-col>
                            </el-card>
                        </el-col>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="小食">
                    <div v-for="good in type1Goods" v-bind:key="good.goodsId" @click="addOrderList(good)">
                        <el-col :span="6" style="margin: 0 20px 10px">
                            <el-card :body-style="{ padding: '0px' }" shadow="always">
                                <el-col :span="10" class="image-container">
                                    <el-image 
                                        class="image" 
                                        :src="good.goodsImg"
                                    ></el-image>
                                </el-col>
                                <el-col :span="14">
                                    <div class="detail">
                                        <div class="foodName">{{ good.goodsName }}</div>
                                        <el-col :span="13" class="foodBottom">
                                            <span class="foodPrice"><small>￥</small>{{ good.price }}</span>
                                        </el-col>
                                    </div>
                                </el-col>
                            </el-card>
                        </el-col>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                    <div v-for="good in type2Goods" v-bind:key="good.goodsId" @click="addOrderList(good)">
                        <el-col :span="6" style="margin: 0 20px 10px">
                            <el-card :body-style="{ padding: '0px' }" shadow="always">
                                <el-col :span="10" class="image-container">
                                    <el-image 
                                        class="image" 
                                        :src="good.goodsImg"
                                    ></el-image>
                                </el-col>
                                <el-col :span="14">
                                    <div class="detail">
                                        <div class="foodName">{{ good.goodsName }}</div>
                                        <el-col :span="13" class="foodBottom">
                                            <span class="foodPrice"><small>￥</small>{{ good.price }}</span>
                                        </el-col>
                                    </div>
                                </el-col>
                            </el-card>
                        </el-col>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                    <div v-for="good in type3Goods" v-bind:key="good.goodsId" @click="addOrderList(good)">
                        <el-col :span="6" style="margin: 0 20px 10px">
                            <el-card :body-style="{ padding: '0px' }" shadow="always">
                                <el-col :span="10" class="image-container">
                                    <el-image 
                                        class="image" 
                                        :src="good.goodsImg"
                                    ></el-image>
                                </el-col>
                                <el-col :span="14">
                                    <div class="detail">
                                        <div class="foodName">{{ good.goodsName }}</div>
                                        <el-col :span="13" class="foodBottom">
                                            <span class="foodPrice"><small>￥</small>{{ good.price }}</span>
                                        </el-col>
                                    </div>
                                </el-col>
                            </el-card>
                        </el-col>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapGetters } from 'vuex'
export default {
    store,
    name: 'most-use-page',
    computed: {
        ...mapGetters(['normalGoods', 'type0Goods', 'type1Goods', 'type2Goods', 'type3Goods', 'totalMoney', 'totalCount'])
    },
    beforeCreate: function(){
        console.log(this)
        this.$store.dispatch('init')
    },
    methods: {
        addOrderList(good) {
            this.$store.commit('ADD_GOOD_ITEM', good)
            this.$store.commit('GET_ALL_MONEY')
        },
    }
}
</script>

<style scoped>
.title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
}
.normal-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #20a0ff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
}
.normal-goods-list ul li:hover,
.goods-type .el-card:hover {
    transform: scale(1.1);
    transition: all .2s;
}
.normal-price {
    color: #58b7ff;
}
.goods-type {
    clear: both;
    height: auto;
    overflow: hidden;
    border-top: 1px solid #d3dce6;
}
.image-container {
    height: 100px;
}
.image {
    width: 100%;
    height: 100%;
    display: block;
}
.detail {
    padding-top: 20px;
}
.foodName {
    font-size: 18px;
    color: brown;
}
.foodPrice {
    font-size: 16px;
    padding-left: 25px;
    padding-top: 10px;
}

</style>
<style>
.el-tabs__header {
    margin: 0;
}
.el-tabs__content {
    padding-top: 15px;
}
</style>
<style scope>
.spinner1 {
    text-align: center;
    position: fixed;
    width: 200px;
    height: 50px;
    left: 50%;
    bottom: 40%;
}
/* .spinner1 > div {
    width: 8px;
    height: 100%;
    display: inline-block;
    background-color: #58b7ff;
    opacity: .6;
    animation: loading1 1s ease infinite;
} */
.spinner1 > div:nth-child(2) {
    animation-delay: -.9s;
}
.spinner1 > div:nth-child(3) {
    animation-delay: -.8s;
}
.spinner1 > div:nth-child(4) {
    animation-delay: -.7s;
}
.spinner1 > div:nth-child(5) {
    animation-delay: -.6s;
}
@keyframes loading1 {
    0%, 40%, 100% { transform: scaleY(.4); }
    20% { transform: scaleY(1); }
}

.spinner2 {
    text-align: center;
    position: fixed;
    width: 200px;
    height: 50px;
    left: 50%;
    bottom: 20%;
}
/* .spinner2 > div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #58b7ff;
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
    animation: loading2 1s ease infinite;
} */
.spinner2 > div:nth-child(2) {
    animation-delay: -.5s;
}
@keyframes loading2 {
    0%, 100% { transform: scale(0); }
    50% { transform: scale(1); }
}
</style>