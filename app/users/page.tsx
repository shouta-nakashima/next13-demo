import {SideNav} from "../../src/components/client/molecules/SideNav";

const UserPage = () => {
  return (
    <div style={{height:'100%',display:'flex'}}>
      <SideNav/>
      <div style={{width:'80%',minHeight:'calc(100vh - 200px)',justifyContent:'center',display:'flex',alignItems:'center'}}>
        <p>User Page</p>
      </div>
    </div>
  );
};

export default UserPage;