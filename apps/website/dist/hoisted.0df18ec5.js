import { i as r } from './chunks/SidebarToggle.astro_astro_type_script_index_0_lang.ab8f66a2.js';
const c = [...document.querySelectorAll('.content-wrapper :is(h1,h2,h3,h4)')],
  s = new Set(),
  d = new IntersectionObserver((e) => {
    e.forEach((i) => {
      const t = i.target.getAttribute('id');
      i.isIntersecting ? (s.add(t), n()) : (s.delete(t), n());
    });
  }),
  n = () => {
    let e = !1;
    for (const i of c) {
      const t = i.id,
        a = document.querySelector(`nav li a[href='#${t}']`)?.parentElement;
      s.has(t) && !e
        ? (a?.setAttribute('data-active', 'true'), (e = !0))
        : s.size > 0 && a?.removeAttribute('data-active');
    }
  };
c.forEach((e) => void d.observe(e));
customElements.define(
  'left-sidebar',
  class extends HTMLElement {
    connectedCallback() {
      const e = this.querySelector('aside');
      window
        .matchMedia('(max-width: 50em)')
        .addEventListener('change', ({ matches: t }) => {
          t || (r.set(!1), e.removeAttribute('data-visible'));
        }),
        this.querySelector('.sidebar-backdrop').addEventListener(
          'click',
          () => {
            r.set(!1);
          },
        );
    }
    static get observedAttributes() {
      return ['visible'];
    }
    attributeChangedCallback(e, i, t) {
      e === 'visible' &&
        this.querySelector('aside')?.setAttribute('data-visible', t);
    }
  },
);
