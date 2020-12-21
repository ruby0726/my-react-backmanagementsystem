import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
// 做好缓存  跑起来更快
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:8002/' : 'http://192.168.8.100:8002/'

// ReactDOM.render("根组件"，'节点')
// new Vue({}).$mount("#root")
//jsx ===>js+xml
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister()
