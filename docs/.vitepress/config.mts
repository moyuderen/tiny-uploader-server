import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tiny-uploader-server/',
  title: '@tinyuploader Server',
  description: '',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: 'Home', link: '/cn/index' }],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/moyuderen/tiny-uploader-server',
      },
    ],
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        nav: [{ text: '主页', link: '/zh/index' }],
        outline: {
          level: 'deep',
          label: '页码',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/index' }],
        outline: {
          level: 'deep',
          label: 'On this page',
        },
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
