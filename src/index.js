import ReactDOM from 'react-dom'; 
import Routers from './router/index'
import 'babel-polyfill'
import './styles/reset.css'
import './utils'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(Routers, document.getElementById('root'));
registerServiceWorker();
