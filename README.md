## cnfapi-miniprogram
----------------------------
author: bugszhou | Email:bugszhou@outlook.com <br>
description: A lib project with ziu

cnfapi-miniprogram是基于promise的小程序http库，可以用在微信小程序，支付宝小程序和百度小程序

### Features

* 支持 promise API
* 拦截请求和响应
* 自动转换 JSON 数据

### 安装

```shell
npm install -S cnfapi-miniprogram
```

### Example

```javascript
import Api from 'cnfapi-miniprogram';

const api = new Api({
  baseURL: 'https://prj1.demo.com',
  env: 'weapp', // 使用环境：weapp - 微信小程序、aliapp - 支付宝小程序、swan - 百度小程序
  timeout: 10000, // 10s超时
  headers: {
    'Content-Type': 'application/json',
  },
  resSuccessCallback(data, next) {
    // next接受3个参数
    // 第一个参数是代表error
    // 第二个参数是代表传递给 resolve 的数据
    // 第三个参数是自定义数据
    if (data.code === 200) {
      next(null, data.data, data.code);
    } else {
      next({
        msg: data.msg,
        retcode: data.code,
      }, {}, data.code);
    }
  },
  // 是否开启response拦截器
  openResInterceptor(res) {
    return true;
  },
  // response拦截器处理函数
  // openResInterceptor返回true执行方法
  resInterceptor(next) {
    next();
  },
}, {
     getList: {
       interval: 2000, // 每隔2秒重试一次
       retryTimes: 10, // 重试10次
       apiName: '/test/prj/getList', // 接口pathurl
       desc: '', // 接口描述
       method: 'POST',
       params: {
         // post参数
         post: [{
            param: 'param1', // 参数名
            isNeed: 1, // 是否必须 1 为必须、0为非必须
         }],
         // get参数
         get: [{
           param: 'param2', // 参数名
           isNeed: 0, // 是否必须 1 为必须、0为非必须
        }],
       },
     },
     // restful模式
     getOrders: {
       interval: 2000, // 每隔2秒重试一次
       retryTimes: 10, // 重试10次
       apiName: '/test/prj/getOrders/{orderid}', // 接口pathurl
       desc: '', // 接口描述
       method: 'POST',
       params: {},
     },
   });

   // http请求调用方式
   // 1. 常规方式
   api.getList({
     getRequestTask: (tesk) => {}, // 获取请求任务对象task，task对象可对中断请求任务等功能
     data: {
       param1: 'param1',
       param2: 'param2',
     }
   })
   .then(({ data }) => {
     // 服务端数据
     console.log(data);
   })
   .catch(err => {
     console.log(err);
   });
   // 2. restful方式
   api.getOrders({
     restful: {
       orderid: 'param1',
     }
   })
   .then(({ data }) => {
     // 服务端数据
     console.log(data);
   })
   .catch(err => {
     console.log(err);
   });

```

- task功能[点击查看](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html)

### request拦截器

```javascript
api._before = function _before(apiOpts, apiConf, next) {
  // apiOpts为调用时传入的参数，如：
  /*
  {
    data: {
      param1: 123
    }
  }
  */
  // apiConf 该接口调用的配置参数
  // 可在_before内对参数做处理，例如：对参数做签名保护
  next(apiOpts);
};
```

### 钩子函数

1. 发送请求前`cnfapi:req:before`

```javascript
api.on('cnfapi:req:before', (data) => {
    // 业务逻辑
});
```

2. 请求成功`cnfapi:res:resolve`

```javascript
api.on('cnfapi:res:resolve', (data) => {
    // 业务逻辑
});
```

3. 请求reject`cnfapi:res:reject`

```javascript
api.on('cnfapi:res:reject', (data) => {
    // 业务逻辑
});
```

4. 请求发生错误`cnfapi:res:catch`

```javascript
api.on('cnfapi:res:catch', (data) => {
    // 业务逻辑
});
```

