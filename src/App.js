import React from 'react';
import Sidebar from './components/side';
import FullTopBarWithBreadcrumb from './components/nav';
import PatientDetailsCard from './components/hero1';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <FullTopBarWithBreadcrumb />

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '1rem' }}>
        <PatientDetailsCard/>
        </div>
      </div>
    </div>
  );
}

export default App;


