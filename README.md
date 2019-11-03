Vue chrome i18n plugin
======================

Installation
------------
```sh
git clone https://github.com/Xvezda/vue-chrome-i18n.git
cd vue-chrome-i18n
yarn install
yarn run build
```

Usage
-----
### HTML
```html
<script src="...vue.js"></script>
<script src="...vue-chrome-i18n.js"></script>
<script>
Vue.use(VueChromeI18n);  // Install plugin
</script>
```

then

`<vue-chrome-i18n>__MSG_messagename__</vue-chrome-i18n>`

or

`<a href="...">__MSG_messagename__</a>`


Reference
---------
- https://developer.chrome.com/extensions/i18n
