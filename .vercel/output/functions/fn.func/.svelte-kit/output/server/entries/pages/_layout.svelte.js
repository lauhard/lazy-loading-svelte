import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-vtw46i.svelte-vtw46i{padding:var(--padding-side);background-color:var(--background-color);position:absolute;bottom:0;left:0;width:100%;height:auto}footer.svelte-vtw46i .legal-notice.svelte-vtw46i{width:100%;bottom:0;height:100%;margin-top:2rem;font-weight:bold}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const copyrightNotice = () => `© Andreas Lauhard,  ${(/* @__PURE__ */ new Date()).getFullYear()}`;
  $$result.css.add(css$1);
  return `<footer class="svelte-vtw46i">${slots["stock-images"] ? slots["stock-images"]({}) : ` `} <p class="legal-notice svelte-vtw46i">${escape(copyrightNotice())}</p> </footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-eokzmh{width:100%;list-style:circle;margin-left:1rem}.app.svelte-eokzmh{height:100vh;max-height:100%;position:relative;width:100%}main.svelte-eokzmh{padding:0 var(--padding-side);margin:0 auto;width:100%;height:100%;position:relative;display:flex;justify-content:center;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-eokzmh"><main class="svelte-eokzmh">${slots.default ? slots.default({}) : ` `}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {
    "stock-images": () => {
      return `<ul slot="stock-images" data-svelte-h="svelte-att08s"><p>stock images provided from:</p> <li class="svelte-eokzmh"><a href="https://unsplash.com/de/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Loan</a> auf <a href="https://unsplash.com/de/fotos/7AIDE8PrvA0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li> <li class="svelte-eokzmh"><a href="https://unsplash.com/de/@raouldroog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raoul Droog</a> auf <a href="https://unsplash.com/de/fotos/yMSecCHsIBc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li> <li class="svelte-eokzmh"><a href="https://unsplash.com/de/@lettherebelight?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex D.</a> auf <a href="https://unsplash.com/de/fotos/J93PXpBPCFI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li></ul>`;
    }
  })} </div>`;
});
export {
  Layout as default
};
