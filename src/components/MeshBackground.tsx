import React, { useEffect, useRef } from 'react';

export const MeshBackground: React.FC = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('pointermove', handlePointerMove);

    let animationFrameId: number;
    const updatePosition = () => {
      if (blobRef.current) {
        const currentStyle = window.getComputedStyle(blobRef.current);
        const matrix = new DOMMatrix(currentStyle.transform);

        const dx = mouseRef.current.x - matrix.m41;
        const dy = mouseRef.current.y - matrix.m42;

        const lerpFactor = 0.08;
        const newX = matrix.m41 + dx * lerpFactor;
        const newY = matrix.m42 + dy * lerpFactor;

        blobRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{
        backgroundColor: 'var(--color-dark-bg)',
        filter: 'blur(80px)',
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Blobs Animados Distribuídos Estrategicamente */}
      {/* Topo */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary/30 animate-blob" />
      <div className="absolute top-[10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-brand-highlight/20 animate-blob animation-delay-2000" />

      {/* Meio */}
      <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 animate-blob animation-delay-1000" />
      <div className="absolute top-[50%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary/20 animate-blob animation-delay-3000" />

      {/* Base */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-highlight/30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/30 animate-blob animation-delay-500" />

      {/* Blob que segue o mouse/dedo */}
      <div
        ref={blobRef}
        className="absolute w-[30vw] h-[30vw] rounded-full bg-brand-highlight/40 opacity-50"
        style={{
          top: 0,
          left: 0,
          width: '30vw',
          height: '30vw',
          marginTop: '-15vw',
          marginLeft: '-15vw',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)'
        }}
      />
    </div>
  );
};
