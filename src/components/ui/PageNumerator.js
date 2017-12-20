import React, {Component} from 'react'
import Link from 'components/ui/Link';

export default class PageNumerator extends Component {

    constructor(props) {
        super(props);
        this._getEdgeButtonsRout = this._getEdgeButtonsRout.bind(this);
        this._setButtons = this._setButtons.bind(this);

        this.state = {
            buttonsAmount: 3
        }
    }

    _getEdgeButtonsRout() {
        const {buttonsAmount, firstButton} = this.state;
        const {pagesAmount} = this.props;
        return (
        {
            prev: `/pages/${  firstButton > 1 ? +firstButton - 1 : 1}`,
            next: `/pages/${  +firstButton + buttonsAmount >= pagesAmount ? pagesAmount : +firstButton + buttonsAmount }`
        }
        )
    }
    
    componentWillMount(){
        this.setState({firstButton: 1 })
    }
    
    componentDidUpdate() {
        const {pageNumber} = this.props;
        const {buttonsAmount, firstButton} = this.state;

        if (pageNumber >= firstButton + buttonsAmount) {
            this.setState({firstButton: firstButton + buttonsAmount})
        } else if (pageNumber < firstButton) {
            this.setState({firstButton: firstButton - buttonsAmount})
        }
    }
    
    _setButtons() {
        const {firstButton, buttonsAmount} = this.state;
        const {pagesAmount, pageNumber} = this.props;
        if (pageNumber > pagesAmount) return;
        const list = [];

        if (pageNumber > buttonsAmount) list.push(<Link key={0} to={this._getEdgeButtonsRout().prev}> {'<<'} </Link>);

        for (let i = firstButton; i < +firstButton + buttonsAmount; i++) {
            if (i > pagesAmount) break;
            let link = <Link key={i} to={`/pages/${i}`}>{i}</Link>;
            list.push(link)
        }

        if ( pageNumber != pagesAmount && firstButton + buttonsAmount <= pagesAmount ){
            list.push(<Link key={+buttonsAmount + firstButton + 1} to={this._getEdgeButtonsRout().next}> {'>>'}</Link>);
        }
        return list;
    }

    render() {
        return (
            <div style={{float: 'left', display: 'inline'}}>
                {this._setButtons()}
            </div>
        );
    }
}
