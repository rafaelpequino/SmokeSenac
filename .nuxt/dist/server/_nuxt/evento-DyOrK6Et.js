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
const _imports_0 = "" + __buildAssetsURL("robocar-race.CiaqJYJf.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "event" }, _attrs))} data-v-1a0abe12><div id="inside-event" data-v-1a0abe12><h1 class="page-title" data-v-1a0abe12>Evento</h1><div class="event-info" data-v-1a0abe12><div class="event-picture" data-v-1a0abe12><img${ssrRenderAttr("src", _imports_0)} alt="Banner do evento Robocar Race -&gt; 3º Competição Brasileira de Veículos Autônomos em Escala. Novembro 2024. Inscreva-se. Grátis e aberto para estudantes, pesquisadores, hobbistas, makers e entusiastas." data-v-1a0abe12></div><div class="event-data" data-v-1a0abe12><p data-v-1a0abe12> Neste ano, a cidade de Santo André foi palco da 3ª edição da RobocarRace, realizada no A.A.C.D do ABC. O evento destacou-se por promover competições entre carrinhos autônomos, que utilizam tecnologias de visão computacional e sensores ultrassônicos para navegação e tomada de decisões. A competição foi dividida em três modalidades, cada uma com suas próprias características e desafios: </p><br data-v-1a0abe12><p data-v-1a0abe12><strong data-v-1a0abe12>Mini</strong>: Pista compacta, projetada pelos alunos do SENAC. A estrutura foi construída em MDF cortado a laser. </p><p data-v-1a0abe12><strong data-v-1a0abe12>Júnior</strong>: Percurso reduzido, mas com a adição de cones coloridos para orientar a navegação dos carrinhos. </p><p data-v-1a0abe12><strong data-v-1a0abe12>Master</strong>: Percurso completo inspirado no estilo de corrida da Fórmula 1. </p><br data-v-1a0abe12><p data-v-1a0abe12> A RobocarRace não apenas promoveu a inovação tecnológica e o aprendizado prático, mas também estimulou a criatividade e a colaboração entre os participantes, reafirmando seu papel como um dos principais eventos de robótica da região. </p><a href="https://www.robocarrace.com.br/" target="_blank" data-v-1a0abe12>Saiba Mais</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/evento/EventElement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EventElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1a0abe12"]]);
const _sfc_main = {
  components: { Cheader: __nuxt_component_0, EventElement, Cfooter: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_EventElement = resolveComponent("EventElement");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(ssrRenderComponent(_component_EventElement, null, null, _parent));
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/evento.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evento = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  evento as default
};
//# sourceMappingURL=evento-DyOrK6Et.js.map
