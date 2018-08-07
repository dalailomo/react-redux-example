import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts,
        }))
}
