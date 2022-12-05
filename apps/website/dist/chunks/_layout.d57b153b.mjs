import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, $ as $$Header, e as renderSlot, f as $$Global } from '../entry.mjs';
/* empty css                               */import 'react';
import 'react-dom/server';
import 'html-escaper';
/* empty css                          *//* empty css                              *//* empty css                               */import 'react/jsx-runtime';
import 'path';
import 'url';
import 'fs';
import 'react-docgen-typescript';
import 'react-docgen';
import 'snarkdown';
import 'classnames';
import 'tippy.js';
import 'react-dom';
import 'react-transition-group';
import '@itwin/itwinui-illustrations-react';
import 'react-table';
import '@code-hike/classer';
import 'codesandbox-import-utils/lib/create-sandbox/templates.js';
import 'lodash.isequal';
import '@stitches/core';
import '@codemirror/closebrackets';
import '@codemirror/commands';
import '@codemirror/comment';
import '@codemirror/gutter';
import '@codemirror/highlight';
import '@codemirror/history';
import '@codemirror/matchbrackets';
import '@codemirror/state';
import '@codemirror/view';
import '@react-hook/intersection-observer';
import '@codemirror/lang-css';
import '@codemirror/lang-html';
import '@codemirror/lang-javascript';
import 'lz-string';
import 'clean-set';
import 'node:fs';
/* empty css                              */
const $$Astro$2 = createAstro("C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/src/components/LeftSidebarContent.astro", "", "file:///C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/");
const $$LeftSidebarContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LeftSidebarContent;
  const currentPage = Astro2.url.pathname.endsWith("/") ? Astro2.url.pathname.slice(0, -1) : Astro2.url.pathname;
  const docsPages = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/docs/Typography.mdx": () => import('../entry.mjs').then(n => n.A),"../pages/docs/alert.mdx": () => import('../entry.mjs').then(n => n.Y),"../pages/docs/anchor.mdx": () => import('../entry.mjs').then(n => n.Q),"../pages/docs/avatar.mdx": () => import('../entry.mjs').then(n => n.R),"../pages/docs/badge.mdx": () => import('../entry.mjs').then(n => n.Z),"../pages/docs/blockquote.mdx": () => import('../entry.mjs').then(n => n.B),"../pages/docs/breadcrumbs.mdx": () => import('../entry.mjs').then(n => n.v),"../pages/docs/button.mdx": () => import('../entry.mjs').then(n => n.S),"../pages/docs/buttongroup.mdx": () => import('../entry.mjs').then(n => n.w),"../pages/docs/carousel.mdx": () => import('../entry.mjs').then(n => n.I),"../pages/docs/checkbox.mdx": () => import('../entry.mjs').then(n => n.J),"../pages/docs/code.mdx": () => import('../entry.mjs').then(n => n.a5),"../pages/docs/colorpicker.mdx": () => import('../entry.mjs').then(n => n.x),"../pages/docs/combobox.mdx": () => import('../entry.mjs').then(n => n.K),"../pages/docs/datepicker.mdx": () => import('../entry.mjs').then(n => n.C),"../pages/docs/dialog.mdx": () => import('../entry.mjs').then(n => n.T),"../pages/docs/dropdownbutton.mdx": () => import('../entry.mjs').then(n => n.j),"../pages/docs/dropdownmenu.mdx": () => import('../entry.mjs').then(n => n.q),"../pages/docs/expandableblock.mdx": () => import('../entry.mjs').then(n => n.h),"../pages/docs/fieldset.mdx": () => import('../entry.mjs').then(n => n.L),"../pages/docs/fileupload.mdx": () => import('../entry.mjs').then(n => n.D),"../pages/docs/footer.mdx": () => import('../entry.mjs').then(n => n.U),"../pages/docs/header.mdx": () => import('../entry.mjs').then(n => n.V),"../pages/docs/iconbutton.mdx": () => import('../entry.mjs').then(n => n.E),"../pages/docs/ideasbutton.mdx": () => import('../entry.mjs').then(n => n.y),"../pages/docs/index.mdx": () => import('../entry.mjs').then(n => n._),"../pages/docs/informationpanel.mdx": () => import('../entry.mjs').then(n => n.g),"../pages/docs/input.mdx": () => import('../entry.mjs').then(n => n.a0),"../pages/docs/inputgroup.mdx": () => import('../entry.mjs').then(n => n.F),"../pages/docs/keyboardkeys.mdx": () => import('../entry.mjs').then(n => n.s),"../pages/docs/label.mdx": () => import('../entry.mjs').then(n => n.a1),"../pages/docs/labeledinput.mdx": () => import('../entry.mjs').then(n => n.t),"../pages/docs/labeledselect.mdx": () => import('../entry.mjs').then(n => n.o),"../pages/docs/labeledtextarea.mdx": () => import('../entry.mjs').then(n => n.i),"../pages/docs/nonidealstate.mdx": () => import('../entry.mjs').then(n => n.p),"../pages/docs/progresslinear.mdx": () => import('../entry.mjs').then(n => n.k),"../pages/docs/progressradial.mdx": () => import('../entry.mjs').then(n => n.l),"../pages/docs/radio.mdx": () => import('../entry.mjs').then(n => n.a2),"../pages/docs/radiotile.mdx": () => import('../entry.mjs').then(n => n.G),"../pages/docs/select.mdx": () => import('../entry.mjs').then(n => n.W),"../pages/docs/sidenavigation.mdx": () => import('../entry.mjs').then(n => n.n),"../pages/docs/slider.mdx": () => import('../entry.mjs').then(n => n.X),"../pages/docs/splitbutton.mdx": () => import('../entry.mjs').then(n => n.z),"../pages/docs/stepper.mdx": () => import('../entry.mjs').then(n => n.N),"../pages/docs/surface.mdx": () => import('../entry.mjs').then(n => n.O),"../pages/docs/table.mdx": () => import('../entry.mjs').then(n => n.a3),"../pages/docs/tabs.mdx": () => import('../entry.mjs').then(n => n.a6),"../pages/docs/tag.mdx": () => import('../entry.mjs').then(n => n.aa),"../pages/docs/text.mdx": () => import('../entry.mjs').then(n => n.a7),"../pages/docs/textarea.mdx": () => import('../entry.mjs').then(n => n.M),"../pages/docs/tile.mdx": () => import('../entry.mjs').then(n => n.a8),"../pages/docs/toast.mdx": () => import('../entry.mjs').then(n => n.a4),"../pages/docs/toggleswitch.mdx": () => import('../entry.mjs').then(n => n.u),"../pages/docs/tooltip.mdx": () => import('../entry.mjs').then(n => n.P),"../pages/docs/tree.mdx": () => import('../entry.mjs').then(n => n.a9),"../pages/docs/variables.mdx": () => import('../entry.mjs').then(n => n.H)}), () => "../pages/docs/*.mdx")).map(({ url, frontmatter }) => ({
    url,
    title: frontmatter.title,
    group: frontmatter.group
  }));
  const introPages = docsPages.filter((page) => !page.group);
  const sections = /* @__PURE__ */ new Map();
  sections.set("components", docsPages.filter((item) => item.group === "core"));
  sections.set("buttons", docsPages.filter((item) => item.group === "buttons"));
  sections.set("inputs", docsPages.filter((item) => item.group === "inputs"));
  sections.set("typography", docsPages.filter((item) => item.group === "typography"));
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate`${maybeRenderHead($$result)}<nav aria-labelledby="grid-left" class="astro-CYX52GOS">
  <ul class="nav-groups astro-CYX52GOS" id="main-navigation-list">
    ${introPages.map(({ url, title }) => renderTemplate`<li class="nav-link astro-CYX52GOS">
          <a${addAttribute(url, "href")}${addAttribute(`${currentPage === url ? "page" : "false"}`, "aria-current")} class="astro-CYX52GOS">
            ${title}
          </a>
        </li>`)}
    ${[...sections.entries()].map(([heading, list]) => renderTemplate`<li class="astro-CYX52GOS">
          <div class="nav-group astro-CYX52GOS">
            <h2 class="nav-group-title astro-CYX52GOS">${heading}</h2>
            <ul class="astro-CYX52GOS">
              ${list.map(({ url, title }) => renderTemplate`<li class="nav-link astro-CYX52GOS">
                  <a${addAttribute(url, "href")}${addAttribute(`${currentPage === url ? "page" : "false"}`, "aria-current")} class="astro-CYX52GOS">
                    ${title}
                  </a>
                </li>`)}
            </ul>
          </div>
        </li>`)}
  </ul>
</nav>

`;
});

const $$Astro$1 = createAstro("C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/src/components/LeftSidebar.astro", "", "file:///C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/");
const $$LeftSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSidebar;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate`${renderComponent($$result, "left-sidebar", "left-sidebar", { ...Astro2.props }, { "default": () => renderTemplate`
  ${maybeRenderHead($$result)}<aside aria-label="Main navigation" class="astro-MTJ55Q3X">
    ${renderComponent($$result, "LeftSidebarContent", $$LeftSidebarContent, { "class": "astro-MTJ55Q3X" })}
  </aside>
  <div class="sidebar-backdrop astro-MTJ55Q3X" aria-hidden="true"></div>
` })}

${maybeRenderHead($$result)}

`;
});

const $$Astro = createAstro("C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/src/pages/docs/_layout.astro", "", "file:///C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { content = {} } = Astro2.props;
  const currentPage = new URL(Astro2.request.url).pathname;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate`${renderComponent($$result, "Global", $$Global, { "content": content, "currentPage": currentPage, "class": "astro-SH5MZNM6" }, { "default": () => renderTemplate`${renderComponent($$result, "Header", $$Header, { "class": "header astro-SH5MZNM6" })}${renderComponent($$result, "LeftSidebar", $$LeftSidebar, { "class": "sidebar astro-SH5MZNM6" })}${maybeRenderHead($$result)}<div class="content-wrapper astro-SH5MZNM6" id="article">
    <h1 id="overview" class="astro-SH5MZNM6">${content.title}</h1>
    ${renderSlot($$result, $$slots["default"])}
  </div>` })}



${maybeRenderHead($$result)}`;
});

const $$file = "C:/Users/rohan.kadkol/Documents/iTwinUI-react/apps/website/src/pages/docs/_layout.astro";
const $$url = "/docs/_layout";

export { $$Layout as default, $$file as file, $$url as url };
