import React, {Component} from 'react';

export default  class PieChart extends Component{

    componentDidMount(){
        this.chart = c3.generate({
            bindto: ReactDOM.findDOMNode(this.refs.pieChart),
            data: {columns: this.props.columns,  type : 'pie'}
        })
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps == this.props) return false;
        this.chart.load({columns: this.props.columns})
    }

    render(){
        return <div ref='pieChart'/>;
    }
}