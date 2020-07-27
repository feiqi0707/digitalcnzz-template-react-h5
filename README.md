# digitalzz-webFront-mobile

前端项目移动端模板

# 安装依赖环境

yarn 、npm install

# 启动开发服务

yarn dev 、 npm run dev

# 构建生产测试发布包

yarn build:prod 、yarn build:test 、 npm run build:prod 、 npm run build:test

# 构建发布配置 OSS 自动上传配置

## 预发测试环境配置 vue.config.js

const ossPluginOpt = {
ossConfig: {
region: 'oss-cn-north-2-gov-1',
bucket: 'digitalzz',
secure: true
},
configName: '.alioss',
enabled: true,
cdnPrefix: 'https://cdn.digitalcnzz.com/',
uploadPath: '/digitalcnzz/pretest/digitalcnzz-xxx-h5', //// 发布前把 xxxx 换成当前项目的名称
exclude: '',
ignoreHtml: false
}

## 生产环境配置

const ossPluginOpt = {
ossConfig: {
region: 'oss-cn-north-2-gov-1',
bucket: 'digitalzz',
secure: true
},
configName: '.alioss',
enabled: true,
cdnPrefix: 'https://cdn.digitalcnzz.com/',
uploadPath: '/digitalcnzz/prod/digitalcnzz-xxx-h5', //// 发布前把 xxxx 换成当前项目的名称
exclude: '',
ignoreHtml: false
}
