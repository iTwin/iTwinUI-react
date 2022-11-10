/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './FilesSection.scss';
import { FileCard } from './components/FileCard/FileCard';

export const FilesSection = () => {
  return (
    <span className='FilesSection'>
      {[...Array(5)].map((_, index) => {
        return <FileCard />;
      })}
    </span>
  );
};
