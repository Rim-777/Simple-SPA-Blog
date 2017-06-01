import React from 'react';
import moment from 'moment';

const Timestamps = ({dateTime})=>(
    <div style={{fontSize: "0.7em"}}>
    <span>
          {`created at: ${dateTime && moment(dateTime.createdAt).format('MM/DD/YYYY hh:mm') || ''}`}
     </span>
        <br/>
     <span>
          {`last update: ${dateTime && moment(dateTime.updatedAt).format('MM/DD/YYYY hh:mm') || ''}`}
     </span>
    </div>
);

export default  Timestamps;
