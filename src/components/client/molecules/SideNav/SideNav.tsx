import React , { Suspense } from 'react';
import { DataFetch } from "../../../server/atoms/DataFetch";

const SideNav = () => {
  return (
    
      <div style={{width:'20%',minHeight:'calc(100vh - 200px)',backgroundColor:'white',padding:'16px'}}>
        <Suspense fallback={<p style={{color:'gray',textAlign:'center',minHeight:'calc(100vh - 200px)',display:'flex',justifyContent:'center',alignItems:'center'}}>Loading...</p>}>
          <DataFetch/>
        </Suspense>
      </div>
    
  );
};

export default SideNav;