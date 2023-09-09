import { Image } from '@react-three/drei';

// 外部ファイルのインポート
import './App.css';
import { Canvas } from '@react-three/fiber';


function Images() {
  return (
    <group>
      <Image url="./img1.png" scale={[3, 3]} position={[-3, -2, 0]} />
      <Image url="./img2.png" scale={[4, 2]} position={[-3, 1, 1]} />
      <Image url="./img3.png" scale={[3, 2]} position={[1, 1, 2]} />
      <Image url="./img4.png" scale={[5, 3]} position={[2, -2, 0]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <Images />
    </Canvas>
  );
}

export default App;