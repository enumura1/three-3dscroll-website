import { Image } from '@react-three/drei';

// 外部ファイルのインポート
import './App.css';
import { Canvas } from '@react-three/fiber';


function Images() {
  return (
    <group>
      <Image url="./img1.png" scale={[3, 1]} />
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