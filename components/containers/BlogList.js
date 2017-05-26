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
                    {<BlogItem textBoxContent={item.textBoxContent} imgAttr={item.imgAttr}/>}
                </li>)
        });

        return result;
    }
}
