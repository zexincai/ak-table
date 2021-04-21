import akTable from './ak-table.vue'

const install = (Vue, options) => {
  if (options) {
    Vue.prototype.$akTableSize = options.size ? options.size : null
  } else {
    Vue.prototype.$akTableSize = null
  }
  Vue.component('akTable', akTable)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(akTable, { install })
