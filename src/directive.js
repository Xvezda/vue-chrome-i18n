/* Copyright (C) 2019 Xvezda <https://xvezda.com/> */
import { replacer, pattern } from './utils';

export function bind(el, binding, vnode) {
  let innerHTML = el.innerHTML;
  innerHTML = innerHTML.replace(pattern, replacer);
  el.innerHTML = innerHTML;
  vnode.context.$emit('replaced', vnode);
}

export default {
  bind,
}
