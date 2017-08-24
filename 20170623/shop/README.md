#ajax动态商城网站系统
##第一天，使用ajax尝试开发动态网站, 需求分析, 熟悉阶段
- 样式不限，但是布局有要求，至少要能够正常的显示出内容
- 功能模块
  - 注册
  - 登录
  - 搜索商品
  - 首页显示热门商品
  - 商品详情
  - 加入购物车
  - 购物车管理
  - 结算
    - 收货人信息（包括地址）
    - 支付方式
  - 提交订单
  - 查看订单
  - 取消订单
- js部分
  - 表单验证
  - ajax进行用户名验证
  - 存储用户的信息在本地
  - ajax请求接口并展示数据
  - ajax使用post请求，提交数据
  - jsonp
- API文档
- 使用postman可以测试api
- 第一天的任务：
  - 首页获取商品分类, UI无要求
  - 首页获取的热门商品(图片使用img标签，并设置src属性即可)： UI无要求
  - 商品列表页显示当前分类下的商品：UI无要求
  - 商品详情页显示商品的详情：UI无要求
  - 搜索商品
- 第二天的任务：
  - 注册
  - 登录
  - 加入购物车
  - 管理购物车
- 第三天的任务：
  - 结算
  - 提交订单
  - 查看订单
  - 取消订单
- 第四天的任务：
  - 优化代码
- 第五天的任务：
  - 优化代码
- 文件结构
  - 首页
  - 列表页
  - 详情页
- 页面跳转
- 交互图-原形图-高保真图 https://pro.modao.cc/app/mYwsQqBOX3AMj5aEPj5ktoEaKfwLQkf


##第二天, 项目组织结构，模板引擎封装，ajax分页, post请求注册登录，加入购物车
###项目组织结构
index.html 首页
list.html 列表页
detail.html 详情页
search.html 搜索页
cart.html 购物车页
order.html 订单页

styles 放所有的样式
  style.css 通用的样式
  reset.css 抹平所有浏览器的不同
  index.css 页面样式，首页特定的样式
  list.css 页面样式，首页特定的样式
  detail.css 页面样式，首页特定的样式
scripts 放所有的脚本
  changkun.js 通用的基础脚本库（ajax方法，getQueryString方法）
  index.js 首页的脚本

###模板引擎封装
