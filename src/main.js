import { createApp } from "vue";
import App from './App.vue';
import router from './router/';
import axios from 'axios'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import VueClipboard from 'vue-clipboard2'
import svgIcon from '@/components/svgIcon/index.js';
import 'view-design/dist/styles/iview.css';
import '@/assets/fonts/font.css';
import { i18n } from "./i18n";

import ptBR from 'view-ui-plus/dist/locale/pt-BR';
import enUS from 'view-ui-plus/dist/locale/pt-BR';
import zhCN from 'view-ui-plus/dist/locale/pt-BR';

let locale = zhCN;
if(i18n.locale === 'pt') {
  locale = ptBR;
} else if (i18n.locale === 'en') {
  locale = enUS;
}


createApp(App)
  .use(ViewUIPlus, { locale: locale })
  .use(router)
  .use(VueClipboard)
  .use(svgIcon)
  .use(i18n)
  .provide('$http', axios)
  .mount("#app");
