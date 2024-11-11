import { a as buildAssetsURL } from '../_/renderer.mjs';
import __nuxt_component_0 from './Cheader-CIEFYnVH.mjs';
import __nuxt_component_1 from './Cfooter-BaHlu9C5.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/devalue/index.js';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/home/source/repos/SmokeSenac/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/home/source/repos/SmokeSenac/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("robocar-race.CiaqJYJf.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "event" }, _attrs))} data-v-29a97d02><div id="inside-event" data-v-29a97d02><h1 class="page-title" data-v-29a97d02>Evento</h1><div class="event-info" data-v-29a97d02><div class="event-picture" data-v-29a97d02><img${ssrRenderAttr("src", _imports_0)} alt="Banner do evento Robocar Race -&gt; 3\xBA Competi\xE7\xE3o Brasileira de Ve\xEDculos Aut\xF4nomos em Escala. Novembro 2024. Inscreva-se. Gr\xE1tis e aberto para estudantes, pesquisadores, hobbistas, makers e entusiastas." data-v-29a97d02></div><div class="event-data" data-v-29a97d02><p data-v-29a97d02>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur atque rem porro enim consectetur ea blanditiis aliquam libero incidunt, eligendi eius aspernatur possimus. Repudiandae culpa deleniti eligendi assumenda tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eligendi cum, voluptatibus vitae id qui rerum autem eius expedita, voluptatem minus delectus? Assumenda vel id fuga praesentium! Quaerat, voluptatum veniam!</p><a href="https://www.robocarrace.com.br/" target="_blank" data-v-29a97d02>Saiba Mais</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/evento/EventElement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EventElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-29a97d02"]]);
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

export { evento as default };
//# sourceMappingURL=evento-DjN3YHeO.mjs.map
