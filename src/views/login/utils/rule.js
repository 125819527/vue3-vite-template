import { reactive } from 'vue'

/** 密码正则（密码格式应为6-10位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD = /^[A-Za-z0-9]{6,10}$/

export const REGEXP_MOBILE = /^1[0-9]{10}$/

/** 登录校验 */
const loginRules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号/电话号码/邮箱',
      trigger: 'blur'
    }
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!REGEXP_PWD.test(value)) {
          callback(new Error('密码格式应为6-10位数字、字母任意组合'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})

const registerRules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!REGEXP_PWD.test(value)) {
          callback(new Error('密码格式应为6-10位数字、字母任意组合'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    },
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  nickName: [
    {
      required: true,
      message: '请输入昵称',
      trigger: 'blur'
    }
  ],

  email: [
    {
      required: true,
      message: '请输入邮箱地址',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系方式'))
        } else if (!REGEXP_MOBILE.test(value)) {
          callback(new Error('请输入中国合法的联系方式，以1开头的11位号码'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    },
    {
      required: true,
      message: '请输入联系方式',
      trigger: 'blur'
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change'
    }
  ],
  age: [
    {
      required: true,
      message: '请输入年龄',
      trigger: 'blur'
    }
  ],
  birthday: [
    {
      required: true,
      message: '请输入生日日期',
      trigger: 'change'
    }
  ]
})

export { loginRules, registerRules }
