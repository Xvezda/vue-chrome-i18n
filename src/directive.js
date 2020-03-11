/**
 * Copyright (C) 2019 Xvezda <https://xvezda.com/>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import { replacer, pattern } from './utils'

export function bind (el, binding, vnode) {
  let innerHTML = el.innerHTML
  innerHTML = innerHTML.replace(pattern, replacer)
  el.innerHTML = innerHTML
  vnode.context.$emit('replaced', vnode)
}

export default {
  bind
}
