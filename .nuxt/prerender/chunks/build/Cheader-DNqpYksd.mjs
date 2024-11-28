import { mergeProps, useSSRContext } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/devalue/index.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = publicAssetsURL("/img/logo_senac.png");
const _sfc_main = {
  data() {
    return {
      navbarList: [
        { link: "/", text: "Home" },
        { link: "/documentacao", text: "Documenta\xE7\xE3o" },
        { link: "/evento", text: "Evento" },
        { link: "/galeria", text: "Galeria" }
      ]
    };
  },
  methods: {
    toggleNavbar() {
      const navbarSm = (void 0).getElementById("navbar-sm");
      const btnToggleNav = (void 0).getElementById("btn-toggle-nav");
      if (btnToggleNav) {
        btnToggleNav.classList.toggle("active");
      }
      if (navbarSm) {
        navbarSm.classList.toggle("navbar-open");
        navbarSm.classList.toggle("navbar-close");
        if (navbarSm.getAttribute("data-status") == "closed") {
          navbarSm.setAttribute("data-status", "opened");
        } else {
          navbarSm.setAttribute("data-status", "closed");
          navbarSm.style.minHeight = "";
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))} data-v-fe12fcce><nav id="navbar-lg" data-v-fe12fcce><ul data-v-fe12fcce><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[0].link)} data-v-fe12fcce>${(_a = $data.navbarList[0].text) != null ? _a : ""}</a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[1].link)} data-v-fe12fcce>${(_b = $data.navbarList[1].text) != null ? _b : ""}</a></li><li data-v-fe12fcce><a href="#" data-v-fe12fcce><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universit\xE1rio Senac" id="logo-senac" data-v-fe12fcce></a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[2].link)} data-v-fe12fcce>${(_c = $data.navbarList[2].text) != null ? _c : ""}</a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[3].link)} data-v-fe12fcce>${(_d = $data.navbarList[3].text) != null ? _d : ""}</a></li></ul></nav><a href="#" id="link-logo-senac-sm" data-v-fe12fcce><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universit\xE1rio Senac" id="logo-senac" data-v-fe12fcce></a><nav id="navbar-sm" class="navbar-close" data-status="closed" data-v-fe12fcce><ul data-v-fe12fcce><!--[-->`);
  ssrRenderList($data.navbarList, (navbarLink) => {
    var _a2;
    _push(`<li data-v-fe12fcce><a${ssrRenderAttr("href", navbarLink.link)} data-v-fe12fcce>${(_a2 = navbarLink.text) != null ? _a2 : ""}</a></li>`);
  });
  _push(`<!--]--></ul></nav><div id="btn-toggle-nav" class="btn-to-close" data-v-fe12fcce><div data-v-fe12fcce></div><div data-v-fe12fcce></div><div data-v-fe12fcce></div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Cheader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fe12fcce"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Cheader-DNqpYksd.mjs.map
