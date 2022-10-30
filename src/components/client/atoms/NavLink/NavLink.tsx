'use client'
import React from 'react';
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

type Props = {
  href:string
  pageName:string
}

const NavLink = ({href,pageName}:Props) => {
  // * useSelectedLayoutSegmentがうまく動かないようなのでこちらで対応
  let segment = useSelectedLayoutSegments()[0]
  const active = href === `/${segment ?? ''}`
  
  return (
    <Link style={{padding:'8px',borderBottom:active?'1px solid':'none'}} href={href}>{pageName}</Link>
  );
};

export default NavLink;