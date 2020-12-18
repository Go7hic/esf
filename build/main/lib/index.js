"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFloat = exports.isInteger = exports.isIp = exports.isDomain = exports.isTelePhone = exports.isMobilePhone = exports.sleep = exports.formatSize = exports.downloadImgByName = exports.downloadImg = exports.formatNumberBlank = exports.isNumberLetter = exports.isLowLetter = exports.isBigLetter = exports.isLetter = exports.isCN = exports.isValidUrl = exports.getUrlParams = exports.queryUrlParm = void 0;
/**
 * 获取指定链接里的所有参数
 * @param url
 */
exports.queryUrlParm = (url) => {
    const pattern = /(\w+)=(\w+)/ig;
    const parames = {};
    url.replace(pattern, (_a, b, c) => parames[b] = c);
    return parames;
};
/**
 * 获取url指定参数的值
 * @param name string
 * @param url string
 */
function getUrlParams(name, url) {
    if (URLSearchParams && new URLSearchParams('foo=bar').get('foo') === 'bar') {
        const urlParams = new URLSearchParams(url ? new URL(url).search : window.location.search);
        return urlParams.get(name);
    }
    const yname = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + yname + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url || window.location.href);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
exports.getUrlParams = getUrlParams;
/**
 * 判断一个字符串是不是http?s 链接
 * @param u string
 */
function isValidUrl(u) {
    let url;
    try {
        // tslint:disable-next-line:no-expression-statement
        url = new URL(u);
    }
    catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
exports.isValidUrl = isValidUrl;
/**
 * 判断一个字符串是不是中文
 * @param str string
 */
function isCN(str) {
    return /^[\u4e00-\u9fa5]{0,}$/.test(str);
}
exports.isCN = isCN;
/**
 * 只包含英文字母
 * @param str
 */
function isLetter(str) {
    return /^[A-Za-z]+$/.test(str);
}
exports.isLetter = isLetter;
/**
 * 大写字母
 * @param str
 */
function isBigLetter(str) {
    return /^[A-Z]+$/.test(str);
}
exports.isBigLetter = isBigLetter;
/**
 * 小写字母
 * @param str
 */
function isLowLetter(str) {
    return /^[a-z]+$/.test(str);
}
exports.isLowLetter = isLowLetter;
/**
 * 只包含英文和数字
 * @param str
 */
function isNumberLetter(str) {
    return /^[A-Za-z0-9]+$/.test(str);
}
exports.isNumberLetter = isNumberLetter;
/**
 * 把12个数字字符串格式化为 1111 2222 3333 每四个数字加个空格
 * @param str string
 */
function formatNumberBlank(str) {
    let tmpStr = str;
    if (typeof str !== 'string') {
        tmpStr = String(str);
    }
    const tmpStrArr = tmpStr.split('').map((item, index) => {
        if ((index + 1) % 4 === 0) {
            return item + ' ';
        }
        return item;
    });
    return tmpStrArr.join('').trim();
}
exports.formatNumberBlank = formatNumberBlank;
function downloadImg(href, filename = '') {
    const a = document.createElement('a');
    a.download = filename;
    a.href = href;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
exports.downloadImg = downloadImg;
/**
 * 下载图片，支持自定义下载名称
 * @param url
 * @param filename
 */
function downloadImgByName(url, filename) {
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
exports.downloadImgByName = downloadImgByName;
const units = ['B', 'KB', 'MB', 'GB'];
/**
 * 文件大小单位格式化
 * @param s number
 */
function formatSize(s) {
    let size = s;
    if (!size) {
        return null;
    }
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < units.length; index++) {
        const unit = units[index];
        if (size > 1024) {
            size = Math.floor(size / 1024);
        }
        else {
            return `${size}${unit}`;
        }
    }
    return `${size}TB`;
}
exports.formatSize = formatSize;
/**
 * 延时函数
 * @param ms number
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
/**
 * 是否手机号码
 * @param p
 */
function isMobilePhone(p) {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(p);
}
exports.isMobilePhone = isMobilePhone;
/**
 * 是否固定电话
 * @param p
 */
function isTelePhone(p) {
    return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/.test(p);
}
exports.isTelePhone = isTelePhone;
/**
 * 是否是域名 必须以 / 结尾 https://google.com/
 * @param d
 */
function isDomain(d) {
    return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/.test(d);
}
exports.isDomain = isDomain;
/**
 * 是否IP
 * @param ip
 */
function isIp(ip) {
    return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(ip);
}
exports.isIp = isIp;
/**
 * 整数
 * @param n
 */
function isInteger(n) {
    return /^-?[1-9]\d*$/.test(n);
}
exports.isInteger = isInteger;
/**
 * 浮点数
 * @param n
 */
function isFloat(n) {
    return /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(n);
}
exports.isFloat = isFloat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7R0FHRztBQUNVLFFBQUEsWUFBWSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDMUMsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFBO0lBQy9CLE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQTtJQUN2QixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQU8sRUFBRSxDQUFrQixFQUFFLENBQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzdFLE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixZQUFZLENBQUMsSUFBVyxFQUFFLEdBQVc7SUFFbkQsSUFBSSxlQUFlLElBQUksSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUMxRSxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6RixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDM0I7SUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLG1CQUFtQixDQUFDLENBQUE7SUFDOUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElB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