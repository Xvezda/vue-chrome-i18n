/**
 * Copyright (C) 2019 Xvezda <https://xvezda.com/>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import { replacer } from './utils'

export function filter (value) {
  if (!value) return ''

  return replacer(undefined, value)
}

export default {
  filter
}
