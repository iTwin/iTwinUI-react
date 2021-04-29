/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { FileUpload } from './FileUpload';

it('should render in its most basic state', () => {
  const mockContent = 'Mock drag content';
  const mockChildren = 'Mock children to wrap';
  const { container } = render(
    <FileUpload content={mockContent} onFileDropped={jest.fn}>
      {mockChildren}
    </FileUpload>,
  );

  const component = container.querySelector('.iui-file-upload') as HTMLElement;
  expect(component).toBeTruthy();

  const content = container.querySelector('.iui-content') as HTMLElement;
  expect(content).toBeTruthy();
  expect(content.textContent).toEqual(mockContent);

  const children = component.lastChild as HTMLElement;
  expect(children).toBeTruthy();
  expect(children.textContent).toEqual(mockChildren);
});
