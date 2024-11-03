import { M as MembersList } from "./members-Baww2w0T.js";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  _push(`<div${ssrRenderAttrs(_attrs)}>Você está na página do ${ssrInterpolate(_ctx.$route.params.integrante)}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/integrantes/[integrante].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _integrante_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _integrante_ as default
};
//# sourceMappingURL=_integrante_-BNGjyP9i.js.map
