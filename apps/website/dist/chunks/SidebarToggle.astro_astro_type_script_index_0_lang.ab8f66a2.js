let s = [],
  c = (r) => {
    let i,
      t = [],
      e = {
        lc: 0,
        value: r,
        set(l) {
          (e.value = l), e.notify();
        },
        get() {
          return e.lc || e.listen(() => {})(), e.value;
        },
        notify(l) {
          i = t;
          let u = !s.length;
          for (let n = 0; n < i.length; n++) s.push(i[n], e.value, l);
          if (u) {
            for (let n = 0; n < s.length; n += 3) s[n](s[n + 1], s[n + 2]);
            s.length = 0;
          }
        },
        listen(l) {
          return (
            t === i && (t = t.slice()),
            (e.lc = t.push(l)),
            () => {
              t === i && (t = t.slice());
              let u = t.indexOf(l);
              ~u && (t.splice(u, 1), e.lc--);
            }
          );
        },
        subscribe(l) {
          let u = e.listen(l);
          return l(e.value), u;
        },
        off() {},
      };
    return e;
  };
const a = c(!1);
a.subscribe((r) => {
  document
    .querySelector('sidebar-toggle button')
    ?.setAttribute('aria-expanded', r ? 'true' : 'false'),
    document
      .querySelector('left-sidebar')
      ?.setAttribute('visible', r ? 'true' : 'false'),
    document.querySelector('main').toggleAttribute('inert', r);
});
customElements.define(
  'sidebar-toggle',
  class extends HTMLElement {
    connectedCallback() {
      const r = this.querySelector('button');
      r.addEventListener('click', () => {
        const i = r.getAttribute('aria-expanded') === 'true';
        a.set(!i);
      });
    }
  },
);
export { a as i };
