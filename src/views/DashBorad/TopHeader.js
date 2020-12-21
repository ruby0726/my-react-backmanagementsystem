import React, { Component } from 'react'
import { Layout } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import './index.css';
const { Header } = Layout;
class TopHeader extends Component {
  state = {
    collapsed: false,
    path: ''
  }
  
  // 退出登录
  exit = () => {
    // console.log('11111')
    localStorage.setItem('isLogin', false)
    localStorage.setItem('users', {})
    // 重定向
    this.props.history.push('/login')
  } 

  toggle = (iscollapsed) => {
    this.props.actionCreator(iscollapsed)
    // 发布者
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let roleName = JSON.parse(localStorage.getItem("users")).roleName, userName = JSON.parse(localStorage.getItem("users")).username;
    const menu = (<Menu>
      <Menu.Item>
        <span>{roleName}</span>
      </Menu.Item>
      <Menu.Item>
        <div onClick={this.exit}>退出</div>
      </Menu.Item>
    </Menu>)
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {
          this.state.collapsed ? <MenuUnfoldOutlined className='triggi' onClick={() => this.toggle(false)
          } /> : <MenuFoldOutlined className='triggi' onClick={() => this.toggle(true)} />
        }
        <div style={{ float: 'right', margin: '0px 40px' }}>
          <span>欢迎回来 {userName}</span>
          <Dropdown overlay={menu} >
            {/* <Avatar size={32} icon={<UserOutlined />} />
                     */}
            <img src={this.setState.path} style={{ width: '40px', height: '40px', borderRadius: "50%" }} />
          </Dropdown>
        </div>
      </Header>
    )
  }
}
// state映射成属性使用
const mapStateToprops = () => {
  return {

  }
}
//把方法映射成属性用
const mapDispathToProps = {
  actionCreator: (iscollapsed) => {
    // ajax请求数据  动态计算action
    return {
      type: 'sideMenuShow',
      payload: iscollapsed
    }
  }
}
export default withRouter(connect(mapStateToprops, mapDispathToProps)(TopHeader))