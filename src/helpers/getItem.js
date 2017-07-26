import {find } from 'lodash';

export default (state, id) => {
    const {items} = state.posts;
    const {item} = state.post;
    const itemFromPosts = find(items, function (item) {
            return item.metaData.id == id
        });

    return itemFromPosts || item
}
