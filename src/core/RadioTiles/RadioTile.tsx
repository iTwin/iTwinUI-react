/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgCheckmark from '@itwin/itwinui-icons-react/cjs/icons/Checkmark';
import cx from 'classnames';
import React from 'react';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/inputs.css';

export type RadioTileProps = {
  /**
   * Icon to be used.
   */
  icon?: JSX.Element;
  /**
   * Label of the Radio tile.
   */
  label?: React.ReactNode;
  /**
   * Additional description, if needed.
   */
  description?: React.ReactNode;
  /**
   * Set focus on radio tile element.
   * @default false
   */
  setFocus?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * RadioTile component to be used in RadioTileGroup component
 * @example
 * <RadioTile label='My tile' description='Some info' icon={<SvgSmileyHappy />} />
 */
export const RadioTile = React.forwardRef<HTMLInputElement, RadioTileProps>(
  (props, ref) => {
    const {
      icon,
      label,
      description,
      setFocus = false,
      className,
      style,
      ...rest
    } = props;

    useTheme();

    const inputElementRef = React.useRef<HTMLInputElement>(null);
    const refs = useMergedRefs<HTMLInputElement>(inputElementRef, ref);

    React.useEffect(() => {
      if (inputElementRef.current && setFocus) {
        inputElementRef.current.focus();
      }
    }, [setFocus]);

    return (
      <label className={className} style={style}>
        <input type='radio' ref={refs} {...rest} />
        <div className='iui-radio-tile'>
          <SvgCheckmark className='iui-checkmark' aria-hidden />
          {icon &&
            React.cloneElement(icon, {
              className: cx('iui-icon', icon.props.className),
            })}
          {label && <div className='iui-label'>{label}</div>}
          {description && <div className='iui-description'>{description}</div>}
        </div>
      </label>
    );
  },
);

export default RadioTile;
