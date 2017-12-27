import 'whatwg-fetch'
import { key, urlData } from './store' 
let store = {
    list(menu, pn, size) {
        fetch(urlData('/cook/query.php', {
            menu: menu,
            pn: pn,
            rn: pn+29,
            key: key
        })).then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        }).then((data) => {
            if (data.resultcode === '200') {
                this.setState({
                    todayRecommendList:[...this.state.todayRecommendList,...data.result.data] ,
                    totalNum:parseInt(data.result.totalNum),
                    pn:pn+29
                })
            }else{
                console.log(this.state.todayRecommendList)
            }
        })
    },
    navList(id) {
        fetch(urlData('/cook/index', {
            cid: id,
            key: key
        })).then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        }).then((data) => {
            if (data.resultcode === '200') {
                this.setState({ recommendList: data.result.data })
            }
        })
    },
    infos(id){
        fetch(urlData('/cook/queryid', {
            id: id,
            key: key
        })).then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        }).then((data) => {
            if (data.resultcode === '200') {
                console.log(data)
                this.setState({info:data.result.data[0]})
            }
        })
    }
}
export default store;
