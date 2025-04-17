import { useEffect, useState } from "react";

const Lesson2_1 = () => {

  // x座標, y座標の状態変数
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    function handleMove(e) {
      // 動かしたい座標の設定
      setPosition({ x: e.clientX, y: e.clientY });
    }

    console.log("rendered");

    window.addEventListener("pointermove", handleMove);

    // 以下の記述によりこのコンポーネントがアンマウントされる直前で呼び出されるようになる
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };

  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
