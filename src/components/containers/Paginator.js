import React, {Component} from 'react'
import Link from 'components/ui/Link';

export default  class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonAmount :  5,
            range: {start: 1, end: 5, current: 1 }
        }

    }



    render() {
        return (
            <div style={{float: 'left', display: 'inline'}}>
            <Link to='/1'>1</Link>
            <Link to='/2'>2</Link>
            <Link to='/3'>3</Link>
            <Link to='/4'>4</Link>
            <Link to='/5'>5</Link>
            <Link to={`/${this.state.range.end + 1}`}> >></Link>
            </div>
        );
    }

}