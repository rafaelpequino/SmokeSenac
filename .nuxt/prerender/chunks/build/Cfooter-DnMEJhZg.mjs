import { mergeProps, useSSRContext } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/devalue/index.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
const _imports_0 = publicAssetsURL("/img/logo_smoke_footer.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))} data-v-3d666bbe><div id="inside-footer" data-v-3d666bbe><div class="link-img-footer" data-v-3d666bbe><img${ssrRenderAttr("src", _imports_0)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2\xBA semestre do curso de Engenharia de Computa\xE7\xE3o do centro universit\xE1rio Senac Santo Amaro" data-v-3d666bbe></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Cfooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3d666bbe"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Cfooter-DnMEJhZg.mjs.map
