import React from 'react';
import './App.css'
import LicenseTable from './Components/LicenseTable'
import licenseData from './data/LicenseData';
export function App(props) {
  return (
    <div className='App'>
       <LicenseTable data={licenseData}/>
    </div>
  );
}
export default App;