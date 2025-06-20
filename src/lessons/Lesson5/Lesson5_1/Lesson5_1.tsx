import React, { memo, useState } from "react";

const Lesson5_1 = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log("Parent Rendering");

  return (
    <div>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <button
        className="border-2 px-2 py-2 rounded-md ml-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Child Count
      </button>
      <p>Parent: {count1}</p>
      <Child count2={count2} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// メモ化
// コンポーネント自体が変わっていない場合に親がレンダリングされてもそのままの状態にして,
// 前のコンポーネントの状態のまま出力する
const Child = React.memo(({ count2 }: { count2: number }) => {

  console.log("Child Rendering");

  //重い処理
  let i = 0;
  while (i < 10000000) i++;
  return <p>Child: {count2}</p>;
});

export default Lesson5_1;
