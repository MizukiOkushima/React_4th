import React from "react";
import useSWR from "swr";
import { cache } from "swr/_internal";
// import { useFetchUser } from "./hooks/useFetchUser";

// fetcher URLを取得してJSONで返す
const fetcher = (url: string) => fetch(url).then(r => r.json());

const Lesson2_3 = () => {

  // customHooks
  // const { user, loading } = useFetchUser(3);

  // useSWR
  const { data: user, isLoading: loading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/1`,
    fetcher
  );

  console.log(cache);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が見つかりません。</div>;
  }

  return (
    <div>
      <h1>ユーザー情報</h1>
      <p>
        <strong>名前:</strong> {user.name}
      </p>
      <p>
        <strong>ユーザー名:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>都市:</strong> {user.address.city}
      </p>
    </div>
  );
};

export default Lesson2_3;
