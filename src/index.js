import ReactDOM from 'react-dom';
import Routers from './router/index'
import 'babel-polyfill'
import './styles/reset.css'
import './styles/index.css'
import './scripts/rem' 
import registerServiceWorker from './registerServiceWorker';
// redux
ReactDOM.render(Routers, document.getElementById('root'));
registerServiceWorker();
