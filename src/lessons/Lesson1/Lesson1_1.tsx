import { ChangeEvent, useState } from "react";

// let age = 0;

const Lesson1_1 = () => {

  // const [state, setState] = useState();
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState("ShinCode");

  console.log("rendering!");

  const handleClick = () => {

    // age = age + 1;

    // setAge(age + 1);  // 0 + 1
    // console.log(age);
    // setAge(age + 1);  // 0 + 1
    // console.log(age);
    // setAge(age + 1);  // 0 + 1
    // console.log(age);

    // setAge((prevAge) => prevAge + 1); // setAge((0) => 0 + 1)
    // console.log(age);
    // setAge((prevAge) => prevAge + 1); // setAge((1) => 1 + 1)
    // console.log(age);
    // setAge((prevAge) => prevAge + 1); // setAge((2) => 2 + 1)
    // console.log(age);

    setAge((prevAge) => prevAge + 1); // setAge((0) => 0 + 1)
    setAge((prevAge) => prevAge + 1); // setAge((1) => 1 + 1)
    setAge((prevAge) => prevAge + 1); // setAge((2) => 2 + 1)

    console.log(name);

  };

  return (
    <div>
      <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <button onClick={handleClick} className="border p-2 rounded-md bg-red-100">Add Age</button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
