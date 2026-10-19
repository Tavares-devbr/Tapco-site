import React from 'react';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface NfcPlateProps {
  logoTexture: THREE.Texture | null;
  logoScale: number;
  logoPosition: [number, number, number];
}

export const NfcPlate: React.FC<NfcPlateProps> = ({ logoTexture, logoScale, logoPosition }) => {
  // Novo formato: 12x12cm (Quadrado perfeito)
  const width = 1.2;
  const height = 1.2;
  const depth = 0.08;

  return (
    <group>
      {/* A Placa Base - Agora Quadrada 12x12 */}
      <RoundedBox
        args={[width, height, depth, 0.15]} // Aumentei um pouco o arredondamento para combinar com o formato quadrado
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.05}
        />
      </RoundedBox>

      {/* A Logo como um Plano Independente */}
      {logoTexture && (
        <mesh
          position={[logoPosition[0], logoPosition[1], depth / 2 + 0.002]}
          rotation={[0, 0, 0]}
        >
          {(() => {
            const image = logoTexture.image;
            let aspect = 1;
            if (image instanceof HTMLImageElement) {
              aspect = image.width / image.height;
            }
            return <planeGeometry args={[logoScale * aspect, logoScale, 1]} />;
          })()}
          <meshStandardMaterial
            map={logoTexture}
            transparent={true}
            roughness={0.5}
            depthTest={true}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
};
