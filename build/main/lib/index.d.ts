/**
 * 获取指定链接里的所有参数
 * @param url
 */
export declare const queryUrlParm: (url: string) => any;
/**
 * 获取url指定参数的值
 * @param name string
 * @param url string
 */
export declare function getUrlParams(name: string, url?: string): any;
/**
 * 判断一个字符串是不是http?s 链接
 * @param u string
 */
export declare function isValidUrl(u: string): boolean;
/**
 * 判断一个字符串是不是中文
 * @param str string
 */
export declare function isCN(str: string): boolean;
/**
 * 只包含英文字母
 * @param str
 */
export declare function isLetter(str: string): boolean;
/**
 * 大写字母
 * @param str
 */
export declare function isBigLetter(str: string): boolean;
/**
 * 小写字母
 * @param str
 */
export declare function isLowLetter(str: string): boolean;
/**
 * 只包含英文和数字
 * @param str
 */
export declare function isNumberLetter(str: string): boolean;
/**
 * 把12个数字字符串格式化为 1111 2222 3333 每四个数字加个空格
 * @param str string
 */
export declare function formatNumberBlank(str: string): string;
export declare function downloadImg(href: string, filename?: string): void;
/**
 * 下载图片，支持自定义下载名称
 * @param url
 * @param filename
 */
export declare function downloadImgByName(url: string, filename?: string): void;
/**
 * 文件大小单位格式化
 * @param s number
 */
export declare function formatSize(s: number): any;
/**
 * 延时函数
 * @param ms number
 */
export declare function sleep(ms: number): Promise<any>;
/**
 * 是否手机号码
 * @param p
 */
export declare function isMobilePhone(p: string): boolean;
/**
 * 是否固定电话
 * @param p
 */
export declare function isTelePhone(p: string): boolean;
/**
 * 是否是域名 必须以 / 结尾 https://google.com/
 * @param d
 */
export declare function isDomain(d: string): boolean;
/**
 * 是否IP
 * @param ip
 */
export declare function isIp(ip: string): boolean;
/**
 * 整数
 * @param n
 */
export declare function isInteger(n: string): boolean;
/**
 * 浮点数
 * @param n
 */
export declare function isFloat(n: string): boolean;
