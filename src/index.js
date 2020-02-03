/* Copyright (C) 2019 Xvezda <https://xvezda.com/> */
import VueChromeI18n from './components/VueChromeI18n';
import { bind } from './directive';
import { filter } from './filter';

export function install(Vue, options) {
  Vue.component('vue-chrome-i18n', VueChromeI18n);
  Vue.directive('chrome-i18n', {
    bind: bind
  });
  Vue.filter('chrome-i18n', filter);
}

export default {
  install,
}
