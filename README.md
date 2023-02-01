# regexp-bundles

<br>
<br>
<p align="center">
 <b>A bundle of regexp.</b>
</p>

<br>
<p align="center">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/regexp-bundles?label=size&style=flat-square">
<img alt="GitHub" src="https://img.shields.io/github/license/javascriptfield/regexp-bundles?style=flat-square">
<img alt="npm" src="https://img.shields.io/npm/dw/regexp-bundles?style=flat-square">
</p>
<br>
<br>
<br>

## Usage

### Install

```sh
# npm
npm i regexp-bundles
# yarn 
yarn add regexp-bundles
# pnpm
pnpm add regexp-bundles
```

#### Full Import

```js
import * as MyRegExp from 'regexp-bundles'
const IDCardRegExp = MyRegExp.IDCardNumber
```

#### On-demand Import

```js
import { IDCardNumber } from 'regexp-bundles'
const IDCardRegExp = IDCardNumber
```

## Docs

* Chinese：中文
* contactNumber：手机和座机组合校验
* mobileNumber：手机号
* phoneNumber：座机
* emailAddress：邮箱地址
* taxNumber：传真号码
* IDCardNumber：身份证
* ENZH：中文和英文
* postCode：邮编
* USCI：统一社会信用代码
* integer：非负整数（正整数和0）
* positiveInteger：正整数
* numeral：非负整数（正整数和0）
* digit：0-100之间保留两位小数
* twoDecimalNumber：正两位小数
* twoNumber：正整数，正小数（小数位不超过2位）
* positiveNumber：正数
* URL：网址URL
* password：密码 (8-16位之间 且 必须包含大、小写字母和数字，可以使用特殊字符)
* moneyValidator：金额校验
* percentageValidator：0-100包含小数（一般用于百分比校验）
* special：特殊字符

## LICENSE

[MIT](/LICENSE)
