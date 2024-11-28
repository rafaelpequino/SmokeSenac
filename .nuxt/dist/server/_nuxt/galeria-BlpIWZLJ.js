import __nuxt_component_0 from "./Cheader-DNqpYksd.js";
import __nuxt_component_1 from "./Cfooter-BaHlu9C5.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "photos" }, _attrs))} data-v-98d5e1eb><div id="inside-photos" data-v-98d5e1eb><h1 class="page-title" data-v-98d5e1eb>Galeria</h1><div class="photos-picture" data-v-98d5e1eb><!--[-->`);
  ssrRenderList(12, (n) => {
    _push(`<div class="photo" data-v-98d5e1eb><img${ssrRenderAttr("src", "/img/galeria/" + n + ".jpg")} alt="Foto do evento Robocar Race" data-v-98d5e1eb></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/galeria/PhotosElement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PhotosElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-98d5e1eb"]]);
const _sfc_main = {
  components: { Cheader: __nuxt_component_0, Cfooter: __nuxt_component_1, PhotosElement }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_PhotosElement = resolveComponent("PhotosElement");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(ssrRenderComponent(_component_PhotosElement, null, null, _parent));
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galeria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const galeria = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  galeria as default
};
//# sourceMappingURL=galeria-BlpIWZLJ.js.map
