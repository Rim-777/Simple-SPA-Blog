import React, {Component} from 'react';
import BlogItem from '../ui/BlogItem';


export default class BlogList extends React.Component {

    getList() {
        const {items, addLike} = this.props;
        const result = items.map((item) => {
            return (
                <li style={{"listStyleType" :"none"}} key={item.metaData.id}>
                    {<BlogItem item={item} addLike={addLike}/>}
                </li>)
        });

        return result;
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }
}