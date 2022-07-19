/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Alert } from '@itwin/itwinui-react';

export default () => {
  return (
    <Alert
      type='positive'
      onClose={() => console.log('CLOSED')}
      clickableText='Learn more'
      style={{ minWidth: 350 }}
    >
      This is an alert
    </Alert>
  );
};
