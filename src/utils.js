/* Copyright (C) 2019 Xvezda <https://xvezda.com/> */
export const pattern = /__MSG_([A-Za-z0-9_-]+)__/g

export function replacer (match, p1, offset, string) {
  return chrome.i18n.getMessage(p1) // eslint-disable-line no-undef
}

export function nl2br (string) {
  try {
    return string.replace(/\n/g, '<br>')
  } catch (e) {
    return string
  }
}

export default {
  replacer,
  pattern,
  nl2br
}
