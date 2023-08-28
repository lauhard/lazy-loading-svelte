import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const cat1 = "/_app/immutable/assets/cat1.5db0d38e.jpg";
const cat2 = "/_app/immutable/assets/cat2.52f67cc6.jpg";
const cat3 = "/_app/immutable/assets/cat3.8138c3a1.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-152sv9p.svelte-152sv9p{color:var(--accent)}section.svelte-152sv9p.svelte-152sv9p{max-width:var(--content-width);padding:var(--padding-side);height:100%;width:100%;align-self:center;display:flex;align-items:center;flex-direction:column;position:relative;overflow:hidden}section.svelte-152sv9p .viewport.svelte-152sv9p{width:100%;max-height:60vh;height:100%;display:flex;flex-direction:column;gap:1rem;overflow-y:scroll}section.svelte-152sv9p .viewport .item.svelte-152sv9p{min-height:200px;height:200px;overflow:hidden;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative;transition:all 1s ease-in-out}section.svelte-152sv9p .viewport .item img.svelte-152sv9p,section.svelte-152sv9p .viewport .item .placeholder.svelte-152sv9p{position:relative;display:flex;opacity:0;height:auto;min-width:160px;object-fit:fill;aspect-ratio:auto;transition:all 2s ease-in-out;border-radius:10px;z-index:10;overflow:hidden}section.svelte-152sv9p .viewport .item p.svelte-152sv9p{width:50%;height:auto;transition:all 0.5s ease-in-out;color:white;padding:1rem;border-radius:5px}section.svelte-152sv9p .viewport .item p.svelte-152sv9p:hover{background:linear-gradient(45deg, var(--primary), var(--primary-hover), var(--secondary), var(--secondary-hover));background-size:400% 400%;animation:svelte-152sv9p-gradient 5s ease infinite;transition:all 0.5s ease-in-out;color:black}section.svelte-152sv9p .viewport .item .placeholder.svelte-152sv9p{position:absolute;background-color:rgb(74, 74, 74);background:linear-gradient(45deg, var(--primary), var(--primary-hover), var(--secondary), var(--secondary-hover));background-size:300%;animation:svelte-152sv9p-gradient 3s ease infinite;height:100vh;height:200px;transform:translateX(-50%);opacity:1;z-index:1;left:50%;width:160px;border-radius:10px}@keyframes svelte-152sv9p-gradient{0%{background-position:0% 0%}50%{background-position:100% 50%}100%{background-position:0% 0%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-152sv9p"><h1 class="svelte-152sv9p" data-svelte-h="svelte-14tpy1f">Lazy loading with SvelteKit</h1> <p class="svelte-152sv9p" data-svelte-h="svelte-1huvnsh">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <div class="viewport svelte-152sv9p" data-svelte-h="svelte-11qewn7"><div class="item svelte-152sv9p"><img${add_attribute("data-src", cat1, 0)} alt="cat1" srcset="" class="svelte-152sv9p"> <div class="placeholder svelte-152sv9p"></div></div> <div class="item svelte-152sv9p"><p class="svelte-152sv9p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.</p></div> <div class="item svelte-152sv9p"><p class="svelte-152sv9p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis at iure, illo accusamus vitae veniam modi ullam
                commodi magni excepturi voluptatum nostrum omnis veritatis. Sed
                labore ducimus odit voluptatibus illum.</p></div> <div class="item svelte-152sv9p"><img${add_attribute("data-src", cat2, 0)} alt="cat2" srcset="" class="svelte-152sv9p"> <div class="placeholder svelte-152sv9p"></div></div> <div class="item svelte-152sv9p"><p class="svelte-152sv9p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, dolor! Ullam officia amet autem expedita veritatis
                perferendis. Nam debitis modi quisquam labore beatae qui,
                nostrum quas vero cum placeat veniam!</p></div> <div class="item svelte-152sv9p"><p class="svelte-152sv9p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur consectetur id consequatur harum amet, sunt ipsum
                quibusdam exercitationem quas labore veritatis illum maiores
                officiis officia. Laudantium sequi officia eveniet eius?</p></div> <div class="item svelte-152sv9p"><img${add_attribute("data-src", cat3, 0)} alt="cat3" srcset="" class="svelte-152sv9p"> <div class="placeholder svelte-152sv9p"></div></div></div> </section>`;
});
export {
  Page as default
};
