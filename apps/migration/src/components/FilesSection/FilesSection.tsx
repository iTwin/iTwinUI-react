/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './FilesSection.scss';
import { FileCard } from './components/FileCard/FileCard';
import { ProgressRadial } from '@itwin/itwinui-react';

export const FilesSection = () => {
  const [matches, setMatches] = React.useState([]);

  const getMatches = async () => {
    console.log('getMatches() called');

    const response = await fetch(`/all_matches`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const a = await response.json();
    console.log('a: ', a);
    setMatches(a);
  };

  React.useEffect(() => {
    getMatches();
  }, []);

  return (
    <span className='FilesSection'>
      {/* {[...Array(5)].map((_, index) => {
        return <FileCard />;
      })} */}
      {matches.length > 0 ? (
        matches.map((fileMatches, index) => (
          <FileCard key={index} file={fileMatches} />
        ))
      ) : (
        <ProgressRadial indeterminate />
      )}
    </span>
  );
};
