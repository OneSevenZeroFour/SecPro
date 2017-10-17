# SecPro
##youyou应用商店 组员 刘美 袁泽林 邱旭清 杨培钦 

###Ammy部分注意事项
####1.复用组件
#####方法1：
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：
```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```
#####方法2：
给<router-view></router-view>添加一个key，能不能解决这个问题呢？答案是可以的（废话-_-||） 可以这样来：

```js
<router-view :key="key"></router-view>
computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
 }
 ```
 
　使用computed属性和Date()可以保证每一次的key都是不同的，这样就可以如愿刷新数据了。

2.api限流,每秒钟只能发送一次请求；使用延时器发送请求; 
#####方法3：
小组git    git add . ===>git commit -m"备注" ===>git pull (小组其他已提交自己未更新部分) ===>git push
