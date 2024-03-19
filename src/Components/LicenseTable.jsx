import {React,useState,useEffect} from 'react';
import './LicenseTable.css'
import Table from './Table'

var data = new Map();  // it store license data in the form of key={license_type} value={array of object} pair
function LicenseTable(props) {
  var [mappedData,setmappedData] = useState(new Map());
  var [tableData,setTableData] = useState([])
  var [selectedKey,setSelectedKey] = useState("")
  
  function pushData(key, value) {

    if (data.has(key)) {
      let previousData = data.get(key);
      data.set(key,previousData.concat(value))
    } else {
      data.set(key,[value])
    }
  }

  useEffect(()=>{
    props.data?.Features.forEach(obj => {
      pushData(obj.license.license_type,obj)
    });
    setmappedData(data)
  },[])

  useEffect(()=>{
    setTableData(mappedData.get(Array.from(mappedData.keys())[0]))
    setSelectedKey(Array.from(mappedData.keys())[0])
  },[mappedData])

  useEffect(()=>{
  },[tableData])

function changeTableData(key){
  console.log(key)
  setTableData(mappedData.get(key))
  setSelectedKey(key)
}

  return (
    <div className='LicenseTable'>
      <ul>
      {
          Array.from(mappedData.keys())?.map((key)=>{
            return (<li className={selectedKey===key ? "selected" : ""} key={key} onClick={()=>changeTableData(key)}>{key}</li>)
           })
        }
      </ul>
        
        
        <div>
          <Table data={tableData}/>
        </div>
    </div>
  );
}

export default LicenseTable;