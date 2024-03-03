import React from 'react';
import logo from '../css/images/ParboldCoder.jpeg';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <img src={logo} alt="Parbold Coder Logo" />
      <p>Web Developer</p>
    </div>
  );
}

export default Home;