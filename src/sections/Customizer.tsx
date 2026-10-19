import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Upload, RotateCcw, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NfcPlate } from '../components/canvas/NfcPlate';

// Componente auxiliar para ter acesso ao renderer dentro do Canvas
const TextureHandler = ({
  logoTexture,
  setLogoTexture,
  isUploading,
  setIsUploading,
  fileInputRef
}: any) => {
  const { gl } = useThree();

  useEffect(() => {
    if (logoTexture) {
      // A CHAVE DA NITIDEZ: Anisotropy
      // Isso corrige o borrão quando a placa é girada ou vista de lado
      logoTexture.anisotropy = gl.capabilities.maxAnisotropy;
      logoTexture.needsUpdate = true;
    }
  }, [logoTexture, gl]);

  return null;
};

export const Customizer: React.FC = () => {
  const [logoTexture, setLogoTexture] = useState<THREE.Texture | null>(null);
  const [scale, setScale] = useState(0.4);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Efeito para carregar a logomarca de teste automaticamente ao iniciar
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/logomarca.jpeg', (texture) => {
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.generateMipmaps = true;
      texture.needsUpdate = true;
      setLogoTexture(texture);
    });
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Por favor, envie uma imagem nos formatos PNG, JPEG ou WebP.');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      const loader = new THREE.TextureLoader();
      loader.load(imageUrl, (texture) => {
        // CORREÇÃO DE DISTORÇÃO: Preservar proporção da imagem
        const image = texture.image;
        if (image instanceof HTMLImageElement) {
          const aspect = image.width / image.height;
          // Ajustamos a escala base para que o usuário comece com a logo proporcional
          // Se a imagem for larga, a escala Y deve ser menor que a X
          // No Decal, a escala é absoluta no mundo 3D.
          // Vamos setar a escala inicial baseada no aspect ratio
          setScale(aspect > 1 ? 0.4 : 0.4 * aspect);
        }

        texture.magFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.generateMipmaps = true;
        texture.needsUpdate = true;
        setLogoTexture(texture);
        setIsUploading(false);
      });
    };
    reader.readAsDataURL(file);
  };

  const resetCustomization = () => {
    setLogoTexture(null);
    setScale(0.4);
    setPosition([0, 0, 0]);
  };

  const removeLogo = () => {
    setLogoTexture(null);
  };

  return (
    <section id="personalizador" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Personalize sua placa NFC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Visualize sua marca aplicada ao produto e encontre a composição ideal para o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 h-[400px] md:h-[600px] relative bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden backdrop-blur-sm">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              <Stage environment="city" intensity={0.6} contactShadows={false}>
                <NfcPlate
                  logoTexture={logoTexture}
                  logoScale={scale}
                  logoPosition={position}
                />
              </Stage>

              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4.5}
              />

              <OrbitControls
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
                minDistance={3}
                maxDistance={7}
              />
              <TextureHandler
                logoTexture={logoTexture}
                setLogoTexture={setLogoTexture}
                isUploading={isUploading}
                setIsUploading={setIsUploading}
                fileInputRef={fileInputRef}
              />
            </Canvas>

            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
                <div className="text-white font-medium animate-pulse">Processando logo...</div>
              </div>
            )}
          </div>

          <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 backdrop-blur-md h-fit">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-4">Sua Logomarca</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.webp"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-6 border-dashed border-2 border-slate-700 hover:border-brand-primary transition-colors"
                  variant="outline"
                >
                  <Upload className="mr-2" size={20} />
                  {logoTexture ? 'Alterar Logo' : 'Enviar Logo'}
                </Button>
              </div>

              {logoTexture && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6"
                >
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-slate-400">Tamanho</label>
                      <span className="text-xs text-brand-primary font-bold">{Math.round(scale * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1" max="2.0" step="0.01"
                      value={scale}
                      onChange={(e) => setScale(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-4">Posicionamento</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase text-slate-500">Horizontal</span>
                        <input
                          type="range"
                          min="-0.7" max="0.7" step="0.01"
                          value={position[0]}
                          onChange={(e) => setPosition([parseFloat(e.target.value), position[1], position[2]])}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase text-slate-500">Vertical</span>
                        <input
                          type="range"
                          min="-0.4" max="0.4" step="0.01"
                          value={position[1]}
                          onChange={(e) => setPosition([position[0], parseFloat(e.target.value), position[2]])}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={removeLogo}
                      variant="outline"
                      className="flex-1 py-3 text-slate-400 hover:text-red-400 border-slate-700"
                    >
                      <Trash2 size={16} className="mr-2" />
                      Remover
                    </Button>
                    <Button
                      onClick={resetCustomization}
                      variant="outline"
                      className="flex-1 py-3 text-slate-400 hover:text-white border-slate-700"
                    >
                      <RotateCcw size={16} className="mr-2" />
                      Resetar
                    </Button>
                  </div>
                </motion.div>
              )}

              <div className="pt-6 border-t border-slate-800">
                <Button
                  className="w-full py-4 text-lg font-bold bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg shadow-brand-primary/20 transition-all"
                  href="https://instagram.com/tapco.brasil"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
