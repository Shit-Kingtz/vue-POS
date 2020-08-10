import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    topList: [],
}

const getters = {
    topList: state => state.topList,
}

const mutations = {
    TOP_LIST_INIT(state, payload) {
        state.topList = payload
    },
}

const actions = {
    init({ commit }) {
        axios.get('https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods')
        .then(response => {
            if (response.status == 200) {
                commit('TOP_LIST_INIT', response.data.oftenGoods)
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
