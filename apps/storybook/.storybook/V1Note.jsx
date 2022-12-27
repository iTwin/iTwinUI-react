import React from 'react';
import { Anchor } from '@itwin/itwinui-react';

export const V1Note = () => {
  return (
    <div
      style={{
        position: 'fixed',
        maxWidth: '60ch',
        borderRadius: 4,
        bottom: 16,
        right: 8,
        padding: 8,
        border: '1px solid',
      }}
    >
      ⚠️ This is the storybook for v1 of iTwinUI-react.
      <br />
      For the latest version, please visit{' '}
      <Anchor href='https://itwin.github.io/iTwinUI'>
        itwin.github.io/iTwinUI
      </Anchor>
    </div>
  );
};

export default V1Note;
