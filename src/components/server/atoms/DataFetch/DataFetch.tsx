import React,{use} from 'react';
import {sleep} from "../../../../lib/sleep";
import {NavText} from "../../../client/atoms/NavText";

const DataFetch = () => {
  
  const getData = async () => {
    const res = await fetch ( 'https://jsonplaceholder.typicode.com/users' ).then ( await sleep(2000) )
    return res.json()
  }
  const data = use(getData())
  return (
    <div>
      {data.map((user:any) => (
        <NavText key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default DataFetch;