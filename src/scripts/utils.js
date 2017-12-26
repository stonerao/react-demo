export const onScrollBottom = (fun) => {
    window.onscroll = () => {
        var t = document.documentElement.scrollTop || document.body.scrollTop; //离上方的距离
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可见宽度
        if (t >= document.documentElement.scrollHeight - h) {
           fun()
        }
    }
}
