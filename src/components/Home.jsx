import React from "react";
import { Link } from "react-router-dom";
import donorImage from '../assets/Donor image.png';


const Home = () => {
  return (
    <div>
      <img src={donorImage} alt="donor" />
      <div className="">
        <h1>Login</h1>
        <form action="">
          <div className="">
            <label htmlFor="userName">User Name : </label>
            <input type="text" required placeholder="User Name" />
          </div>
          <div className="">
            <label htmlFor="Password">Password : </label>
            <input type="password" required placeholder="Password" />
          </div>
          <div>
            <Link to="/signup">
              <button className="p-3 bg-red-400 border-2 rounded-xl">
                sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
