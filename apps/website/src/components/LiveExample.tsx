/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import * as SandpackReact from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { SandpackPreviewRef } from '@codesandbox/sandpack-react';

const { SandpackProvider, SandpackThemeProvider, SandpackCodeEditor, SandpackPreview } =
  SandpackReact;

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
  background: linear-gradient(135deg, hsl(221deg 12% 40%), hsl(221deg 22% 25%));
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
  const previewRef = React.useRef<SandpackPreviewRef>();
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const [isDoneLoading, setIsDoneLoading] = React.useState(false);

  // TODO: Instead of waiting for "Show code", automatically load this in the background
  // and swap out the static component
  React.useEffect(() => {
    const client = previewRef.current?.getClient();

    if (isDoneLoading || !previewRef.current || !client) {
      return;
    }

    // keep re-rendering until we get the sandpack client
    if (previewRef.current && !client) forceUpdate();

    client?.listen((message) => {
      if (message.type === 'done') {
        setIsDoneLoading(true);
      }
    });
  });

  React.useEffect(() => {
    if (isHydrated.current) {
      return;
    }

    isHydrated.current = true;
  }, [isHydrated]);

  const [isExpanded, setIsExpanded] = React.useState(false);

  // TODO: replace this with composition to have more control over the layout and styling
  return (
    <LiveExampleContext.Provider value={{ isExpanded, setIsExpanded }}>
      {!isDoneLoading && (
        <div
          id={id}
          className={`live-example iui-body ${
            !isExpanded || !isDoneLoading ? 'sp-preview-container-collapsed' : ''
          }`}
        >
          {staticComponent}
          <Toggle />
        </div>
      )}
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
          <SandpackPreview
            ref={previewRef}
            style={{
              visibility: isDoneLoading ? 'visible' : 'hidden',
              position: isDoneLoading ? 'relative' : 'absolute',
            }}
            actionsChildren={<Toggle />}
          />
          {isExpanded && <SandpackCodeEditor showTabs={false} />}
        </SandpackThemeProvider>
      </SandpackProvider>
    </LiveExampleContext.Provider>
  );
};

const LiveExampleContext = React.createContext<{
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isExpanded: false,
  setIsExpanded: () => {},
});

const Toggle = () => {
  const { isExpanded, setIsExpanded } = React.useContext(LiveExampleContext);

  return (
    <button onClick={() => setIsExpanded((e) => !e)} className='show-code-button'>
      {!isExpanded ? 'Show code' : 'Hide code'}
    </button>
  );
};
