import React, {Component} from 'react'
import Link from 'components/ui/Link';
import PostsPage from 'components/containers/PostsPage';

export default  class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 3
        };

        this.buttonsAmount = this.buttonsAmount.bind(this);
        this._getButtons = this._getButtons.bind(this);
    }

    buttonsAmount(amount) {
        this.setState({buttonAmount: amount})
    }

    _getButtons() {
        const list = [];
        for (let i = 1; i <= this.state.buttonAmount; i++) {
            const link = <Link key={i} to={`/page/${i}`} style={ {color: `${this.props.pageNumber == i ? 'red':'blue'}`}}>{i}</Link>;
            list.push(link)
        }
        return list;
    }

    render() {

        return (
            <div>
                <div style={{float: 'left', display: 'inline'}}>
                    <Link to={`/page/${ +this.props.pageNumber > 1 ? +this.props.pageNumber - 1 : 1}`}> {'<<'} </Link>
                    {this._getButtons()}
                    <Link to={`/page/${  +this.props.pageNumber < this.state.buttonAmount ?  +this.props.pageNumber + 1: +this.props.pageNumber}`}> {'>>'}</Link>
                </div>
                <br/>
                <PostsPage {...this.props} step={this.state.step} buttonsAmount={this.buttonsAmount}/>
            </div>
        );
    }

}