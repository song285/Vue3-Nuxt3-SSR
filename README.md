# Vite-Vue3-TS-Pinia-Scss-Nuxt3

### 第一步 安装
```shell
git clone https://github.com/song285/Vue3-Nuxt3-SSR.git
```

### 第二步 下载依赖
```shell
npm install
```

### 第三步 运行
```shell
npm run dev
```

### 第四步 打包
```shell
npm run build
```

## 部署教程

Nuxt的部署与vue有出入，主要有两种模式，npm run generate和npm run build

### 方式

##### 一、generate模式
这种模式打包的时候会生成对应的html文件，如果项目中数据涉及到后台接口，那么在打包的时候所有的数据都会注定，后续若接口数据发生改变，页面也不会再变了，适合一些静态站点的项目。

使用generate打包跟之前vue一样，会生成一个dist文件夹，放到服务器即可

##### 二、build模式
1.执行npm run build之后.nuxt文件夹里会生成一个dist文件夹
```shell
npm run build
```

2.将.nuxt、static、package.json、 nuxt.config.js四个文件放入到服务器对应的目录里
3.在服务器对应的目录安装项目依赖npm install
```shell
npm install
```

4.安装完依赖之后 执行npm start 启动项目
```shell
npm start
```

5. 此时项目在3000端口启动，还需要再配置一下nginx

```nginx
// An highlighted block
    server {
        listen       80;
        server_name  localhost;
        location / {
          proxy_pass http://127.0.0.1:3000;
        }
    }
```

6.配置完了重启nginx
```shell
nginx -s reload
```

### pm2 进程守护
PM2 是具有内置负载均衡器的 Node.js 应用程序的生产流程管理器。它允许您使应用程序永远保持活动状态，在不停机的情况下重新加载它们，并促进常见的系统管理任务。详细介绍: https://www.npmjs.com/package/pm2

1. 安装
```shell
npm install -g pm2
```

2. 启动服务。进入到nuxt项目对应的文件夹，执行
```shell
pm2 --name=你的服务名 start npm -- run start
```
!['图片'](https://img-blog.csdnimg.cn/0788809ce1de492ab0e39871c684eab1.png)

3. pm2常用命令
```shell
pm2 list                             查看所有进程
pm2 show 0                           查看进程详细信息，0为PM2进程id 
pm2 stop all                         停止PM2列表中所有的进程
pm2 stop 0                           停止PM2列表中进程为0的进程
pm2 reload all                       重载PM2列表中所有的进程
pm2 reload 0                         重载PM2列表中进程为0的进程
pm2 delete 0                         删除PM2列表中进程为0的进程
pm2 delete all                       删除PM2列表中所有的进程
```