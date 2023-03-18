import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to) => {
      console.log(`Before Navigation: ${to.fullPath}`)
    })
  },
  setup() {},
  rootComponents: [],
})
