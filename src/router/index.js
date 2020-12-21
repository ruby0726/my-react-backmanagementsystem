//just Component 万物皆组件，把所有路由模块，重定向都做成了组件
// react-router-dom 4.5 版本写法一致
import React, { Component } from 'react'
import {
  BrowserRouter as Router, //路由外层需要包裹的组件  history模式
  Route,
  Switch, //匹配到第一个符合条件路径的组件，就停止了
  Redirect
} from 'react-router-dom'
import Login from '../views/Login/index'
import DashBorad from '../views/DashBorad/index'

// 函数式组件
const BlogRouter = function () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' render={() =>
          (localStorage.getItem('isLogin') === 'true' ? <DashBorad></DashBorad> : <Redirect to='/login' />)} />
      </Switch>
    </Router >
  )
}

export default BlogRouter;