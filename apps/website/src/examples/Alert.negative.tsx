/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Alert } from '@itwin/itwinui-react';

export default () => {
  return (
    <Alert
      type='negative'
      onClose={() => console.log('CLOSED')}
      clickableText='Learn more'
      style={{ minWidth: 350 }}
    >
      This is an alert
    </Alert>
  );
};
