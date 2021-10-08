/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { InformationPanel } from './InformationPanel';
import { InformationPanelWrapper } from './InformationPanelWrapper';
import { SvgCloseSmall, SvgEdit } from '@itwin/itwinui-icons-react';
import { IconButton } from '../Buttons';
import { act } from 'react-dom/test-utils';

const getBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
HTMLElement.prototype.getBoundingClientRect = () => {
  return {
    width: 400,
    height: 500,
    bottom: 1000,
    right: 1000,
  } as DOMRect;
};

afterAll(() => {
  HTMLElement.prototype.getBoundingClientRect = getBoundingClientRect;
});

it('should render in a basic state', () => {
  const { container } = render(
    <InformationPanel label='InfoPanel label'>
      <span className='demo-content'>InfoPanel content</span>
    </InformationPanel>,
  );

  const infoPanel = container.querySelector(
    '.iui-information-panel.iui-right',
  ) as HTMLElement;
  expect(infoPanel).toBeTruthy();

  expect(
    infoPanel.querySelector('.iui-information-header-label'),
  ).toHaveTextContent('InfoPanel label');
  expect(
    infoPanel.querySelector('.iui-information-body > .demo-content'),
  ).toHaveTextContent('InfoPanel content');

  expect(
    infoPanel.querySelector('.iui-resizer > .iui-resizer-bar'),
  ).toBeTruthy();

  expect(
    infoPanel.querySelector(
      '.iui-information-header-actions > .iui-button[aria-label="Close"]',
    ),
  ).toBeTruthy();
});

it('should be visible when isOpen is set', () => {
  const { container } = render(<InformationPanel isOpen />);
  expect(container.querySelector('.iui-information-panel')).toHaveClass(
    'iui-visible',
  );
});

it('should accept horizontal orientation', () => {
  const { container } = render(<InformationPanel orientation='horizontal' />);
  expect(container.querySelector('.iui-information-panel')).toHaveClass(
    'iui-bottom',
  );
});

it('should allow turning off resizer', () => {
  const { container } = render(<InformationPanel resizable={false} />);
  expect(
    container.querySelector('.iui-information-panel .iui-resizer'),
  ).toBeFalsy();
});

it('should render close icon correctly', () => {
  const mockOnClose = jest.fn();
  const { container } = render(
    <InformationPanel isOpen onClose={mockOnClose} />,
  );

  const infoPanel = container.querySelector(
    '.iui-information-panel',
  ) as HTMLElement;
  expect(infoPanel).toHaveClass('iui-visible');

  const {
    container: { firstChild: closeSvg },
  } = render(<SvgCloseSmall className='iui-icon' aria-hidden />);

  const closeButton = infoPanel.querySelector(
    '.iui-information-header > .iui-information-header-actions > .iui-button.iui-borderless',
  ) as HTMLButtonElement;
  expect(closeButton.firstElementChild).toEqual(closeSvg);
  expect(closeButton).toHaveAttribute('aria-label', 'Close');

  expect(mockOnClose).not.toHaveBeenCalled();
  closeButton.click();
  expect(mockOnClose).toHaveBeenCalled();
  expect(infoPanel).not.toHaveClass('iui-visible');
});

it('should render custom header actions', () => {
  const {
    container: { firstChild: editButton },
  } = render(
    <IconButton styleType='borderless'>
      <SvgEdit />
    </IconButton>,
  );
  const { container } = render(
    <InformationPanel
      headerActions={[
        <IconButton key='edit' styleType='borderless'>
          <SvgEdit />
        </IconButton>,
      ]}
    />,
  );

  const actions = container.querySelector(
    '.iui-information-header-actions',
  ) as HTMLElement;
  expect(actions.children).toHaveLength(2);
  expect(actions.firstElementChild).toEqual(editButton);
});

it('should handle resizing', () => {
  const { container } = render(<InformationPanel />);
  const infoPanel = container.querySelector(
    '.iui-information-panel',
  ) as HTMLElement;
  expect(infoPanel).not.toHaveAttribute('style');

  const resizer = infoPanel.querySelector('.iui-resizer') as HTMLElement;

  act(() => {
    fireEvent.pointerDown(resizer, { button: 0 });
    fireEvent.pointerMove(document, { x: 500 });
    fireEvent.pointerUp(document);
  });

  // FIXME
  // expect(infoPanel).toHaveAttribute('style', 'width: 500px');
});

it('should accept className and style props', () => {
  const { container } = render(
    <InformationPanel className='test-class' style={{ width: 400 }} />,
  );

  const infoPanel = container.querySelector(
    '.iui-information-panel',
  ) as HTMLElement;
  expect(infoPanel).toHaveClass('test-class');
  expect(infoPanel).toHaveStyle('width: 400px');
});

it('should render with wrapper', () => {
  const { container } = render(
    <InformationPanelWrapper className='test-class'>
      <InformationPanel />
    </InformationPanelWrapper>,
  );
  const wrapper = container.querySelector(
    '.iui-information-panel-wrapper',
  ) as HTMLElement;
  expect(wrapper).toBeTruthy();
  expect(wrapper).toHaveClass('test-class');
  expect(wrapper.querySelector('.iui-information-panel')).toBeTruthy();
});
