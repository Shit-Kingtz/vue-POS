<template>
    <el-tabs>
        <el-tab-pane label="点餐">
            <el-scrollbar id="scrollbar1">
                <el-table :data="tableData"  border style="width:100%">
                    <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                    <el-table-column prop="count" label="数量" width="70"></el-table-column>
                    <el-table-column prop="price" label="金额" width="100"></el-table-column>
                    <el-table-column label="操作" fixed="right">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="delItem(scope.row)">删除</el-button>
                            <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="totalDiv">
                    <small>数量：</small>{{ totalCount }}<small> 份</small>
                    &nbsp;&nbsp;
                    <small>金额：¥ </small>{{ totalMoney }}<small> 元</small>
                </div>
                <div class="btn-area">
                    <el-button type="warning">挂单</el-button>
                    <el-button type="danger" @click="delAll">删除</el-button>
                    <el-button type="success" @click="checkout">结账</el-button>
                </div>
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="挂单">
            挂单
        </el-tab-pane>
        <el-tab-pane label="外卖">
            <el-scrollbar id="scrollbar2">
                <el-row v-for="good in allGoods" v-bind:key="good.goodsId">
                    <el-col :span="22" style="margin: 0 20px 10px">
                        <el-card :body-style="{ padding: '0px' }" shadow="always">
                            <el-col :span="8" class="image-container">
                                <el-image 
                                    :span="12"
                                    class="image" 
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" 
                                    fit="contain"
                                    :preview-src-list="srcList"
                                ></el-image>
                            </el-col>
                            <el-col :span="16">
                                <div class="detail">
                                    <div class="foodName">{{ good.goodsName }}</div>
                                    <div class="foodDesc">汉堡的描述</div>
                                    <el-col :span="13" class="foodBottom">
                                        <span class="foodPrice"><small>￥</small>{{ good.price }}</span>
                                        <span class="foodAmount">
                                            <transition name="showBtn">
                                                <template v-if="good.amount">
                                                    <el-button class="reduce_btn" type="primary" circle size="mini" icon="el-icon-minus" @click="reduceAmount(good.goodsId)"></el-button>
                                                </template>
                                            </transition>
                                            <transition name="showSpan">
                                                <template v-if="good.amount">
                                                    <span class="amount">{{ good.amount }}</span>
                                                </template>
                                            </transition>
                                            <el-button class="add_btn" type="primary" circle size="mini" icon="el-icon-plus" @click="addAmount(good.goodsId)"></el-button>
                                        </span>
                                    </el-col>
                                </div>
                            </el-col>
                        </el-card>
                    </el-col>
                </el-row>
            </el-scrollbar>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import store from '@/vuex/store.js'
import { mapGetters } from 'vuex'
export default {
    store,
    name: 'order-page',
    mounted: function() {
        document.getElementById('scrollbar2').style.height = (window.innerHeight - 55) + 'px'
    },
    computed: {
        ...mapGetters(['tableData', 'totalMoney', 'totalCount', 'allGoods']),
        srcList() {
            return ['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png']
        }
    },
    methods: {
        addOrderList(good) {
            this.$store.commit('ADD_GOOD_ITEM', good)
            this.$store.commit('GET_ALL_MONEY')
        },
        delItem(good) {
            this.$store.commit('DELETE_GOODS', good)
            this.$store.commit('GET_ALL_MONEY')
        },
        delAll() {
            if (this.totalCount) {
                this.$confirm('确定删除全部商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.commit('RESET')
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            } else {
                this.$message.error('没有商品可供删除！')
            }
        },
        checkout() {
            if (this.totalCount) {
                this.$store.commit('RESET')
                this.$message({
                    message: '结账成功！',
                    type: 'success'
                })
            } else {
                this.$message.error('不能空结！')
            }
        },
        addAmount(id) {
            this.$store.commit('ADD_TAKEOUT_AMOUNT', id)
        },
        reduceAmount(id) {
            this.$store.commit('REDUCE_TAKEOUT_AMOUNT', id)
        }
    }
}
</script>

<style scoped>
.btn-area {
    margin-top: 10px;
}
.totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
}
.image-container {
    height: 100px;
}
.image {
    width: 100%;
    height: 140px;
    display: block;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.detail {
    padding: 14px;
    text-align: left;
}
.foodName {
    font-size: 18px;
    font-weight: bold;
}
.foodDesc {
    font-size: 15px;
    color: rgb(170, 170, 170);
}
.foodBottom {
    height: 30px;
    line-height: 30px;
    position: absolute;
    bottom: 20px;
}
.foodPrice {
    color: red;
    font-size: 20px;
}
.foodAmount {
    position: absolute;
    right: 0;
}
.amount {
    display: inline-block;
    width: 50px;
    text-align: center;
}
.showBtn-enter {
    opacity: 0;
}
.showBtn-enter-active {
    transition: opacity .2s;
}
.showBtn-leave {
    opacity: 1;
}
.showBtn-leave-active {
    opacity: 0;
    transition: opacity .2s;
}
.showSpan-enter {
    opacity: 0;
    width: 0px;
}
.showSpan-enter-active {
    transition: all .2s;
}
.showSpan-leave {
    opacity: 1;
    width: 50px;
}
.showSpan-leave-active {
    opacity: 0;
    width: 0px;
    transition: all .2s;
}
</style>