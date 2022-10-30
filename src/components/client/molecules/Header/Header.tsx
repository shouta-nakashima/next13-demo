'use client'
import React from 'react';
import {NavLink} from "../../atoms/NavLink";
import Image from "next/image";

const Header = () => {
  
  return (
    <div style={{width:'100vw',height:'100px',backgroundColor:'gray',position:'fixed',padding:'0 20px',display:'flex'}}>
      <div style={{margin:'auto',width:'calc(100% / 3)'}}>
        <h2 style={{margin:0}}>Header Component</h2>
      </div>
      <div style={{margin:'auto',width:'calc(100% / 3)',textAlign:'center'}}>
        <NavLink href={'/'} pageName={'Home'}/>
        <NavLink href={'/users'} pageName={'Users'}/>
      </div>
      <div style={{margin:'auto 0 auto auto',width:'calc(100% / 3)',display:'flex',justifyContent:'end'}}>
        <div style={{display:'flex'}}>
          <Image style={{borderRadius:'50%',border:'1px solid ',width:'50px',height:'50px'}} src={'/60637489.jpeg'} alt={''} width={50} height={50}/>
          <p style={{paddingLeft:'8px'}}>Shota Nakashima</p>
        </div>
      </div>
    </div>
  );
};

export default Header;