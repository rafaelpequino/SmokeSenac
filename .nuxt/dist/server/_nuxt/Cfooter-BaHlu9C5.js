import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
const _imports_0 = "" + __buildAssetsURL("logo_smoke_footer_sf.BzGkELtA.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))} data-v-3bed2928><div id="inside-footer" data-v-3bed2928><div class="link-img-footer" data-v-3bed2928><img${ssrRenderAttr("src", _imports_0)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro" data-v-3bed2928></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Cfooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3bed2928"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=Cfooter-BaHlu9C5.js.map
