'use client'

import {useState} from 'react';

const GreetingClient = () => {
  const [state,setState] = useState('')
  return (
    <div>
      <p>Hello Client {state}</p>
      <input value={state} onChange={e => setState(e.target.value)}/>
    </div>
  );
};

export default GreetingClient;