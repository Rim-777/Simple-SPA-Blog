import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


class Timestamps extends Component {

    constructor(props){
        super(props);
        this._formatDate = this._formatDate.bind(this);
    }

    _formatDate(date) {
        return (date && moment(date).format('MM/DD/YYYY hh:mm'))
    }

    render() {
        const {createdAt, updatedAt } = this.props;
        return (
            <div style={{fontSize: '0.7em'}}>
           <span>
              {`created at: ${this._formatDate(createdAt)}`}
           </span>
                <br/>
           <span>
              {`last update: ${this._formatDate(updatedAt || createdAt)}`}
           </span>
            </div>
        );
    }
}


Timestamps.propTypes = {
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string
};


export default  Timestamps;
