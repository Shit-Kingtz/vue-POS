import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/pos'
import store from '@/components/page/store'
import goods from '@/components/page/goods'
import vip from '@/components/page/vip'
import satistics from '@/components/page/satistics'
import settings from '@/components/page/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'POS',
      component: pos,
      alias: '/pos'
    }, {
      path: '/store',
      name: 'store',
      component: store,
    }, {
      path: '/goods',
      name: 'goods',
      component: goods,
    }, {
      path: '/vip',
      name: 'vip',
      component: vip,
    }, {
      path: '/satistics',
      name: 'satistics',
      component: satistics,
    }, {
      path: '/settings',
      name: 'settings',
      component: settings,
    }
  ]
})
