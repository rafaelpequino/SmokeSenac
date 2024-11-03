import { M as MembersList } from './members-Baww2w0T.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/devalue/index.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
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

const _sfc_main = {
  data() {
    return {
      MembersList,
      member: null
    };
  },
  methods: {
    buscarUsuario() {
      this.member = this.MembersList.find((usuario) => usuario.user === this.$route.params.integrante);
    }
  },
  mounted() {
    this.buscarUsuario();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Voc\xEA est\xE1 na p\xE1gina do ${ssrInterpolate(_ctx.$route.params.integrante)}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/integrantes/[integrante].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _integrante_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _integrante_ as default };
//# sourceMappingURL=_integrante_-BNGjyP9i.mjs.map
