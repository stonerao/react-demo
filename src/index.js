import ReactDOM from 'react-dom';
import './index.css';  
import Routers from './router/index'
import registerServiceWorker from './registerServiceWorker'; 
ReactDOM.render(Routers, document.getElementById('root'));
registerServiceWorker();
