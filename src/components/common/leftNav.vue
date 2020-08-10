<template>
    <div class="left-nav">
        <div v-for="item in navList" v-bind:key="item.value" @click="navClick(item)">
            <i class="icon iconfont" :class="item.icon"></i>
            <div>{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'left-Nav',
    data() {
        return {
            navList: [
                { name: '收银', value: 'pos', icon: 'icon-goumai' },
                { name: '店铺', value: 'store', icon: 'icon-dianpu' },
                { name: '商品', value: 'goods', icon: 'icon-hanbao' },
                { name: '会员', value: 'vip', icon: 'icon-huiyuanqia' },
                { name: '统计', value: 'satistics', icon: 'icon-shuru' },
                { name: '设置', value: 'settings', icon: 'icon-shezhi' },
            ]
        }
    },
    methods: {
        navClick(item) {
            console.log(item)
            this.$router.push(`/${item.value}`)
        }
    }

}
</script>

<style>
    .left-nav {
        color: #fff;
        background-color: #1d8ce0;
        font-size: 10px;
        height: 100%;
        /* float: left; */
        width: 5%;
        cursor: pointer;
        position: fixed;
    }
    .icon-font {
        font-size: 24px;
    }
    .left-nav div {
        padding: 0;
        margin: 0;
    }
    .left-nav > div {
        height: 50px;
        line-height: 25px;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>