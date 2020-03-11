Vue chrome i18n plugin
======================
[![Version](https://img.shields.io/npm/v/vue-chrome-i18n)](https://www.npmjs.com/package/vue-chrome-i18n)
[![Actions Status](https://github.com/Xvezda/vue-chrome-i18n/workflows/Node%20CI/badge.svg)](https://github.com/Xvezda/vue-chrome-i18n/actions)

Install
-------
```sh
npm install --save vue-chrome-i18n

# OR

yarn add vue-chrome-i18n
```

Build
-----
```sh
git clone https://github.com/Xvezda/vue-chrome-i18n.git
cd vue-chrome-i18n
yarn install
yarn run build  # dist/vue-chrome-i18n.js
```

Usage
-----
### HTML
```html
<script src=".../vue.js"></script>
<script src=".../vue-chrome-i18n.js"></script>
<script>
Vue.use(VueChromeI18n);  // Install plugin
</script>
```

then

`<vue-chrome-i18n>__MSG_messagename__</vue-chrome-i18n>`

or

`<a href="..." target="_blank" v-chrome-i18n>__MSG_messagename__</a>`

or

`<div>{{ 'messagename' | chrome-i18n }}</div>`

Options
-------

| Attribute | Description                      | Type    | Default |
| --------- | -------------------------------- | ------- | ------- |
| show      | Set visibility                   | Boolean | true    |
| nl2br     | Replace linefeeds to `<br>` tags | Boolean | false   |

Example
-------
https://xvezda.github.io/vue-chrome-i18n/example/


Reference
---------
- https://developer.chrome.com/extensions/i18n
