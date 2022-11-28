/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/core/utils/index.ts'],
  splitting: false,
  clean: true,
  format: 'esm',
  outDir: 'esm',
  outExtension: () => ({ js: '.js' }),
  external: ['react'],
  watch: true,
});
