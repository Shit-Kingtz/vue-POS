<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">
                <Order></Order>
            </el-col>
            <el-col :span="17" class="pos-goods">
                <MostUse></MostUse>
            </el-col>   
        </el-row>
    </div>
</template>

<script>
import Order from '@/components/page/order'
import MostUse from '@/components/page/MostUse'

export default {
    name: 'pos',
    components: {
        Order, MostUse
    }
}
</script>

<style scoped>
.pos {
    margin-left: 5%;
}
.pos, .el-row, .el-col {
    height: 100%;
}
.pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
}
.pos-goods {
    background-color: #f9fafc;
}
.btn-area {
    margin-top: 10px;
}
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
.normal-price {
    color: #58b7ff;
}
.goods-type {
    clear: both;
    height: auto;
    overflow: hidden;
    border-top: 1px solid #d3dce6;
}
.totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
}
.cookList li {
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;
}
.cookList li span {
    display: block;
    float:left;
}
.foodImg {
    width: 40%;
}
.detail {
    padding-top: 20px;
}
.foodName {
    width: 40%;
    font-size: 18px;
    padding-left: 20px;
    color: brown;
}
.foodPrice {
    font-size: 16px;
    padding-left: 25px;
    padding-top: 10px;
}

</style>
<style>
.el-tabs__item.is-top:nth-child(2) {
    padding-left: 20px!important;
}
.el-tabs__nav-scroll {
    background-color: #fff;
}
</style>