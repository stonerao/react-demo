/* key */
export const key = '899105c65896c0c96332ba5c11064136';
/* url data function */
export const urlData = (url, data) => {
    let datas = '';
    if (typeof data === 'object') {
        datas = "?";
        for (let key in data) { 
            datas += `${key}=${data[key]}&`;
        }
        if (datas[datas.length - 1] === '&') {
            datas = datas.substring(0, datas.length - 1);
        }
    };
    return url + datas
}