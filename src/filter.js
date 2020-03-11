/* Copyright (C) 2020 Xvezda <https://xvezda.com/> */
import { replacer } from './utils'

export function filter (value) {
  if (!value) return ''

  return replacer(undefined, value)
}

export default {
  filter
}
