/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
export type MatchLine = {
  fileName: string;
  line_number: number;
  line: string;
  replace: string;
  with: string;
};

export type MatchFile = {
  fileName: string;
  matchLines: MatchLine[];
};
