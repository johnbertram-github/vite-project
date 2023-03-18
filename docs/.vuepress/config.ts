import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      components: { HelloWorld: path.resolve(__dirname, './components/HelloWorld.vue') },
    }),
  ],
  title: 'SeceuroDoor',
  theme: defaultTheme({
    lastUpdated: true,
    contributors: true,
    tip: 'Information',
    home: '/home.html',
    logo: '/images/seceurodoor-small.png',
    editLink: false,
    repo: 'https://github.com/johnbertram-github/vite-project/tree/main/docs',
    navbar: [
      { text: 'Content', link: '/content.html' },
      { text: 'Page 1', link: '/page1.html' },
      { text: 'Page 2', link: '/page2.html' },
    ],
  }),
})
