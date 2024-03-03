import { reactive } from 'vue'

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD = /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z\d]{8,18}$/

/** 登录校验 */
const loginRules = reactive({
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
          callback(new Error('密码格式应为8-18位数字、字母任意组合'))
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
          callback(new Error('密码格式应为8-18位数字、字母任意组合'))
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
    { required: true, message: '请输入联系方式' },
    { type: 'number', message: '请输入正确联系方式' }
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
