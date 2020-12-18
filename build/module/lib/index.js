/**
 * 获取指定链接里的所有参数
 * @param url
 */
export const queryUrlParm = (url) => {
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
export function getUrlParams(name, url) {
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
/**
 * 判断一个字符串是不是http?s 链接
 * @param u string
 */
export function isValidUrl(u) {
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
/**
 * 判断一个字符串是不是中文
 * @param str string
 */
export function isCN(str) {
    return /^[\u4e00-\u9fa5]{0,}$/.test(str);
}
/**
 * 只包含英文字母
 * @param str
 */
export function isLetter(str) {
    return /^[A-Za-z]+$/.test(str);
}
/**
 * 大写字母
 * @param str
 */
export function isBigLetter(str) {
    return /^[A-Z]+$/.test(str);
}
/**
 * 小写字母
 * @param str
 */
export function isLowLetter(str) {
    return /^[a-z]+$/.test(str);
}
/**
 * 只包含英文和数字
 * @param str
 */
export function isNumberLetter(str) {
    return /^[A-Za-z0-9]+$/.test(str);
}
/**
 * 把12个数字字符串格式化为 1111 2222 3333 每四个数字加个空格
 * @param str string
 */
export function formatNumberBlank(str) {
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
export function downloadImg(href, filename = '') {
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
export function downloadImgByName(url, filename) {
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
const units = ['B', 'KB', 'MB', 'GB'];
/**
 * 文件大小单位格式化
 * @param s number
 */
export function formatSize(s) {
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
/**
 * 延时函数
 * @param ms number
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * 是否手机号码
 * @param p
 */
export function isMobilePhone(p) {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(p);
}
/**
 * 是否固定电话
 * @param p
 */
export function isTelePhone(p) {
    return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/.test(p);
}
/**
 * 是否是域名 必须以 / 结尾 https://google.com/
 * @param d
 */
export function isDomain(d) {
    return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/.test(d);
}
/**
 * 是否IP
 * @param ip
 */
export function isIp(ip) {
    return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(ip);
}
/**
 * 整数
 * @param n
 */
export function isInteger(n) {
    return /^-?[1-9]\d*$/.test(n);
}
/**
 * 浮点数
 * @param n
 */
export function isFloat(n) {
    return /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/.test(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQzFDLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQTtJQUMvQixNQUFNLE9BQU8sR0FBUSxFQUFFLENBQUE7SUFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFPLEVBQUUsQ0FBa0IsRUFBRSxDQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3RSxPQUFPLE9BQU8sQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFXLEVBQUUsR0FBVztJQUVuRCxJQUFJLGVBQWUsSUFBSSxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO1FBQzFFLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3pGLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUMzQjtJQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsQ0FBQTtJQUM5RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztLQUFFO0lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBQy9CLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUMzRCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFRO0lBQ2pDLElBQUksR0FBTyxDQUFBO0lBQ1gsSUFBSTtRQUNGLG1EQUFtRDtRQUNuRCxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDakI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFBO0FBQzlELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUFDLEdBQVU7SUFDN0IsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDMUMsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBVztJQUNsQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDaEMsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUdEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsR0FBVztJQUN4QyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNuQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFFLEdBQVc7SUFDNUMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ2hCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDckI7SUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFBO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDLENBQUMsQ0FBQTtJQUNGLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUNsQyxDQUFDO0FBSUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFXLEVBQUUsUUFBUSxHQUFHLEVBQUU7SUFDcEQsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN0QixDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNiLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQVUsRUFBRSxRQUFnQjtJQUM1RCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07U0FDakMsQ0FBQztRQUNGLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztTQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUdELE1BQU0sS0FBSyxHQUF1QixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3pEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUUsQ0FBUTtJQUNsQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUE7SUFDWixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELHlDQUF5QztJQUN6QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFBO1NBQ3hCO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUE7QUFDcEIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBVTtJQUM5QixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFHRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLENBQVM7SUFDckMsT0FBTyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUMsQ0FBQztBQUdEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBUztJQUNuQyxPQUFPLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNsRCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFTO0lBQ2hDLE9BQU8sZ0dBQWdHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pILENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUFDLEVBQVM7SUFDNUIsT0FBTywyRUFBMkUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDN0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBUztJQUNqQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDL0IsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBUztJQUMvQixPQUFPLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM5RCxDQUFDIn0=