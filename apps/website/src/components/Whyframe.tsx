/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
export default function Whyframe() {
  return (
    <iframe data-why>
      <HelloWorld />
    </iframe>
  );
}

const HelloWorld = () => <span>Hello world</span>;
