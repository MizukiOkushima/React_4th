import { ChangeEvent, useState } from "react";

const Lesson1_2 = () => {

  const [form, setForm] = useState({
    firstName: "Code",
    lastName: "Shin",
    email: "shincode@gmail.com",
  });

  // スプレッド構文
  // console.log({ ...form, firstName: "Update" });
  
  // mutable, immutable 直接的に破壊をするため使用しないこと
  // form.firstName = "Test Updated";

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLIFrameElement>) =>
              setForm({
                // firstName: e.target.value,
                // lastName: form.lastName,
                // email: form.email,
                ...form,
                firstName: e.target.value,
              })
            }
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLIFrameElement>) =>
              setForm({
                firstName: form.firstName,
                lastName: e.target.value,
                email: form.email,
              })
            }
          />
        </label>
        <label>
          Email:
          <input type="text"
            className="border border-slate-500"
            onChange={(e: ChangeEvent<HTMLIFrameElement>) =>
              setForm({
                firstName: form.firstName,
                lastName: form.lastName,
                email: e.target.value,
              })
            }
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
