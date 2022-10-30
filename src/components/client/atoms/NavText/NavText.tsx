'use client'
import React from 'react';

type Props = {
  user:any
}

const NavText = ({user}:Props) => {
  return (
    <div>
      <p
        style={{
          color:'gray',
          margin:'0',
          padding:'16px 0',
          cursor:'pointer'
        }}
        key={user.id}
        onClick={() => console.log(user.id)}
      >
        {user.name}
      </p>
    </div>
  );
};

export default NavText;