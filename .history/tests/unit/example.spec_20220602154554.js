import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Contacts from "../components/contacts";

const localVue = createLocalVue()
localVue.use(VueRouter)

mount(Contacts, {
  localVue,
  router
})