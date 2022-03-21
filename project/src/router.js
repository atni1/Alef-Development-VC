import { createWebHistory, createRouter } from 'vue-router'

import DefaultHeader from './components/layout/Header/Header.vue';
import DefaultFooter from './components/layout/Footer/Footer.vue';
import FormPage from './components/FormPage/FormPage.vue';
import PreviewPage from './components/PreviewPage/PreviewPage.vue'


const routes = [
  {
    path: '/',
    name: 'Form',
    components: { header: DefaultHeader, default: FormPage, footer: DefaultFooter }
  },
  {
    path: '/preview',
    name: 'Preview',
    components: { header: DefaultHeader, default: PreviewPage, footer: DefaultFooter }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;