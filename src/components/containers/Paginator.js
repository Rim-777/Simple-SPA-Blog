import React, {Component} from 'react'
import PageNumerator from 'components/ui/PageNumerator';

export default  class Paginator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            limit: 3
        };

        this._definePageData = this._definePageData.bind(this);
        this._pagesAmount = this._pagesAmount.bind(this);
    }

    _pagesAmount() {
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
        return (
            <div>
                <PageNumerator {...this.props}  pagesAmount={this._pagesAmount()}/>
                <br/>
                <this.props.component {...this.props} items={this._definePageData()} />
            </div>
        )
    }

}