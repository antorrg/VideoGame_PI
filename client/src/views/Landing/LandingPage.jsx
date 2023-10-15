import {NavLink} from 'react-router-dom';



function Landing() {
    return (
      <div className="">
                <div className="">
                    <h1 className="">Welcome</h1>
                <NavLink to='/home' >
                    <button className="">ENTER</button>
                </NavLink>
                </div>
            </div>
    );
  }
  
  export default Landing;
  