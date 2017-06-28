import React, {Component} from 'react'
import PostsPage from 'components/containers/PostsPage';
import PageNumerator from 'components/ui/PageNumerator';

export default  class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonAmount: 0
        };

        this.buttonsAmount = this.buttonsAmount.bind(this);
    }

    buttonsAmount(amount) {
        this.setState({buttonAmount: amount})
    }


    render() {
        return (
            <div>
                <PageNumerator {...this.props}  buttonsAmount={this.state.buttonAmount}/>
                <br/>
                <PostsPage {...this.props}  buttonsAmount={this.buttonsAmount}/>
            </div>
        )
    }

}