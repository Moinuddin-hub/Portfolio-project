import React from 'react';
// import { loadFull } from "tsparticles";
import Navbar from '../NavBar';
import { Outlet, useLocation } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";
import './Root.scss'
// import particles from '../../Utils/particles';
// import particles from '../../Utils/particles';
const Root = () => {
//     const location = useLocation();
//   console.log(location);

//   const handleInit = async (main) => {
//     await loadFull(main);
//   };

//   const renderParticleJsInHomePage = location.pathname === "/home";

    return (
        <div className='App'>
     
        {/* <Particles id="particles" options={particles} init={handleInit} /> */}
     
          <Navbar/>
          <Outlet/>
        </div>
    );
};

export default Root;