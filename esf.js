// 数组方法
export const combine = (...arrays) => [].concat(...arrays)

export const compact = arr => arr.filter(Boolean)

export const contains = (() => Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value)
)()

export const difference = (arr, ...others) => {
  const combined = [].concat(...others)
  return arr.filter(el => !combined.some(exclude => el === exclude))
}

export const head = arr => arr[0]

export const initial = arr => arr.slice(0, -1)

export const intersection = (...arrays) =>
  [...new Set([].concat(...arrays))].filter(toFind =>
    arrays.every(arr => arr.some(el => el === toFind))
  )

export const last = arr => arr.slice(-1)[0]

export const sortedIndex = (arr, value) => [value].concat(arr).sort().indexOf(value)

export const tail = arr => arr.slice(1)

export const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))()

export const union = (...arrays) => [...new Set([].concat(...arrays))]

export const unique = arr => [...new Set(arr)]

export const without = (arr, ...values) => arr.filter(el => !values.some(exclude => el === exclude))


// 对象方法
export const getValues = obj => Object.keys(obj).map(key => obj[key])

export const merge = (() => {
  const extend = Object.assign ? Object.assign : (target, ...sources) => {
    sources.forEach(source =>
      Object.keys(source).forEach(prop => target[prop] = source[prop])
    )
    return target
  }
  return (...objects) => extend({}, ...objects)
})()

export const toMap = (() => {
  const convert = obj => new Map(Object.keys(obj).map(key => [key, obj[key]]))
  return obj => obj instanceof Map ? obj : convert(obj)
})()


// math
export const min = arr => Math.min(...arr)

export const max = arr => Math.max(...arr)

export const sum = arr => arr.reduce((a, b) => a + b)

export const product = arr => arr.reduce((a, b) => a * b)

// 处理字符串相关函数
export const queryUrlParm = (url) => {
  const pattern = /(\w+)=(\w+)/ig
  const parames = {}
  url.replace(pattern, (a, b, c) => parames[b] = c)
  return parames
}

export const getUrlParams = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search ? window.location.search.substr(1).match(reg) : null
  if (r != null) return unescape(r[2])
  return null
}


// 一些用于判断的函数
export const isString = value => toString.call(value) === '[object String]'
export const isUndefined = value => value === void 0
export const isObject = value => Object(value) === value
export const isNumber = value => toString.call(value) === '[object Number]'
export const isRegexp = value => toString.call(value) === '[object RegExp]'
export const isNan = value => value !== value
export const isJson = value => toString.call(value) === '[object Object]'
const isWindowObject = value => value != null && typeof value === 'object' && 'setInterval' in value
const freeSelf = isWindowObject(typeof self == 'object' && self) && self
const document = freeSelf && freeSelf.document
// store navigator properties to use later
const navigator = freeSelf && freeSelf.navigator
const appVersion = (navigator && navigator.appVersion || '').toLowerCase()
const userAgent = (navigator && navigator.userAgent || '').toLowerCase()
const vendor = (navigator && navigator.vendor || '').toLowerCase()
const comparator = {
  '<': function (a, b) { return a < b },
  '<=': function (a, b) { return a <= b },
  '>': function (a, b) { return a > b },
  '>=': function (a, b) { return a >= b },
}
// helper function which compares a version to a range
function compareVersion(version, range) {
  const string = (`${range}`)
  const n = Number(string.match(/\d+/) || NaN)
  const op = string.match(/^[<>]=?|/)[0]
  return comparator[op] ? comparator[op](version, n) : (version == n || n !== n)
}

export const isAndroid = () => /android/.test(userAgent)
export const isAndroidPhone = () => /android/.test(userAgent) && /mobile/.test(userAgent)
export const isAndroidTablet = () => /android/.test(userAgent) && !/mobile/.test(userAgent)
export const isChrome = (range) => {
  const match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null
  return match !== null && compareVersion(match[1], range)
}
export const isFirefox = (range) => {
  const match = userAgent.match(/(?:firefox|fxios)\/(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isEdge = (range) => {
  const match = userAgent.match(/edge\/(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isIE = (range) => {
  const match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isMac = () => /mac/.test(appVersion)
export const isTouchDevice = () => Boolean(document) && ('ontouchstart' in freeSelf || ('DocumentTouch' in freeSelf && document instanceof DocumentTouch))
export const isWindows = () => /win/.test(appVersion)

// function decorators
export const not = fn => (...args) => !fn(...args)

export const once = (fn) => {
  let done = false
  return (...args) => {
    if (done) return
    done = true
    fn(...args)
  }
}

export const curry = (fn) => {
  const arity = fn.length
  const curried = (...args) =>
    args.length < arity ? (...more) => curried(...args, ...more) : fn(...args)
  return curried
}

export const pipeline = (...funcs) => value => funcs.reduce((a, b) => b(a), value)
