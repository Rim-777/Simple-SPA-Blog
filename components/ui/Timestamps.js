import React from 'react';
import moment from 'moment';


const Timestamps = ({createdAt, updatedAt })=> {

    _formatDate = (date) => {
        return (date && moment(date).format('MM/DD/YYYY hh:mm'))
    };

    return (
        <div style={{fontSize: "0.7em"}}>
           <span>
              {`created at: ${_formatDate(createdAt)}`}
           </span>
            <br/>
           <span>
              {`last update: ${_formatDate(updatedAt || createdAt )}`}
           </span>
        </div>
    );
};


Timestamps.propTypes = {
    CreatedAt: PropTypes.string.isRequired,
    UpdatedAt: PropTypes.string
};


export default  Timestamps;
