/**
 * 获取指定链接里的所有参数
 * @param url
 */
export const queryUrlParm = (url: string) => {
  const pattern = /(\w+)=(\w+)/ig
  const parames: any = {}
  url.replace(pattern, (_a: any, b: string | number, c: any) => parames[b] = c)
  return parames
}

/**
 * 获取url指定参数的值
 * @param name string
 * @param url string
 */
export function getUrlParams(name:string, url?:string):any {

  if (URLSearchParams && new URLSearchParams('foo=bar').get('foo') === 'bar') {
    const urlParams = new URLSearchParams(url ? new URL(url).search : window.location.search)
    return urlParams.get(name)
  }
  const yname = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + yname + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url || window.location.href)
  if (!results) { return null; }
  if (!results[2]) { return ''; }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 判断一个字符串是不是http?s 链接
 * @param u string
 */
export function isValidUrl(u:string):boolean {
  let url:URL
  try {
    // tslint:disable-next-line:no-expression-statement
    url = new URL(u)
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:"
}

/**
 * 判断一个字符串是不是中文
 * @param str string
 */
export function isCN(str:string):boolean {
  return /^[\u4e00-\u9fa5]{0,}$/.test(str)
}

/**
 * 只包含英文字母
 * @param str
 */
export function isLetter(str: string): boolean {
  return /^[A-Za-z]+$/.test(str)
}

/**
 * 大写字母
 * @param str
 */
export function isBigLetter(str: string): boolean {
  return /^[A-Z]+$/.test(str)
}

/**
 * 小写字母
 * @param str
 */
export function isLowLetter(str: string): boolean {
  return /^[a-z]+$/.test(str)
}


/**
 * 只包含英文和数字
 * @param str
 */
export function isNumberLetter(str: string):boolean {
  return /^[A-Za-z0-9]+$/.test(str)
}

/**
 * 把12个数字字符串格式化为 1111 2222 3333 每四个数字加个空格
 * @param str string
 */
export function formatNumberBlank (str: string):string {
  let tmpStr = str
  if (typeof str !== 'string') {
    tmpStr = String(str)
  }
  const tmpStrArr = tmpStr.split('').map((item, index) => {
    if ((index + 1) % 4 === 0) {
      return item + ' '
    }
    return item
  })
  return tmpStrArr.join('').trim()
}



export function downloadImg(href:string, filename = ''):void {
  const a = document.createElement('a');
  a.download = filename;
  a.href = href;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
/**
 * 下载图片，支持自定义下载名称
 * @param url
 * @param filename
 */
export function downloadImgByName(url:string, filename?:string):void {
  fetch(url, {
    headers: new Headers({
        Origin: window.location.origin,
    }),
    mode: 'cors',
  })
    .then(res => res.blob())
    .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        downloadImg(blobUrl, filename);
        window.URL.revokeObjectURL(blobUrl);
    });
}


const units: ReadonlyArray<any> = ['B', 'KB', 'MB', 'GB']
/**
 * 文件大小单位格式化
 * @param s number
 */
export function formatSize (s:number):any {
  let size = s
  if (!size) {
    return null
  }
  // tslint:disable-next-line:prefer-for-of
  for (let index = 0; index < units.length; index++) {
    const unit = units[index]
    if (size > 1024) {
      size = Math.floor(size / 1024)
    } else {
      return `${size}${unit}`
    }
  }
  return `${size}TB`
}

/**
 * 延时函数
 * @param ms number
 */
export function sleep(ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * 是否手机号码
 * @param p
 */
export function isMobilePhone(p: string):boolean {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(p)
}


/**
 * 是否固定电话
 * @param p
 */
export function isTelePhone(p: string): boolean {
  return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/.test(p)
}

/**
 * 是否是域名 必须以 / 结尾 https://google.com/
 * @param d
 */
export function isDomain(d: string):boolean {
  return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/.test(d)
}

/**
 * 是否IP
 * @param ip
 */
export function isIp(ip:string):boolean {
  return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(ip)
}

/**
 * 整数
 * @param n
 */
export function isInteger(n: string):boolean {
  return /^-?[1-9]\d*$/.test(n)
}

/**
 * 浮点数
 * @param n
 */
export function isFloat(n: string):boolean {
  return /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(n)
}

