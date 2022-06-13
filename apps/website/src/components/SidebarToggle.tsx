/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { useState, useEffect } from "react";

const MenuToggle = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  // TODO: make this work without useEffect. Move into Astro file for better styling?
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (sidebarShown) {
      body.classList.add("mobile-sidebar-toggle");
    } else {
      body.classList.remove("mobile-sidebar-toggle");
    }
  }, [sidebarShown]);

  return (
    <button
      type="button"
      aria-pressed={sidebarShown ? "true" : "false"}
      id="menu-toggle"
      onClick={() => setSidebarShown(!sidebarShown)}
      aria-label="Toggle sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
