import { R as r } from './index.e8aae4d9.js';
import { b, a as h, c as y } from './useMediaQuery.94d811ae.js';
import { T as w } from './tippy-react.esm.524b62aa.js';
/* empty css                       */ const O = r.forwardRef((e, d) => {
    var i;
    const [n, a] = r.useState(!1),
      s = r.useContext(b),
      p = r.useRef(null),
      u = h(p, d),
      m = { fn: () => ({ onShow: () => a(!0), onHidden: () => a(!1) }) },
      v = {
        fn: () => ({
          onCreate: (t) => {
            var o;
            (o = t.popper.firstElementChild) === null ||
              o === void 0 ||
              o.removeAttribute('tabindex');
          },
        }),
      },
      l = {
        allowHTML: !0,
        animation: !1,
        appendTo: (t) => s?.rootRef.current || t.ownerDocument.body,
        arrow: !1,
        duration: 0,
        interactive: !0,
        role: void 0,
        offset: [0, 0],
        maxWidth: '',
        zIndex: 99999,
        ...e,
        className: y('iui-popover', e.className),
        plugins: [m, v, x, ...(e.plugins || [])],
        popperOptions: {
          strategy: 'fixed',
          ...e.popperOptions,
          modifiers: [
            { name: 'flip' },
            { name: 'preventOverflow', options: { padding: 0 } },
            ...(((i = e.popperOptions) === null || i === void 0
              ? void 0
              : i.modifiers) || []),
          ],
        },
      };
    if (e.render) {
      const t = e.render;
      l.render = (...o) => (n ? t(...o) : '');
    } else {
      const t = r.isValidElement(e.content)
        ? r.cloneElement(e.content, {
            onClick: (o) => {
              var f, c;
              o.stopPropagation(),
                (c = (f = e.content.props).onClick) === null ||
                  c === void 0 ||
                  c.call(f, o);
            },
          })
        : e.content;
      l.content = n ? t : '';
    }
    return r.createElement(w, { ...l, ref: u });
  }),
  x = {
    fn(e) {
      const d = () =>
          !Array.from(e.popper.querySelectorAll('*')).some(
            (a) => a?.tabIndex >= 0,
          ),
        i = (n) => {
          switch (n.key) {
            case 'Escape':
              e.hide();
              break;
            case 'Tab':
              d() && (n.shiftKey && n.preventDefault(), e.hide());
              break;
          }
        };
      return {
        onShow() {
          e.popper.addEventListener('keydown', i);
        },
        onHide() {
          e.popper.removeEventListener('keydown', i);
        },
      };
    },
  };
export { O as P };
