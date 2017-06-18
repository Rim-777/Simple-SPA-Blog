import React from 'react';
import PropTypes from 'prop-types';
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
              {`last update: ${_formatDate(updatedAt || createdAt)}`}
           </span>
        </div>
    );
};



Timestamps.propTypes = {
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string
};


export default  Timestamps;
