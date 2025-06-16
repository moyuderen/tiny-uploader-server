import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tiny-uploader-server/',
  title: 'Tiny Uploader Server',
  description: '',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [{ text: 'Markdown Examples', link: '/markdown-examples' }],
    //   },
    // ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/moyuderen/tiny-uploader-server',
      },
    ],

    outline: {
      level: 'deep',
      label: 'On this page',
    },
  },

  markdown: {
    lineNumbers: true,
  },
});
