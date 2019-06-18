// 数组方法
export const combine = (...arrays: any[]) => [].concat(...arrays)

export const compact = (arr: { filter: (arg0: BooleanConstructor) => void; }) => arr.filter(Boolean)

export const contains = (() => Array.prototype.includes
  ? (arr: { includes: (arg0: any) => void; }, value: any) => arr.includes(value)
  : (arr: { some: (arg0: (el: any) => boolean) => void; }, value: any) => arr.some(el => el === value)
)()

export const difference = (arr: { filter: (arg0: (el: any) => boolean) => void; }, ...others: any[]) => {
  const combined = [].concat(...others)
  return arr.filter(el => !combined.some(exclude => el === exclude))
}

export const head = (arr: any[]) => arr[0]

export const initial = (arr: { slice: (arg0: number, arg1: number) => void; }) => arr.slice(0, -1)

export const intersection = (...arrays: any[]) =>
  [...new Set([].concat(...arrays))].filter(toFind =>
    arrays.every(arr => arr.some((el: any) => el === toFind))
  )

export const last = (arr: { slice: (arg0: number) => any[]; }) => arr.slice(-1)[0]

export const sortedIndex = (arr: any, value: any) => [value].concat(arr).sort().indexOf(value)

export const tail = (arr: { slice: (arg0: number) => void; }) => arr.slice(1)

export const toArray = (() => Array.from ? Array.from : (obj: any) => [].slice.call(obj))()

export const union = (...arrays: any[]) => [...new Set([].concat(...arrays))]

export const unique = (arr: Iterable<unknown> | null | undefined) => [...new Set(arr)]

export const without = (arr: { filter: (arg0: (el: any) => boolean) => void; }, ...values: any[]) => arr.filter(el => !values.some(exclude => el === exclude))


// 对象方法
export const getValues = (obj: { [x: string]: any; }) => Object.keys(obj).map(key => obj[key])

export const merge = (() => {
  const extend = Object.assign ? Object.assign : (target: { [x: string]: any; }, ...sources: any) => {
    sources.forEach((source: { [x: string]: any; }) =>
      Object.keys(source).forEach(prop => target[prop] = source[prop])
    )
    return target
  }
  return (...objects: any) => extend({}, ...objects)
})()

export const toMap = (() => {
  const convert = (obj: { [x: string]: any; }) => new Map(Object.keys(obj).map(key => [key, obj[key]]))
  return (obj: { [x: string]: any; }) => obj instanceof Map ? obj : convert(obj)
})()


// math
export const min = (arr: any) => Math.min(...arr)

export const max = (arr: any) => Math.max(...arr)

export const sum = (arr: { reduce: (arg0: (a: any, b: any) => any) => void; }) => arr.reduce((a, b) => a + b)

export const product = (arr: { reduce: (arg0: (a: any, b: any) => number) => void; }) => arr.reduce((a, b) => a * b)

// 处理字符串相关函数
export const queryUrlParm = (url: string) => {
  const pattern = /(\w+)=(\w+)/ig
  const parames: any = {}
  url.replace(pattern, (a: any, b: string | number, c: any) => parames[b] = c)
  return parames
}

export const getUrlParams = (name: any) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search ? window.location.search.substr(1).match(reg) : null
  if (r != null) return unescape(r[2])
  return null
}


// 一些用于判断的函数
export const isString = (value: any) => toString.call(value) === '[object String]'
export const isUndefined = (value: undefined) => value === void 0
export const isObject = (value: any) => Object(value) === value
export const isNumber = (value: any) => toString.call(value) === '[object Number]'
export const isRegexp = (value: any) => toString.call(value) === '[object RegExp]'
export const isNan = (value: any) => value !== value
export const isJson = (value: any) => toString.call(value) === '[object Object]'
const isWindowObject = (value: boolean | Window | null) => value != null && typeof value === 'object' && 'setInterval' in value
const freeSelf: any = isWindowObject(typeof self == 'object' && self) && self
const document = freeSelf && freeSelf.document
// store navigator properties to use later
const navigator = freeSelf && freeSelf.navigator
const appVersion = (navigator && navigator.appVersion || '').toLowerCase()
const userAgent = (navigator && navigator.userAgent || '').toLowerCase()
const vendor = (navigator && navigator.vendor || '').toLowerCase()
const comparator: any = {
  '<': function (a: number, b: number) { return a < b },
  '<=': function (a: number, b: number) { return a <= b },
  '>': function (a: number, b: number) { return a > b },
  '>=': function (a: number, b: number) { return a >= b },
}
// helper function which compares a version to a range
function compareVersion(version: number, range: any) {
  const string: any = (`${range}`)
  const n = Number(string.match(/\d+/) || NaN)
  const op = string.match(/^[<>]=?|/)[0]
  return comparator[op] ? comparator[op](version, n) : (version == n || n !== n)
}

export const isAndroid = () => /android/.test(userAgent)
export const isAndroidPhone = () => /android/.test(userAgent) && /mobile/.test(userAgent)
export const isAndroidTablet = () => /android/.test(userAgent) && !/mobile/.test(userAgent)
export const isChrome = (range: any) => {
  const match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null
  return match !== null && compareVersion(match[1], range)
}
export const isFirefox = (range: any) => {
  const match = userAgent.match(/(?:firefox|fxios)\/(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isEdge = (range: any) => {
  const match = userAgent.match(/edge\/(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isIE = (range: any) => {
  const match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/)
  return match !== null && compareVersion(match[1], range)
}
export const isMac = () => /mac/.test(appVersion)
export const isTouchDevice = () => Boolean(document) && ('ontouchstart' in freeSelf || ('DocumentTouch' in freeSelf))
export const isWindows = () => /win/.test(appVersion)

// function decorators
export const not = (fn: any) => (...args: any) => !fn(...args)

export const once = (fn: any) => {
  let done = false
  return (...args: any) => {
    if (done) return
    done = true
    fn(...args)
  }
}

export const curry = (fn: any) => {
  const arity = fn.length
  const curried = (...args: any[]) =>
    args.length < arity ? (...more: any) => curried(...args, ...more) : fn(...args)
  return curried
}

export const pipeline = (...funcs: any) => (value: any) => funcs.reduce((a: any, b: (arg0: any) => void) => b(a), value)
