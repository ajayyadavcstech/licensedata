import {React,useState,useEffect} from 'react';
import Table from './Table'

var data = new Map();  // it store license data in the form of key={license_type} value={array of object} pair
export function LicenseTable(props) {
  
  function pushData(key, value) {

    if (data.has(key)) {
      let previousData = data.get(key);
      data.set(key,previousData.concat(value))
    } else {
      data.set(key,[value])
    }
  }

  useEffect(()=>{
    console.log(1)
    props.data?.Features.forEach(obj => {
      pushData(obj.license.license_type,obj)
    });
    console.log(1)
    data = [1,2,3]
    console.log(data.size,Array.from(data.keys()))
  },[])

  return (
    <div className='LicenseTable'>
      <ul>
        {
          data?.map((key) => (
            <li>key</li>
          ))
        }
      </ul>
        
        <div>
          <Table/>
        </div>
    </div>
  );
}

export default LicenseTable;