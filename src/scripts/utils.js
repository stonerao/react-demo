export const onScrollBottom = (fun) => {
    window.onscroll = () => {
        var t = document.documentElement.scrollTop || document.body.scrollTop; //离上方的距离
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可见宽度
        if (t >= document.documentElement.scrollHeight - h) {
            fun()
        }
    }
}
export const getRequest = (str) => {
    let url = ''
    if (str) {
        url = str
    } else {
        url = window.location.href;
    }
    let theRequest = new Object();
    let href = url.split('?')[0]
    if (url.indexOf("?") != -1) {
        str = url.substr(url.indexOf("?") + 1);
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return {
        href: href,
        parms: theRequest
    };
} 