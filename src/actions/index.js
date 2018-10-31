import {
     SET_RECENT_POSTS, 
     SET_RESULTS_POSTS
    } from './types';

import axios from 'axios';

export function fetchRecentPosts(){
    return function (dispatch){
        axios.get('https://api.dailysmarty.com/posts')
            .then(Response =>{
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: Response.data.posts
                })
            })
     
    }
}

export function fetchPostsWithQuery(query, callback){
    return function (dispatch){
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
            .then(Response =>{
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: Response.data.posts
                })
                if(callback) {callback()}
            })
     
    }
}