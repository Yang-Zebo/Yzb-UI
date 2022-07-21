import BaseTable from './BaseTable'
import BaseForm from './BaseForm'
export default (Vue) => {
    Vue.component('CommonTable', BaseTable)
    Vue.component('BaseForm', BaseForm)
}