import { Sandpack } from '@codesandbox/sandpack-react';

export const LiveExample = ({ code = '', ...rest }) => {
  return (
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
  );
};

export default LiveExample;
