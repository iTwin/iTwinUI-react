/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import esbuild from 'esbuild';
import fg from 'fast-glob';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const argsList = process.argv.length > 2 ? process.argv.slice(2) : [];
const isCjs = argsList.includes('--cjs');
const shouldWatch = argsList.includes('--watch');

const entryPoints = fg.sync(['src/**/*.{ts,tsx}'], {
  ignore: ['src/**/*.test.{ts,tsx}'],
  cwd: dirname(fileURLToPath(import.meta.url)),
});

esbuild
  .build({
    entryPoints,
    bundle: false,
    format: isCjs ? 'cjs' : 'esm',
    outdir: isCjs ? 'cjs' : 'esm',
    watch: shouldWatch,
    write: true,
    logLevel: 'info',
  })
  .catch(() => process.exit(1));
