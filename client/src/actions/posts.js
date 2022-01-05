import * as api from '../api';
import {CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';

//action creators
export const getPosts = () => async (dispatch) => {
    try 
    {
        const data = await api.fetchPosts(); //destructring response to just get data
        dispatch({ type: FETCH_ALL, payload: data.data});
    } 
    catch (error) 
    {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try 
    {
        const data = await api.createPost(post);
        dispatch({ type: CREATE, payload: data.data});
    } 
    catch (error) 
    {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try 
    {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id});
        
    } catch (error) 
    {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try 
    {
        
        const data = await api.likePost(id);
        dispatch({type: UPDATE, payload: data.data});
        
    } catch (error) 
    {
       console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try 
    {
        const data = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data.data});
    } 
    catch (error) 
    {
        console.log(error);
    }
}