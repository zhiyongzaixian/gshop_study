import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})



VeeValidate.Validator.extend('code', {
  validate: value => {
    return /^\d{4,6}$/.test(value)
  },
  getMessage: field => field + '必须是4-6位的数字'
})
