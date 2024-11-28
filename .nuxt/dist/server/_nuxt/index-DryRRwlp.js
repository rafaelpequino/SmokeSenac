import __nuxt_component_0 from "./Cheader-DNqpYksd.js";
import __nuxt_component_1 from "./Cfooter-BaHlu9C5.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { M as MembersList } from "./members-C_dtbQw1.js";
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
const _sfc_main$5 = {};
const _imports_0$2 = publicAssetsURL("/img/car.jpg");
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-about" }, _attrs))} data-v-41b10f60><div id="inside-main-about" data-v-41b10f60><div class="div-about" data-v-41b10f60><div class="img-about" data-v-41b10f60><img src="https://www.robocarrace.com.br/wp-content/uploads/2023/11/carros-e1710431384328-1024x650.jpeg" alt="Imagem representativa da competição Robocar Race" data-v-41b10f60></div><div class="text-about" data-v-41b10f60><h3 data-v-41b10f60>SOBRE A COMPETIÇÃO ROBOCAR RACE</h3><p data-v-41b10f60>O RoboCar Race é uma corrida de veículos autônomos em escala e a proposta é reunir grupos de pesquisas e entusiastas na área da condução autônoma de veículos terrestres. <br data-v-41b10f60>“A proposta é reunir grupos de pesquisas e entusiastas na área da condução autônoma de veículos”</p></div></div><div class="div-about" data-v-41b10f60><div class="text-about" data-v-41b10f60><h3 data-v-41b10f60>O QUE SÃO CARRINHOS AUTÔNOMOS?</h3><p data-v-41b10f60>Carrinhos autônomos são veículos automatizados que se movem sem motorista, usando sensores, câmeras e inteligência artificial para navegar de forma segura e eficiente. Com aplicações em logística e entregas, eles ajudam a reduzir acidentes e otimizam o transporte de mercadorias em ambientes controlados e urbanos.</p></div><div class="img-about" data-v-41b10f60><img${ssrRenderAttr("src", _imports_0$2)} alt="Imagem gerada por A.I. mostrando um carrinho eletrônico" data-v-41b10f60></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MainAbout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-41b10f60"]]);
const _sfc_main$4 = {
  props: {
    name: { type: String, required: true },
    user: { type: String, required: true },
    srcImg: { type: String, required: true }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(ssrRenderComponent(_component_RouterLink, mergeProps({
    to: "integrantes/" + $props.user,
    class: "member"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="member-img" data-v-37d2e784${_scopeId}><img${ssrRenderAttr("src", "img/members/" + $props.srcImg)}${ssrRenderAttr("alt", "Foto do integrante " + $props.name)} data-v-37d2e784${_scopeId}></div><h3 data-v-37d2e784${_scopeId}>${ssrInterpolate($props.name)}</h3>`);
      } else {
        return [
          createVNode("div", { class: "member-img" }, [
            createVNode("img", {
              src: "img/members/" + $props.srcImg,
              alt: "Foto do integrante " + $props.name
            }, null, 8, ["src", "alt"])
          ]),
          createVNode("h3", null, toDisplayString($props.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/sub-components/member.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Member = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-37d2e784"]]);
const _sfc_main$3 = {
  data() {
    return {
      MembersList
    };
  },
  components: { Member }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Member = resolveComponent("Member");
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-group" }, _attrs))} data-v-e1101215><div id="inside-main-group" data-v-e1101215><h2 data-v-e1101215>Integrantes</h2><div class="members" data-v-e1101215><!--[-->`);
  ssrRenderList($data.MembersList, (member) => {
    _push(ssrRenderComponent(_component_Member, {
      class: "member",
      name: member.name,
      user: member.user,
      srcImg: member.srcImg
    }, null, _parent));
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-e1101215"]]);
const _sfc_main$2 = {};
const _imports_0$1 = publicAssetsURL("/img/logo_smoke.png");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-home" }, _attrs))} data-v-843e902e><div id="inside-main-home" data-v-843e902e><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro" data-v-843e902e><h1 data-v-843e902e>CARRINHO AUTÔNOMO - ROBOCAR RACE</h1><p data-v-843e902e>Projeto concebido pelos alunos do 2º semestre do curso de Engenharia de Computação do Centro Universitário Senac Santo Amaro para a competição Robocar Race.</p><a href="#" data-v-843e902e>Saiba mais</a></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainHome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MainHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-843e902e"]]);
const _sfc_main$1 = {};
const _imports_0 = "" + __buildAssetsURL("full-group.DIHHC-NE.jpg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-more" }, _attrs))} data-v-1e755dec><div id="inside-main-more" data-v-1e755dec><h2 data-v-1e755dec>Por dentro do Projeto</h2><div class="proj-data" data-v-1e755dec><img${ssrRenderAttr("src", _imports_0)} alt="Imagem exibindo o trabalho por trás do projeto" data-v-1e755dec><p data-v-1e755dec> A equipe Smoke estava inicialmente inscrita na modalidade Júnior da competição. Porém após avaliar a capacidade de autonomia do carrinho desenvolvido, a equipe decidiu participar da modalidade Master, a qual levaram o troféu de 1º lugar. </p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainMore.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1e755dec"]]);
const _sfc_main = {
  methods: {
    scrollToTop() {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  Data() {
    return {
      array: [
        "Pablo",
        "Isa"
      ]
    };
  },
  components: { Cheader: __nuxt_component_0, MainAbout, MainGroup, MainHome, MainMore, Cfooter: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_MainHome = resolveComponent("MainHome");
  const _component_MainAbout = resolveComponent("MainAbout");
  const _component_MainGroup = resolveComponent("MainGroup");
  const _component_MainMore = resolveComponent("MainMore");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(`<div id="btn-scroll-top" data-v-a2f02b69><i class="fa-solid fa-chevron-up" data-v-a2f02b69></i></div><main data-v-a2f02b69>`);
  _push(ssrRenderComponent(_component_MainHome, null, null, _parent));
  _push(ssrRenderComponent(_component_MainAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_MainGroup, null, null, _parent));
  _push(ssrRenderComponent(_component_MainMore, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2f02b69"]]);
export {
  index as default
};
//# sourceMappingURL=index-DryRRwlp.js.map
