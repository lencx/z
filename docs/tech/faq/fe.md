# 前端问题汇总

## yarn

### There appears to be trouble with your network connection. Retrying...

```bash
#查看代理
yarn config list
#删除代理
yarn config delete proxy
npm config rm proxy
npm config rm https-proxy
#安装好后更换淘宝镜像
yarn config set registry https://registry.npm.taobao.org
```
