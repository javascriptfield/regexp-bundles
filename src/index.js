// 手机和座机
const contactNumber = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/
// 手机号
const mobileNumber= /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
// 邮箱
const emailAddress= /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
// 座机
const phoneNumber= /\d{3}-\d{7,8}|\d{4}-\d{7,8}/
// 传真号码
const taxNumber= /^(?:\d{3,4}-)?\d{7,8}(?:-\d{1,6})?$/
// 身份证
const IDCardNumber= /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$/
// 中文
const Chinese= /^[\u4E00-\u9FA5]+$/
// 中文和英文
const ENZH= /^[\u4e00-\u9fa5_a-zA-Z]+$/
// 邮编
const postCode= /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
// 统一社会信用代码
const USCI= /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g
// 非负整数（正整数和0）
const integer= /^\d+$/
// 正整数
const positiveInteger= /^[1-9]\d*$/
// 数字(正数)
const numeral= /^[0-9]+(.[0-9]\d*)?$/
// 0-100之间保留两位小数
const digit= /^(100)$|^((\d|[1-9]\d)(\.\d{1,2})?)$/
// 正两位小数
const twoDecimalNumber= /^[0-9]+(.[0-9]{2})?$/
// 正整数，正小数（小数位不超过2位）
const twoNumber= /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
// 正数
const positiveNumber= /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
// 网址URL
const URL= /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
// 密码 (8-16位之间 且 必须包含大、小写字母和数字，可以使用特殊字符)
const password= /^(?=^.{8,16}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
// 金额校验
const moneyValidator= /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
// 0-100包含小数
const percentageValidator= /^((\d|[1-9]\d)(?:\.\d{1,})?|100)$/
// 特殊字符
const special= /^((?!<|>|~|@|\|^|&|%|#).)*$/
export {
  contactNumber,
  mobileNumber,
  emailAddress,
  phoneNumber,
  taxNumber,
  IDCardNumber,
  Chinese,
  ENZH,
  postCode,
  USCI,
  integer,
  positiveInteger,
  numeral,
  digit,
  twoDecimalNumber,
  twoNumber,
  positiveNumber,
  URL,
  password,
  moneyValidator,
  percentageValidator,
  special
}
