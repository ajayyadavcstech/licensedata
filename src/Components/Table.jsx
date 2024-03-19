import React from 'react';
import './Table.css'

function Table(props) {
  return (
    <div className='Table'>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Start Time</th>
            <th>Total Time</th>
            <th>Expiration Date</th>
            <th>Locked</th>
            <th>Expired</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
        {props?.data?.map((data) => (
          <tr key={data?.product?.id ?? 0}>
            <td>{data?.product?.id ?? "null"}</td>
            <td>{data?.license?.time_start_date}</td>
            <td>{data?.license?.total_date}</td>
            <td>{data?.license?.expiration_date}</td>
            <td>{data?.locked ? 'Yes' : 'No'}</td>
            <td>{data?.expired ? 'Yes' : 'No'}</td>
            <td>{data?.disabled ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>

      </table>
    </div>
  );
}
export default Table;