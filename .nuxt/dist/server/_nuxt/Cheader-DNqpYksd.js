import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = publicAssetsURL("/img/logo_senac.png");
const _sfc_main = {
  data() {
    return {
      navbarList: [
        { link: "/", text: "Home" },
        { link: "/documentacao", text: "Documentação" },
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
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))} data-v-fe12fcce><nav id="navbar-lg" data-v-fe12fcce><ul data-v-fe12fcce><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[0].link)} data-v-fe12fcce>${$data.navbarList[0].text ?? ""}</a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[1].link)} data-v-fe12fcce>${$data.navbarList[1].text ?? ""}</a></li><li data-v-fe12fcce><a href="#" data-v-fe12fcce><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-fe12fcce></a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[2].link)} data-v-fe12fcce>${$data.navbarList[2].text ?? ""}</a></li><li data-v-fe12fcce><a${ssrRenderAttr("href", $data.navbarList[3].link)} data-v-fe12fcce>${$data.navbarList[3].text ?? ""}</a></li></ul></nav><a href="#" id="link-logo-senac-sm" data-v-fe12fcce><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-fe12fcce></a><nav id="navbar-sm" class="navbar-close" data-status="closed" data-v-fe12fcce><ul data-v-fe12fcce><!--[-->`);
  ssrRenderList($data.navbarList, (navbarLink) => {
    _push(`<li data-v-fe12fcce><a${ssrRenderAttr("href", navbarLink.link)} data-v-fe12fcce>${navbarLink.text ?? ""}</a></li>`);
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
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Cheader-DNqpYksd.js.map
