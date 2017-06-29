import React, {Component} from 'react'
import BlogList from 'components/ui/BlogList';
import PageNumerator from 'components/ui/PageNumerator';

export default  class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            limit: 3
        };

        this._definePageData = this._definePageData.bind(this);
        this.buttonsAmount = this.buttonsAmount.bind(this);
    }

    buttonsAmount() {
        const {items} = this.props; const {limit} = this.state;
        const amount = parseInt(items.length / limit);
        return items.length % limit == 0 ? amount : amount + 1;
    }


    _definePageData() {
        const {pageNumber, items} = this.props;
        const {limit} = this.state;
        return items.slice(pageNumber * limit - limit, pageNumber * limit);
    }

    render() {
        const {addLike} = this.props;
        return (
            <div>
                <PageNumerator {...this.props}  buttonsAmount={this.buttonsAmount()}/>
                <br/>
                <BlogList items={this._definePageData()} addLike={addLike}/>
            </div>
        )
    }

}