'use client'
import React from 'react';

const Footer = () => {
  return (
    <div style={{
      width:'100vw',
      height:'100px',
      backgroundColor:'gray',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
      position:'fixed',
      bottom:0
    }}>
      <p>©️Nakaji 2022</p>
    </div>
  );
};

export default Footer;