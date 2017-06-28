import React, {Component} from 'react'
import Link from 'components/ui/Link';


export default class PageNumerator extends Component {

    constructor(props) {
        super(props);

        this._getEdgeButtonsRout = this._getEdgeButtonsRout.bind(this);
        this._getButtons = this._getButtons.bind(this);
    }

    _getEdgeButtonsRout() {
        const {pageNumber, buttonsAmount} = this.props;

        return (
            {
                prev: `/page/${ +pageNumber > 1 ? +pageNumber - 1 : 1}`,
                next: `/page/${ +pageNumber < buttonsAmount ? +pageNumber + 1 : +pageNumber}`
            }
        )
    }

    _getButtons() {
        const {pageNumber, buttonsAmount} = this.props;
        if(!buttonsAmount) return;

        const list = [];

        list.push(<Link key={0} to={this._getEdgeButtonsRout().prev}> {'<<'} </Link>);

        for (let i = 1; i <= buttonsAmount; i++) {
            const link = <Link key={i} to={`/page/${i}`} style={ {color: `${pageNumber == i ? 'red':'blue'}`}}>{i}</Link>;
            list.push(link)
        }

        list.push(  <Link key={buttonsAmount + 1} to={this._getEdgeButtonsRout().next}> {'>>'}</Link> );

        return list;
    }

    render() {
        return (
            <div style={{float: 'left', display: 'inline'}}>
                {this._getButtons()}
            </div>
        );
    }
}



