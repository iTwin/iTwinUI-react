/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';

export const ITwinUILogo = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = React.useState({ x: 0, y: 0 });
  const [animation, setAnimation] = React.useState('none');

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
  };

  const handleMouseEnter = () => {
    setAnimation('none');
  };

  const handleMouseLeave = () => {
    setAnimation('transform 1s ease');
    setRotateDeg({ x: 0, y: 0 });
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        background: `linear-gradient(
          35deg,hsl(314, 57%, 95%),hsl(232, 79%, 90%),hsl(186, 78%, 85%), #fff ${
            50 + rotateDeg.x * rotateDeg.y * 0.5
          }%,hsl(232, 79%, 95%),hsl(314, 57%, 90%),hsl(186, 78%, 89%) )`,
        transform: `rotateY(${rotateDeg.x}deg) rotateX(${rotateDeg.y}deg)`,
        borderRadius: '25%',
        transformStyle: 'preserve-3d',
        boxShadow: `0 10px 20px hsl(232, 79%, 90%), 0 0 30px hsla(186, 78%, 95%,75%)`,
        transition: `${animation}`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 174 174'
        fill='#293246'
        style={{ height: '90%' }}
      >
        <g>
          <path d='M144.35,56.27v-.8l-.46-.9c-.28-.52-.6-1.04-.99-1.59-1-1.6-2.35-2.97-3.93-3.98l-.14-.09-.16-.08-.06-.04c-.16-.08-.34-.18-.51-.27l-44.63-26.56c-.06-.03-.11-.07-.16-.09l-.16-.11-.17-.1c-1.85-.93-3.91-1.43-5.98-1.43s-4.08,.49-5.91,1.4l-.14,.07-.13,.08s-.1,.06-.14,.1l-44.78,26.64c-.12,.07-.24,.13-.36,.19l-.15,.08-.16,.08-.14,.1c-3.65,2.36-5.92,6.53-5.92,10.88v54.32c0,4.3,2.24,8.39,6.02,10.92l.15,.11,.16,.1,.23,.12s.11,.06,.17,.09l44.72,26.6c.08,.06,.15,.1,.21,.13l.14,.09,.15,.07c1.81,.91,3.85,1.38,5.88,1.38s4.07-.47,5.9-1.38l.14-.07c.93-.33,1.58-.7,1.95-.95,2-1.2,32.85-19.69,40.13-23.99,.53-.33,1.06-.67,1.59-1.04l1.39-.84c.11-.07,.23-.13,.34-.19l.16-.08,.15-.09,.14-.08c3.66-2.36,5.94-6.54,5.94-10.9V59.63c0-1.11-.15-2.25-.48-3.36Zm-30.04,71.14c0,.8-.41,1.53-1.09,1.92l-24.38,14.52c-.35,.21-.74,.31-1.13,.31s-.79-.09-1.15-.31l-24.82-14.65c-.68-.41-1.1-1.13-1.1-1.92v-12.89c0-.81,.43-1.55,1.13-1.95,.35-.2,.73-.29,1.11-.29,.4,0,.79,.1,1.14,.32l14.51,8.03v-30.68l-7.85-5c-.67-.41-1.09-1.14-1.09-1.92v-12.94c0-.8,.43-1.55,1.13-1.94,.34-.2,.72-.29,1.1-.29,.4,0,.8,.09,1.15,.31l22.36,12.37c.68,.41,1.09,1.14,1.09,1.93v38.16l14.51-8.03c.36-.22,.75-.32,1.14-.32s.77,.09,1.11,.29c.7,.4,1.13,1.14,1.13,1.95v13.02Zm-26.83-82.19c5.25,0,9.5,4.25,9.5,9.5s-4.25,9.5-9.5,9.5-9.51-4.25-9.51-9.5,4.26-9.5,9.51-9.5Zm44.52,128.78H42c-23.16,0-42-18.84-42-42V42C0,18.84,18.84,0,42,0h90c23.16,0,42,18.84,42,42v90c0,23.16-18.84,42-42,42ZM42,4C21.05,4,4,21.05,4,42v90c0,20.95,17.05,38,38,38h90c20.95,0,38-17.05,38-38V42c0-20.95-17.05-38-38-38H42Z' />{' '}
        </g>
      </svg>
    </div>
  );
};

export default ITwinUILogo;
