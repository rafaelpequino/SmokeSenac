import __nuxt_component_0 from './Cheader-DNqpYksd.mjs';
import __nuxt_component_1 from './Cfooter-BaHlu9C5.mjs';
import { M as MembersList } from './members-C_dtbQw1.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/SmokeSenac/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
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

const _sfc_main$1 = {
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MembersList,
      member: null
    };
  },
  methods: {
    buscarUsuario() {
      this.member = this.MembersList.find((usuario) => usuario.user === this.username);
    }
  },
  mounted() {
    this.buscarUsuario();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  if ($data.member) {
    _push(`<section${ssrRenderAttrs(mergeProps({ id: "member" }, _attrs))} data-v-4717d539><div id="inside-member" data-v-4717d539><h1 class="page-title" data-v-4717d539>${ssrInterpolate($data.member.name)}</h1>`);
    _push(ssrRenderComponent(_component_RouterLink, {
      to: "/",
      class: "link-back"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Voltar`);
        } else {
          return [
            createTextVNode("Voltar")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="about-member" data-v-4717d539><img${ssrRenderAttr("src", "/img/members/" + $data.member.srcImg)}${ssrRenderAttr("alt", "Foto do integrante" + $data.member.name)} data-v-4717d539><p data-v-4717d539>${ssrInterpolate($data.member.description)}</p></div></div></section>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/integrantes/MemberElement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MemberElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4717d539"]]);
const _sfc_main = {
  components: { Cheader: __nuxt_component_0, MemberElement, Cfooter: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_MemberElement = resolveComponent("MemberElement");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(ssrRenderComponent(_component_MemberElement, {
    username: _ctx.$route.params.integrante
  }, null, _parent));
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/integrantes/[integrante].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _integrante_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _integrante_ as default };
//# sourceMappingURL=_integrante_-BtuAkG3p.mjs.map
