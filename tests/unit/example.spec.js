import Home from "../../src/components/home";
import About from "../../src/components/about_us";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import router from "@/router"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("Home", () => {
  it("Відрисовує домашню сторінку", async () => {
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/home")
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent(Home).exists()).toBe(true)
  });
  it("Відрисовує 'About us'", async () => {
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/about_us")
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent(About).exists()).toBe(true)
  });
})