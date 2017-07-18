import React, {Component} from 'react'
import request from 'superagent'

export default class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: '',
            text: '',
            load: false
        };
        this._fetchContent = this._fetchContent.bind(this)
    }

    _fetchContent(){
        request.get('http://localhost:4001/about',
            {},
            (err, res)=>(
                this.setState({load: true, header: res.body.header, text: res.body.text })
            ))

    }

    componentDidMount(){
        this._fetchContent()
    }

    render() {
        const {load, header, text} = this.state;
        return (
            <div>
                <h3>{load && header}</h3>

                <p>{load && text}</p>
            </div>
        )
    }
}

