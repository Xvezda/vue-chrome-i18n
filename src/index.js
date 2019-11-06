/* Copyright (C) 2019 Xvezda <https://xvezda.com/> */
import VueChromeI18n from './components/VueChromeI18n';
import { bind } from './directive';

export function install(Vue, options) {
  Vue.component('vue-chrome-i18n', VueChromeI18n);
  Vue.directive('chrome-i18n', {
    bind: bind
  });
}

export default {
  install: install
}
