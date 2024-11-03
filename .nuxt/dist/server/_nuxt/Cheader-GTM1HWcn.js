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
const _sfc_main = {
  data() {
    return {
      navbarList: [
        { link: "#", text: "Sobre Nós" },
        { link: "#", text: "Documentação" },
        { link: "#", text: "Evento" },
        { link: "#", text: "Referências" }
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
          setTimeout(() => {
            navbarSm.style.minHeight = "max-content";
          }, 300);
        } else {
          navbarSm.setAttribute("data-status", "closed");
          navbarSm.style.minHeight = "";
        }
        setTimeout(() => {
          console.log("Executado após 2 segundos!");
        }, 300);
      }
    }
  }
};
const _imports_0 = publicAssetsURL("/img/logo_senac.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))} data-v-bf30184d><nav id="navbar-lg" data-v-bf30184d><ul data-v-bf30184d><li data-v-bf30184d><a${ssrRenderAttr("href", $data.navbarList[0].link)} data-v-bf30184d>${$data.navbarList[0].text ?? ""}</a></li><li data-v-bf30184d><a${ssrRenderAttr("href", $data.navbarList[1].link)} data-v-bf30184d>${$data.navbarList[1].text ?? ""}</a></li><li data-v-bf30184d><a href="#" data-v-bf30184d><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-bf30184d></a></li><li data-v-bf30184d><a${ssrRenderAttr("href", $data.navbarList[2].link)} data-v-bf30184d>${$data.navbarList[2].text ?? ""}</a></li><li data-v-bf30184d><a${ssrRenderAttr("href", $data.navbarList[3].link)} data-v-bf30184d>${$data.navbarList[3].text ?? ""}</a></li></ul></nav><a href="#" id="link-logo-senac-sm" data-v-bf30184d><img${ssrRenderAttr("src", _imports_0)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-bf30184d></a><nav id="navbar-sm" class="navbar-close" data-status="closed" data-v-bf30184d><ul data-v-bf30184d><!--[-->`);
  ssrRenderList($data.navbarList, (navbarLink) => {
    _push(`<li data-v-bf30184d><a${ssrRenderAttr("href", navbarLink.link)} data-v-bf30184d>${navbarLink.text ?? ""}</a></li>`);
  });
  _push(`<!--]--></ul></nav><div id="btn-toggle-nav" class="btn-to-close" data-v-bf30184d><div data-v-bf30184d></div><div data-v-bf30184d></div><div data-v-bf30184d></div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Cheader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bf30184d"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Cheader-GTM1HWcn.js.map
