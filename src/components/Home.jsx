import React from 'react';
import Navbar from './Navbar';
import About from './About';
import MissionVision from './MissionVision';
import Services from './services';
import Members from './members';
import Clients from './clients';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Services/>
    <Members/>
    <Clients/>
    <MissionVision/>
   
    </>
  );
}

export default App;
