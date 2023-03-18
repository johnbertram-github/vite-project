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
  title: 'VuePress Demo',
  description: 'Description of Demo',
  lang: 'en-GB',
  theme: defaultTheme({
    lastUpdatedText: 'Last one:',
    lastUpdated: true,
    locales: { '/': { selectLanguageName: 'English' } },
    tip: 'John Says',
    home: '/home.html',
    logo: '/images/vue.svg',
    repo: 'https://gitlab.com/foo/bar',
    editLink: true,
    editLinkText: 'Edit me',
    navbar: [
      { text: 'Content', link: '/content.html' },
      { text: 'Page 1', link: '/page1.html' },
      { text: 'Page 2', link: '/page2.html' },
    ],
  }),
})
