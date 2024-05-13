// Login.tsx
import React from 'react';
import "./Login.css";
import UbLogo from './../../components/Icons/UB_Logo.png';
import UbJagBuilding from './../../components/Icons/UBJagBuilding.jpg';

interface LoginProps {

}

export const Login: React.FC<LoginProps> = () => {
  return (

      <div className='background'>
          <div className="login">
            {/* <h4>Login</h4> */}
            <img className="logo" src={UbLogo} alt="Logo"/>
            <form>
              <div className="text_area">
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue="username"
                  className="text_input"

                />
              </div>
              <div className="text_area">
                <input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue="password"
                  className="text_input"

                />
              </div>
            <input
              type="submit"
              value="LOGIN"
              className="btn"

            />
          </form>
          {/* <a className="link" href="/signup">Sign Up</a> */}
        </div>
      </div>
  );
};

export default Login;