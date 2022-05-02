import cx from 'classnames';
import React from 'react';
import { useSafeContext, useMergedRefs } from '../utils';
import { ComboBoxActionContext, ComboBoxRefsContext } from './helpers';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';

type ComboBoxEndIconProps = React.ComponentPropsWithoutRef<'span'> & {
  disabled?: boolean;
  isOpen?: boolean;
};

export const ComboBoxEndIcon = React.forwardRef(
  (props: ComboBoxEndIconProps, forwardedRef: React.Ref<HTMLSpanElement>) => {
    const {
      className,
      children,
      onClick: onClickProp,
      disabled,
      isOpen,
      ...rest
    } = props;
    const dispatch = useSafeContext(ComboBoxActionContext);
    const { toggleButtonRef } = useSafeContext(ComboBoxRefsContext);
    const refs = useMergedRefs(toggleButtonRef, forwardedRef);

    return (
      <span
        ref={refs}
        className={cx(
          'iui-end-icon',
          {
            'iui-actionable': !disabled,
            'iui-disabled': disabled,
            'iui-open': isOpen,
          },
          className,
        )}
        onClick={(e) => {
          onClickProp?.(e);
          if (!e.isDefaultPrevented()) {
            dispatch(['toggle']);
          }
        }}
        {...rest}
      >
        {children ?? <SvgCaretDownSmall aria-hidden />}
      </span>
    );
  },
);
ComboBoxEndIcon.displayName = 'ComboBoxEndIcon';
