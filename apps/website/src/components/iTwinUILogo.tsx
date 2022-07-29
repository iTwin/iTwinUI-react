/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';

/**
 * This could be moved into astro file. Rewrite handlers with js event listeners.
 */

export const ITwinUILogo = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = React.useState({ x: 0, y: 0 });
  const [animation, setAnimation] = React.useState('none');
  const [degrees, setDegrees] = React.useState(0);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();

    // Mouse coords inside container
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });

    // Reset mouse coords to 0,0 at center of container. Division to make movement smaller.
    setRotateDeg({
      x: (event.clientX - rect.left - rect.width / 2) / 20,
      y: -(event.clientY - rect.top - rect.height / 2) / 20,
    });

    // TODO: figure out how to calculate degrees based on mouse location.
    setDegrees(
      Math.abs(
        // Using archtangents to calculate angle.
        Math.atan(
          (event.clientX - rect.left - rect.width / 2) /
            -(event.clientY - rect.top - rect.height / 2)
        ) *
          // Converting from radians to degrees
          (180 / Math.PI)
      )
    );
    console.log(degrees);
  };

  const handleMouseEnter = () => {
    // Remove animation delay, makes rotating smooth
    setAnimation('none');
  };

  const handleMouseLeave = () => {
    // Reset position
    setAnimation('transform 1s ease');
    setRotateDeg({ x: 0, y: 0 });
    setCoords({ x: 0, y: 0 });
  };

  return (
    // 3D effect rectangle. Must be a bit bigger than logo.
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
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 291.42 333' style={{ height: '90%' }}>
        <defs>
          {/** Move gradients into css classes, this one does not allow more than 90deg rotation.*/}
          <linearGradient id='grad1' gradientTransform={`rotate(45)`}>
            <stop offset='0%' style={{ stopColor: '#ffb6fc', stopOpacity: '1' }} />
            <stop offset='100%' style={{ stopColor: '#83a4ff', stopOpacity: '1' }} />
          </linearGradient>
          <linearGradient id='gra2' gradientTransform={`rotate(90)`}>
            <stop offset='0%' style={{ stopColor: '#fff', stopOpacity: '1' }} />
            <stop offset='50%' style={{ stopColor: '#fff', stopOpacity: '0.2' }} />
            <stop offset='100%' style={{ stopColor: '#fff', stopOpacity: '1' }} />
          </linearGradient>
        </defs>
        <path
          stroke='url(#gra2)'
          strokeWidth='2px'
          fill='url(#grad1)'
          d='M153.89,333c-3.62,0-7.25-.98-10.48-2.84-6.56-3.92-10.48-10.87-10.48-18.71v-115.88c0-2.16-1.18-4.21-3.04-5.39l-19.49-11.56c-6.07-3.72-8.13-11.75-4.51-17.93,3.53-6.17,11.36-8.33,17.53-4.6l22.73,13.81c7.64,4.6,12.34,12.93,12.34,21.84v107.85c0,1.67,1.86,2.74,3.23,1.86l101.29-60.24c1.86-1.08,3.04-3.13,3.04-5.39l-.2-135.18c0-2.16-1.18-4.21-3.04-5.39L148.6,27.97c-1.96-1.18-4.51-1.18-6.47,0L28.31,95.65c-1.86,1.08-3.04,3.13-3.04,5.39l.2,135.28c0,2.16,1.18,4.21,3.04,5.39l82.67,48.88c6.07,3.62,8.23,11.66,4.7,17.93-3.53,6.27-11.36,8.33-17.44,4.8L12.73,262.28c-7.93-4.7-12.73-13.22-12.73-22.43V97.03c0-9.21,4.9-17.73,12.83-22.43L133.22,3.38c7.74-4.51,17.24-4.51,24.98,0l120.68,71.41c7.74,4.6,12.54,13.03,12.54,22.04V240.14c0,9.01-4.7,17.34-12.54,21.94l-114.41,68.08c-3.33,1.86-6.95,2.84-10.58,2.84Zm-26.15-200.03c0,10.09,8.03,18.32,17.93,18.32s17.93-8.23,17.93-18.32-8.03-18.32-17.93-18.32c-9.89,0-17.93,8.13-17.93,18.32Z'
        />
      </svg>
    </div>
  );
};

export default ITwinUILogo;
