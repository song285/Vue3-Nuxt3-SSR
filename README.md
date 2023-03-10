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
yarn dev -O
```
# 或者
```shell
npm run dev
```

### 第四步 打包-混合渲染模式 使用PM2启动 nginx做代理转发
```shell
npm run build
```

### 第四步 打包-SPA预渲染模式
```shell
npm run generate
```

### 第五步 服务端部署
```shell
pm2 start ecosystem.config.js
```
