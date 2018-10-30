import {
     SET_RECENT_POSTS, 
     SET_RESULTS_POSTS
    } from './types';

import axios from 'axios';

export function fetchRecentPosts(){
    return function (dispatch){
        axios.get('https://api.dailysmarty.com/posts')
            .then(Response =>{
                console.log(Response.data);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: Response.data.posts
                })
            })
     
    }
}

export function fetchPostsWithQuery(query){
    return function (dispatch){
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
            .then(Response =>{
                console.log(Response.data);
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: Response.data.posts
                })
            })
     
    }
}