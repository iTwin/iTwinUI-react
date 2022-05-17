/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useMergedRefs, useTheme } from '../utils';
import '@itwin/itwinui-css/css/radio-tile.css';

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
   * Additional sublabel, if needed.
   */
  sublabel?: React.ReactNode;
  /**
   * Set focus on radio tile element.
   * @default false
   */
  setFocus?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * RadioTile component to be used in RadioTileGroup component
 * @example
 * <RadioTile label='My tile' sublabel='Some info' icon={<SvgSmileyHappy />} />
 */
export const RadioTile = React.forwardRef<HTMLInputElement, RadioTileProps>(
  (props, ref) => {
    const {
      icon,
      label,
      sublabel,
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
      <label className={cx('iui-radio-tile', className)} style={style}>
        <input
          className='iui-radio-tile-input'
          type='radio'
          ref={refs}
          {...rest}
        />
        <div className='iui-radio-tile-content'>
          {icon &&
            React.cloneElement(icon, {
              className: cx('iui-radio-tile-icon', icon.props.className),
            })}
          {label && <div className='iui-radio-tile-label'>{label}</div>}
          {sublabel && (
            <div className='iui-radio-tile-sublabel'>{sublabel}</div>
          )}
        </div>
      </label>
    );
  },
);

export default RadioTile;
