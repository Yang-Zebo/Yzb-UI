// 校验规则

// 合法uri
export function isURL(value) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z\d.-]+(:[a-zA-Z\d.&%$-]+)*@)*((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d?)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}|([a-zA-Z\d-]+\.)*[a-zA-Z\d-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:\d+)*(\/($|[a-zA-Z\d.,?'\\+&%$#=~_-]+))*$/
  return reg.test(value)
}

// 小写字母
export function isLowerCase(value) {
  const reg = /^[a-z]+$/
  return reg.test(value)
}

// 大写字母
export function isUpperCase(value) {
  const reg = /^[A-Z]+$/
  return reg.test(value)
}


// 验证邮箱

export function isEmail(value) {
  const reg = /^([a-zA-Z\d_-])+@([a-zA-Z\d_-])+(.[a-zA-Z\d_-])+/
  return reg.test(value)
}

// 验证是否是整数
export function isIntAndZero(value) {
  return /^\d*$/.test(value)
}

// 手机号验证
export function isPhone(value) {
  const reg = /^1[3|4|5|7|8|9]\d\d{8}$/
  return reg.test(value)
}

// 只能是大小写英文
export function isChinese(value) {
  const reg = /^\w+$/g
  return reg.test(value)
}

//输入中英文下划线和数字
export function isReasonableText(value) {
  return /^[\u4e00-\u9fa5_a-zA-Z\d]+$/.test(value)
}

// 验证非正整数（负整数和零）
export function isNegativeAndZero(val) {
  return /^((-\d+)|(0+))$/.test(val)
}

// 验证是否是正整数
export function isInt(num) {
  return /^[1-9]\d*$/.test(num)
}

// 是否为金额
export function validateNotNegative(value) {
  return /(?:^[1-9](\d+)?(?:\.\d{1,2})?$)|(?:^(?:0)$)|(?:^\d\.\d(?:\d)?$)/.test(
    value + ''
  )
}
