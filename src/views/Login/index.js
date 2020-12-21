import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.css';
import Particles from 'react-particles-js';

class Login extends Component {
  componentDidMount() {

  }
  onFinish = values => {
    axios.get(`/users?username=${values.username}&password=${values.password}&roleState=true`).then(res => {
      if (res.data.length > 0) {
        localStorage.setItem("isLogin", "true")
        localStorage.setItem("users", JSON.stringify(res.data[0]))
        this.props.history.push('/')
      } else {
        //失败弹出
        message.error('用户名密码不匹配');
      }
    })
  }
  render() {
    return (
      <div style={{ background: 'rgb(35,39,65)' }}>
        <div className='login-from'>
          <Form
            name='normal_login'
            className="login-form"
            // initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item> */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Particles height={window.innerHeight + 'px'} params={
          {
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
          }
        } />
      </div>
    )
  }
}

export default Login;