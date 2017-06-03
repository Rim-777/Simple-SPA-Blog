import React, {Component} from 'react';


class Likes extends Component{
    constructor(props){
        super(props);
        this.state = {amount: this.props.amount}
    }

    handleClick = (e) => {
        this.setState({amount: this.state.amount + 1})
    };

    render(){
        return(
            <div onClick={this.handleClick}
                 style={{
                 border: "1px solid green",
                 width: '70px',
                 cursor: 'pointer'}}>
                {`likes: ${this.state.amount}`}
            </div>
        )
    }
};


Likes.defaultProps = {
    amount = 0
};


export default Likes;