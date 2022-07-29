/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';

export const ITwinUILogo = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = React.useState({ x: 0, y: 0 });
  const [animation, setAnimation] = React.useState('none');
  const [degrees, setDegrees] = React.useState(0);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setRotateDeg({
      x: (event.clientX - rect.left - rect.width / 2) / 20,
      y: -(event.clientY - rect.top - rect.height / 2) / 20,
    });

    // TODO: figure out how to calculate degrees based on mouse location
    setDegrees(
      Math.abs(
        Math.atan(
          (event.clientX - rect.left - rect.width / 2) /
            -(event.clientY - rect.top - rect.height / 2)
        ) *
          (180 / Math.PI)
      )
    );
    console.log(degrees);
  };

  const handleMouseEnter = () => {
    setAnimation('none');
  };

  const handleMouseLeave = () => {
    setAnimation('transform 1s ease');
    setRotateDeg({ x: 0, y: 0 });
    setCoords({ x: 0, y: 0 });
  };

  // TODO: figure out how to style in css files, not inline
  return (
    <div
      style={{
        width: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
        transform: `rotateY(${rotateDeg.x}deg) rotateX(${rotateDeg.y}deg)`,
        borderRadius: '25%',
        transformStyle: 'preserve-3d',
        transition: `${animation}`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        id='Layer_2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 297.5 340'
        style={{ height: '90%' }}
      >
        <defs>
          {/** Move grandients into css, this one does not allow more than 90deg rotation. Maybe move into astro file? */}
          <linearGradient id='grad1' gradientTransform={`rotate(45)`}>
            <stop offset='0%' style={{ stopColor: '#ffb6fc', stopOpacity: '1' }} />
            <stop offset='100%' style={{ stopColor: '#83a4ff', stopOpacity: '1' }} />
          </linearGradient>
          <linearGradient id='gra2' gradientTransform={`rotate(90)`}>
            <stop offset='0%' style={{ stopColor: '#fff', stopOpacity: '1' }} />
            <stop offset='50%' style={{ stopColor: '#fff', stopOpacity: '0' }} />
            <stop offset='100%' style={{ stopColor: '#fff', stopOpacity: '1' }} />
          </linearGradient>
        </defs>
        <path
          stroke='url(#gra2)'
          strokeWidth='2px'
          fill='url(#grad1)'
          d='M157.15,340c-3.71,0-7.4-.98-10.72-2.93-6.71-3.99-10.72-11.1-10.72-19.07v-118.31c0-2.24-1.18-4.32-3.11-5.47l-19.88-11.8c-6.2-3.76-8.26-11.97-4.59-18.33,3.63-6.35,11.58-8.53,17.88-4.72l23.22,14.07c7.81,4.73,12.58,13.2,12.58,22.33v110.08c0,1.71,1.86,2.77,3.34,1.9l103.4-61.49c1.93-1.15,3.11-3.23,3.11-5.47l-.23-138.04c0-2.25-1.19-4.33-3.13-5.47L151.75,28.62c-2.04-1.2-4.57-1.2-6.6,.01L28.97,97.7c-1.93,1.15-3.11,3.23-3.11,5.47l.23,138.06c0,2.24,1.19,4.32,3.12,5.46l84.43,49.93c6.24,3.72,8.36,11.9,4.75,18.3-3.63,6.4-11.62,8.51-17.84,4.87L13.01,267.73c-8.07-4.8-13.01-13.49-13.01-22.88V99.12c0-9.41,4.97-18.11,13.06-22.9L136.01,3.49c7.86-4.65,17.62-4.65,25.48,0l123.19,72.88c7.95,4.7,12.82,13.25,12.82,22.49V245.15c0,9.21-4.85,17.73-12.76,22.44l-116.82,69.47c-3.32,1.97-7.03,2.95-10.76,2.95Zm-26.67-204.21c0,10.35,8.18,18.74,18.27,18.74s18.27-8.39,18.27-18.74-8.18-18.74-18.27-18.74-18.27,8.39-18.27,18.74Z'
        />
      </svg>
    </div>
  );
};

export default ITwinUILogo;
