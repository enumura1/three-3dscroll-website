import { Canvas, useThree, } from '@react-three/fiber';
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

// 外部ファイルのインポート
import './App.css';

// スクロール位置の取得

function Images() {
  const { width, height } = useThree<{ width: number; height: number }>((state) => state.viewport);

  return (
    <group>
      <Image url="./img1.png" scale={[5, height]} position={[4.3, -0.5, 0]} />
      <Image url="./img2.png" scale={[6, 4]} position={[-2.5, -height, 1]} />
      <Image url="./img3.png" scale={[6, 4]} position={[-2, -height - 8, 1.5]} />
      <Image url="./img4.png" scale={[5, 6]} position={[1.5, -height - 3.8, 1.8]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      {/* 200%の高さのスクロール、慣性１ */}
      <ScrollControls pages={3} damping={1}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1>create</h1>
          <h1>3DModel</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;