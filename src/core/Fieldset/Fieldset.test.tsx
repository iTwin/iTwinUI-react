/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from './Fieldset';
import { InputGroup } from '../InputGroup';
import { ToggleSwitch } from '../ToggleSwitch';

it('should render in its most basic state', () => {
  const { container } = render(<Fieldset legend='legend' />);

  const fieldset = container.querySelector(
    '.iui-fieldset',
  ) as HTMLFieldSetElement;
  expect(fieldset).toBeTruthy();
  expect(fieldset.textContent).toBe('legend');
  expect(fieldset.title).toBeFalsy();
});

it('should add className and style correctly', () => {
  const { container } = render(
    <Fieldset className='test-class' legend='legend' style={{ width: '100px' }}>
      <InputGroup>
        <ToggleSwitch />
        <ToggleSwitch />
      </InputGroup>
    </Fieldset>,
  );
  const fieldset = container.querySelector(
    '.iui-fieldset.test-class',
  ) as HTMLFieldSetElement;
  expect(fieldset).toBeTruthy();
  expect(fieldset.style.width).toBe('100px');
  const inputs = container.querySelectorAll('input');
  expect(inputs.length).toBe(2);
});

it('should render disabled group', () => {
  const { container } = render(
    <Fieldset legend='legend' disabled={true}>
      <InputGroup>
        <ToggleSwitch disabled />
        <ToggleSwitch disabled />
      </InputGroup>
    </Fieldset>,
  );

  const fieldsetINPUT = container.querySelector(
    '.iui-fieldset',
  ) as HTMLFieldSetElement;
  expect(fieldsetINPUT).toBeTruthy();
  expect(fieldsetINPUT.disabled).toBe(true);

  const inputs = container.querySelectorAll('input');
  expect(inputs.length).toBe(2);
  inputs.forEach((input) => expect(input.disabled).toBe(true));
});
