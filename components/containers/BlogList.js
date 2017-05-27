import React, {Component} from 'react';
import BlogItem from '../ui/BlogItem';


export default class BlogList extends Component {

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }

    getList() {
        const {items} = this.props;
        const result = items.map((item, key) => {
            return (
                <li style={{"listStyleType" :"none"}} key={key}>
                    {<BlogItem content={item}/>}
                </li>)
        });

        return result;
    }
}
