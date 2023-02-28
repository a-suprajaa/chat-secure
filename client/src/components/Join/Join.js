import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';
export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('Room Name');
  const randomgen = ()=>{
    setRoom(()=>Date.now().toString().slice(6,-1))
  }

  return (
    
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <button onClick={randomgen} className={'button mt-20'}>random</button>
        <div>
          <input placeholder={room} className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">JOIN</button>
        </Link>
      </div>
    </div>
  );
}

