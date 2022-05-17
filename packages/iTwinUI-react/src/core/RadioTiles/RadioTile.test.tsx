/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import RadioTile from './RadioTile';
import SvgPlaceholder from '@itwin/itwinui-icons-react/cjs/icons/Placeholder';

it('should render empty radio tile', () => {
  const { container } = render(<RadioTile />);
  expect(container.querySelector('.iui-radio-tile')).toBeTruthy();
  expect(container.querySelector('.iui-radio-tile-label')).toBeNull();
  expect(container.querySelector('.iui-radio-tile-sublabel')).toBeNull();
  expect(container.querySelector('.iui-radio-tile-icon')).toBeNull();
});

it('should render radio tile with label', () => {
  const { container } = render(<RadioTile label='My label' />);
  expect(container.querySelector('.iui-radio-tile')).toBeTruthy();
  const label = container.querySelector('.iui-radio-tile-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.textContent).toBe('My label');
});

it('should render radio tile with label and sublabel', () => {
  const { container } = render(
    <RadioTile label='My label' sublabel='And sublabel' />,
  );
  expect(container.querySelector('.iui-radio-tile')).toBeTruthy();
  const label = container.querySelector('.iui-radio-tile-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.textContent).toBe('My label');
  const sublabel = container.querySelector(
    '.iui-radio-tile-sublabel',
  ) as HTMLElement;
  expect(sublabel).toBeTruthy();
  expect(sublabel.textContent).toBe('And sublabel');
});

it('should render radio tile with icon', () => {
  const { container } = render(<RadioTile icon={<SvgPlaceholder />} />);
  expect(container.querySelector('.iui-radio-tile')).toBeTruthy();
  expect(container.querySelector('.iui-radio-tile-icon')).toBeTruthy();
});

it('should take class and style', () => {
  const { container } = render(
    <RadioTile
      className='my-class'
      style={{ width: 80 }}
      icon={<SvgPlaceholder />}
    />,
  );
  const element = container.querySelector(
    '.iui-radio-tile.my-class',
  ) as HTMLElement;
  expect(element).toBeTruthy();
  expect(element.style.width).toBe('80px');
});

it('should set focus', () => {
  let element: HTMLInputElement | null = null;
  const onRef = (ref: HTMLInputElement) => {
    element = ref;
  };
  const { container } = render(
    <RadioTile label='Some label' ref={onRef} setFocus />,
  );

  expect(container.querySelector('.iui-radio-tile')).toBeTruthy();

  expect(element).toBeTruthy();
  expect(document.activeElement).toEqual(element);
});
