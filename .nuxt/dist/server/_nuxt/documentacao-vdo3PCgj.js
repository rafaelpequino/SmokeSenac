import __nuxt_component_0 from "./Cheader-DNqpYksd.js";
import __nuxt_component_1 from "./Cfooter-BaHlu9C5.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _imports_0 = "" + __buildAssetsURL("doc-icon.CFqUFfXs.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "document" }, _attrs))} data-v-946e1413><div id="inside-document" data-v-946e1413><h1 class="page-title" data-v-946e1413>Documentação</h1><div class="book-access" data-v-946e1413><div class="doc-icon" data-v-946e1413><img${ssrRenderAttr("src", _imports_0)} alt="Ícone de representação de um documento" data-v-946e1413></div><div class="doc-data" data-v-946e1413><h2 data-v-946e1413>Tenha acesso a nosso caderno</h2><a href="#" data-v-946e1413>Download</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documentacao/DocElement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DocElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-946e1413"]]);
const _sfc_main = {
  components: { Cheader: __nuxt_component_0, DocElement, Cfooter: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_DocElement = resolveComponent("DocElement");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(ssrRenderComponent(_component_DocElement, null, null, _parent));
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/documentacao.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const documentacao = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  documentacao as default
};
//# sourceMappingURL=documentacao-vdo3PCgj.js.map
