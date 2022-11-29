/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import esbuild from 'esbuild';
import fg from 'fast-glob';

const isCjs = process.argv.length > 2 && process.argv[2] === '--cjs';

const entryPoints = fg.sync(['src/**/*.{ts,tsx}'], {
  ignore: ['src/**/*.test.{ts,tsx}'],
});

esbuild
  .build({
    entryPoints,
    bundle: false,
    format: isCjs ? 'cjs' : 'esm',
    outdir: isCjs ? 'cjs' : 'esm',
    watch: true,
    write: true,
    logLevel: 'info',
  })
  .catch(() => process.exit(1));
