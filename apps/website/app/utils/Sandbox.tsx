import { Sandpack } from '@codesandbox/sandpack-react';
import { ClientOnly } from 'remix-utils';
import sandpackStyles from '@codesandbox/sandpack-react/dist/index.css';

export const Sandbox = ({ code = '', ...rest }) => {
  return (
    <ClientOnly fallback={<div style={{ minHeight: 300 }} />}>
      <Sandpack
        template='react'
        theme={'monokai-pro'}
        customSetup={{
          dependencies: {
            '@itwin/itwinui-react': 'latest',
          },
          files: {
            '/App.js': code.trim(),
          },
        }}
        {...rest}
      />
    </ClientOnly>
  );
};
Sandbox.styles = sandpackStyles;

export default Sandbox;
