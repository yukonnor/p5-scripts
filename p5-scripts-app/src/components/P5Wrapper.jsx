import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

export default function P5Wrapper({ sketch }) {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, sketchRef.current);

    // Clean up when component unmounts
    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div ref={sketchRef} />;
};


