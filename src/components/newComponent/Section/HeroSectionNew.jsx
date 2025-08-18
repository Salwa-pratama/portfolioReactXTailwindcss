import { Float, OrbitControls } from "@react-three/drei";
import Astronaut from "../Component/Hero/Astronaut";
import HeroText from "../Component/Hero/HeroText";
import ParallaxBackground from "../Component/Hero/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Loader from "../Component/Loader";
import { Suspense } from "react";
import { easing } from "maath";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 -z-10"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.1}
                position={isMobile && [0, -1.5, 0.9]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
