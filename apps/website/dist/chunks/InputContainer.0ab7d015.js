import { R as e } from './index.e8aae4d9.js';
import { c as t } from './useMediaQuery.94d811ae.js';
const f = (m) => {
  var a;
  const {
    as: u = 'div',
    label: c,
    disabled: o,
    required: d,
    status: r,
    message: s,
    icon: i,
    isLabelInline: l,
    isIconInline: p,
    children: b,
    className: v,
    style: E,
    statusMessage: n,
    ...N
  } = m;
  return e.createElement(
    u,
    {
      className: t(
        'iui-input-container',
        {
          'iui-disabled': o,
          [`iui-${r}`]: !!r,
          'iui-inline-label': l,
          'iui-inline-icon': p,
          'iui-with-message': (!!s || !!i || !!n) && !l,
        },
        v,
      ),
      style: E,
      ...N,
    },
    c &&
      e.createElement(
        'div',
        { className: t('iui-label', { 'iui-required': d }) },
        c,
      ),
    b,
    n ||
      e.createElement(
        e.Fragment,
        null,
        i &&
          e.cloneElement(i, {
            className: t(
              'iui-input-icon',
              (a = i.props) === null || a === void 0 ? void 0 : a.className,
            ),
          }),
        s && !l && e.createElement('div', { className: 'iui-message' }, s),
      ),
  );
};
export { f as I };
