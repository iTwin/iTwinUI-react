/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Sandpack } from "@codesandbox/sandpack-react";

const indexJs = `
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@itwin/itwinui-react';
import App from './App';
import './styles.css';
createRoot(document.getElementById('root')).render(<ThemeProvider theme='dark'><App /></ThemeProvider>);
`;

const indexCss = `
* {
  margin: 0;
  box-sizing: border-box;
}
html { color-scheme: dark; }
#root {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: linear-gradient(225deg, #4e5d6e 0%, #363944 100%);
}
`;

export const LiveExample = ({ code = "", ...rest }) => {
  // TODO: replace this with composition to have more control over the layout and styling
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={{
        "/App.js": code.trim(),
        "/index.js": { code: indexJs.trim(), hidden: true },
        "/styles.css": { code: indexCss.trim(), hidden: true },
      }}
      customSetup={{
        dependencies: {
          "@itwin/itwinui-react": "latest",
        },
      }}
      {...rest}
    />
  );
};

export default LiveExample;
