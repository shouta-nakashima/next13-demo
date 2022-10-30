import React,{use} from 'react';
import {sleep} from "../../../../lib/sleep";

const DataFetchError = () => {

  const getData = async () => {
    const res = await fetch ( 'https://jsonplaceholder.typicode.co/users' )
    return res.json()
  }
  const data = use(getData())
  // ! errorになります
  return (
    <div>
      {data.map((user:any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default DataFetchError;