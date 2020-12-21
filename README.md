# 前言
一个create-react-app搭建的react管理后台系统
antd、react-router、redux
<a name="LilP8"></a>
# 启动
```typescript
npm run start
```
<a name="bmVSl"></a>
# 数据
里面的数据都是在根目录下的 db.json 里面<br />用 **mockjs **模拟的假数据 <br />**安装：mock.js**
```typescript
npm   install    mock.js   -save
```
**安装 json-server**
```typescript
npm   install    json-server   -g
```
**根目录下启动  :**
```typescript
json-server  --watch   db.json --port 8002
```
**账号和密码**<br />**
<br />账号：admin
<br />密码：123456
