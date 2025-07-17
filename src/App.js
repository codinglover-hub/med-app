import React from 'react';
import TopBar from './components/nav';
import Sidebar from './components/side';
import PatientDetailsCard from './components/hero1';


function App() {
  return (
    <div style={{ display: 'flex', height: '100vh',width:'5vh' }}>
      <Sidebar />

      <div style={{ flex: 1, display:"flex", flexDirection: 'column' }}>
        <TopBar />
        <div style={{ padding:'20px',}}>
          <PatientDetailsCard />
        </div>
      </div>
    </div>
  );
}

export default App;


