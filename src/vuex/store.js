import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    tableData: [],
    normalGoods: [],
    allGoods: [],
    type0Goods: [],
    type1Goods: [],
    type2Goods: [],
    type3Goods: [],
    totalMoney: 0,
    totalCount: 0,
}

const getters = {
    tableData: state => state.tableData,
    normalGoods: state => state.normalGoods,
    allGoods: state => state.allGoods,
    type0Goods: state => state.type0Goods,
    type1Goods: state => state.type1Goods,
    type2Goods: state => state.type2Goods,
    type3Goods: state => state.type3Goods,
    totalMoney: state => state.totalMoney,
    totalCount: state => state.totalCount,
    takeOutList: state => state.takeOutList,

}

const mutations = {
    NORMAL_GOODS_INIT(state, payload) {
        state.normalGoods = payload
        console.log(state.normalGoods)
    },
    TYPE_GOODS_INIT(state, payload) {
        [state.type0Goods, state.type1Goods, state.type2Goods, state.type3Goods] = payload
    },
    TAKEOUT_LIST_INIT(state, payload) {
        state.allGoods = payload.map((item) => {
            return {
                ...item,
                amount: 0
            }
        })
    },
    ADD_GOOD_ITEM(state, payload) {
        let isExist = false
        for (let i = 0; i < state.tableData.length; i++) {
            if (state.tableData[i].goodsId == payload.goodsId) {
                isExist = true
            }
        }

        if (isExist) {
            let arr = state.tableData.filter(item => item.goodsId == payload.goodsId)
            arr[0].count++
        } else {
            let newGood = { goodsId: payload.goodsId, goodsName: payload.goodsName, price: payload.price, count: 1 }
            state.tableData.push(newGood)
        }
    },
    ADD_TAKEOUT_AMOUNT(state, payload) {
        state.allGoods.forEach((item) => {
            if (item.goodsId == payload) {
                item.amount ++
            }
        })
    },
    REDUCE_TAKEOUT_AMOUNT(state, payload) {
        state.allGoods.forEach((item) => {
            if (item.goodsId == payload && item.amount > 0) {
                item.amount --
            }
        })
    },
    DELETE_GOODS(state, payload) {
        state.tableData = state.tableData.filter(item => item.goodsId !== payload.goodsId)
    },
    GET_ALL_MONEY(state) {
        state.totalCount = state.totalMoney = 0
        if (state.tableData.length) {
            state.tableData.forEach((el) => {
                state.totalCount += el.count
                state.totalMoney = state.totalMoney + (el.price * el.count)
            })
        }
    },
    RESET(state) {
        state.tableData = []
        state.totalCount = state.totalMoney = 0
    }
}

const actions = {
    init({ commit }) {
        axios.get('https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods')
        .then(response => {
            if (response.status == 200) {
                commit('NORMAL_GOODS_INIT', response.data.oftenGoods)
                commit('TAKEOUT_LIST_INIT', response.data.oftenGoods)
            }
        })
        .catch(error => {
            alert('网络错误，不能访问')
        })

        axios.get('https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods')
        .then(res => {
            if (res.status == 200) {
                commit('TYPE_GOODS_INIT', res.data.data)
            }
        })
        .catch(error => {
            alert('网络错误，不能访问')
        })
    },
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
