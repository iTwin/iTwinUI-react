/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import * as SandpackReact from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

const {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackCodeEditor,
  SandpackPreview,
} = SandpackReact;

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
  background: linear-gradient(300deg, #415e74, #172129);
}
`;

type Props = {
  code: string;
  ssr?: () => JSX.Element;
  staticComponent?: React.ReactNode;
};

export default ({ code = '', ssr, staticComponent, ...rest }: Props) => {
  const id = React.useId();
  const isHydrated = React.useRef(false);

  React.useEffect(() => {
    if (isHydrated.current) {
      return;
    }

    isHydrated.current = true;
  }, [isHydrated]);

  const [isExpanded, setIsExpanded] = React.useState(false);

  // TODO: replace this with composition to have more control over the layout and styling
  return (
    <div className={`live-example ${!isExpanded ? 'sp-preview-container-collapsed' : ''}`}>
      {!isExpanded ? (
        <>
          {staticComponent}
          <button
            onClick={() => setIsExpanded(true)}
            className='show-code-button'
            aria-controls={id}
            aria-expanded={isExpanded}
          >
            Show code
          </button>
        </>
      ) : (
        <div id={id}>
          <SandpackProvider
            template='react-ts'
            files={{
              '/App.tsx': code.trim(),
              '/index.tsx': { code: indexJs.trim(), hidden: true },
              '/styles.css': { code: indexCss.trim(), hidden: true },
            }}
            customSetup={{
              dependencies: {
                '@itwin/itwinui-react': 'latest',
              },
            }}
            id={id}
            {...rest}
          >
            <SandpackThemeProvider theme={nightOwl}>
              <SandpackPreview />
              <SandpackCodeEditor showTabs={false} />
            </SandpackThemeProvider>
          </SandpackProvider>
        </div>
      )}
    </div>
  );
};
