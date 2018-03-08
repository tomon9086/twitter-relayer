// require("grimoirejs-preset-basic")
// require("grimoirejs-gltf")
// require("grimoirejs-forward-shading")

const Vue = require("vue/dist/vue.esm.js").default
const rootVue = require("./components/root.vue")

new Vue(rootVue).$mount("#root")
