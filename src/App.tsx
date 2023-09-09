import { Canvas, useThree, } from '@react-three/fiber';
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

// 外部ファイルのインポート
import './App.css';

// スクロール位置の取得

function Images() {
  const { width, height } = useThree<{ width: number; height: number }>((state) => state.viewport);

  return (
    <group>
      <Image url="./img1.png" scale={[3, height]} position={[-3, -2, 0]} />
      <Image url="./img2.png" scale={[4, 2]} position={[-3, 1, 1]} />
      <Image url="./img3.png" scale={[3, 2]} position={[1, -height, 2]} />
      <Image url="./img4.png" scale={[5, 3]} position={[2, -height - 1, 3]} />
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
      </ScrollControls>
    </Canvas>
  );
}

export default App;