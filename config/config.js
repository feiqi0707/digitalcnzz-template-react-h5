import routesConfig from './routes.config';
import webpackConfig from './webpack.config';
import proxyConfig from './proxy.config';

const ossPluginOpt = {
  ossConfig: {
    region: 'oss-cn-north-2-gov-1',
    bucket: 'digitalzz',
    secure: true,
  },
  configName: '.alioss',
  enabled: true,
  cdnPrefix: 'https://cdn.digitalcnzz.com/',
  uploadPath: '/digitalcnzz/pretest/digitalcnzz-xxx-h5',
  exclude: '',
  ignoreHtml: false,
};

export default Object.assign({
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      fastClick: true,
      title: {
        defaultTitle: 'digitalcnzz-xxx-h5',
        separator: '-'
      },
      dva: {
        immer: true
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading.tsx'
      }
    }],
    ['umi-plugin-alioss', ossPluginOpt]
  ]
}, routesConfig, webpackConfig, proxyConfig);