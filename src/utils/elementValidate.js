//适用element-ui库 的自定义校验方法

// 是否为大陆手机号
export function isPhone(rule, value, callback) {
  const reg = /^1[3|4|5|7|8]\d\d{8}$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

/* 只能是大小写字母*/
export function isAlphabets(rule, value, callback) {
  const reg = /^[A-Z\sa-z\d-_]+$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback('请输入大小写字母')
  } else {
    callback()
  }
}

// 验证是否是正整数
export function isInteger(rule, value, callback) {
  const reg = /^[1-9]\d*$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('请输入正整数'))
  } else {
    callback()
  }
}

// 验证是否是非负整数
export function isIntegerAndZero(rule, value, callback) {
  if (value === undefined || value === '') {
    return callback(new Error('输入不可以为空'))
  }
  const reg = /^\d*$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('请输入大于0的整数'))
  } else {
    callback()
  }
}

// 是否为非负数 (>= 0)
export function notNegative(rule, value, callback) {
  const reg = /^[+]?(\d+)$|^[+]?(\d+\.\d+)$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('请输入非负数'))
  } else {
    callback()
  }
}

// 是否为大于 0 的数 (> 0)
export function isMoreZero(rule, value, callback) {
  const reg = /^((\d+\.\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d*[1-9]\d*))$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('请输入大于0的数'))
  } else {
    callback()
  }
}

// 是否是金额
export function isMoney(rule, value, callback) {
  const reg = /(?:^[1-9](\d+)?(?:\.\d{1,2})?$)|(?:^(?:0)$)|(?:^\d\.\d(?:\d)?$)/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('金额格式错误'))
  } else {
    callback()
  }
}

// 只能是数字和字母和下划线
export function isCommonCharacters(rule, value, callback) {
  if (value === undefined || value === '') {
    return callback()
  }
  const reg = /^\w+$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback(new Error('只能输入数字、字母和下划线'))
  } else {
    callback()
  }
}

/* 邮件*/
export function isEmail(rule, value, callback) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback('请输入正确的Email')
  } else {
    callback()
  }
}

// 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
export function isRobust(rule, value, callback) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
  const rsCheck = reg.test(value)
  if (!rsCheck) {
    callback('至少8-16个字符，至少存在1个大写字母，1个小写字母和1个数字')
  } else {
    callback()
  }
}

