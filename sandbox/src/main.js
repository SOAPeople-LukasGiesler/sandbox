import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

//Style framework
import './../node_modules/bulma/css/bulma.css'

//Components to route to
import home from '@/components/Home'

//Tables
import vbak from '@/components/Tabellen/VBAK'
import vbap from '@/components/Tabellen/VBAP'
import vbep from '@/components/Tabellen/VBEP'
import i18n from './i18n'

//Applications
import RiskEvaluation from '@/components/Applications/RiskEvaluation'
import CreditReports from '@/components/Applications/CreditReports'

//Charts
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'
import VueApexCharts from 'vue-apexcharts'
import VueGoogleCharts from 'vue-google-charts'


//Authentication 
import { domain, clientId } from "../auth_config.json"
import { Auth0Plugin } from "./auth"

//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter)
Vue.use(Donut)
Vue.use(Auth0Plugin, {
  domain,
  clientId, 
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})
Vue.use(VueAxios, axios)
Vue.use(VueGoogleCharts)

const routes = [
  {path: '/home', component: home},
  {path: '/vbak', component: vbak}, 
  {path: '/vbap', component: vbap}, 
  {path: '/vbep', component: vbep},
  {path: '/RiskEvaluation', component: RiskEvaluation}, 
  {path: '/CreditReports', component: CreditReports}
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  i18n,
  data: {
    results: []
  }, 
  mounted() {
    axios.get('https://services.odata.org/V3/Northwind/Northwind.svc/Categories').then(response => {
      this.results = response.data
      console.log(response.data)
    })
  },
  render: h => h(App)
}).$mount('#app')
