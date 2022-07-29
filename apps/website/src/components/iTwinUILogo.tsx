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
        boxShadow: `rgba(255, 255, 255,0.5) 0px 5px 5px inset, rgba(0, 0, 0,0.5) 0px -1px 6px inset`,
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
        style={{ height: '340px' }}
      >
        <path d='m8.39529 16c-.17462 0-.34827-.04625-.50466-.13777-.31565-.18795-.50466-.52253-.50466-.89746v-5.5677c0-.10559-.05568-.20336-.14649-.25724l-.93575-.55518c-.29167-.17713-.38857-.56337-.21587-.86253.17078-.29866.54496-.40149.84142-.2219l1.09279.66227c.3675.22272.59197.62122.59197 1.05094v5.18002c0 .08056.08773.13046.15697.08928l4.86593-2.89371c.09082-.05401.1464-.15193.14622-.25759l-.01094-6.49616c-.00018-.10574-.05617-.20353-.14727-.2572l-5.48384-3.23106c-.0959-.0565-.21496-.05627-.31064.00061l-5.46736 3.25009c-.09084.054-.14645.15193-.14627.25762l.01094 6.49695c.00018.10556.05599.20321.14685.25695l3.97323 2.34984c.29359.17516.39337.55993.22355.86105-.17078.30112-.54687.40051-.8395.22929l-4.11958-2.45022c-.37967-.22582-.61233-.6349-.61233-1.07664v-6.85789c0-.44262.23367-.85237.61463-1.07774l5.78573-3.42285c.36978-.21876.82936-.21877 1.19915 0l5.79701 3.42944c.37405.22128.60348.62359.60348 1.05818v6.88462c0 .43325-.22821.83446-.6006 1.0559l-5.49753 3.26903c-.15639.0925-.331.13875-.50658.13875zm-1.25517-9.60988c0 .48696.38488.88171.85965.88171s.85965-.39476.85965-.88171-.38488-.88171-.85965-.88171-.85965.39476-.85965.88171z' />
      </svg>
    </div>
  );
};

export default ITwinUILogo;
