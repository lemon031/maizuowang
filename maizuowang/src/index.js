import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//引入store
import store from './redux/store.js'

//引入Provider组件(可以让容器拿到state)
import { Provider } from 'react-redux';

function render(){
    ReactDOM.render(
        <Provider store={store}>
             <App />
        </Provider>, 
        document.getElementById('root')
    );
}
//调用渲染页面方法
render();

store.subscribe(render);

registerServiceWorker();
