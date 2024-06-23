import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SORA API",
  description: "SORA API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更多', link: '/more' }
    ],

    sidebar: [
      {
        text: '菜单',
        items: [
          { text: 'biliroaming', link: '/biliroaming' },
          { text: '更多', link: '/more' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://soraru.org' },
      { icon: 'discord', link: 'https://discord.gg/5GRGgYvA' },
      { icon: 'slack', link: 'https://t.me/+wyQmGfVoxA40MjVl' }
    ]
  }
})
