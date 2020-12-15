import { defineConfig } from 'umi';
import routes from './routes.config';
import layout from './layout.config';

export default defineConfig({
  title: '管理平台业务模块', 
  nodeModulesTransform: {
    type: 'none',
  },

  layout,
  routes,

  extraBabelPlugins: [
    ['import', { libraryName: "@best/best-inc-design", style: "index" }],
  ],
});