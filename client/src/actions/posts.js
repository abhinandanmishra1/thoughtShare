import * as api from "../api";
// now we can use all functions in api
import {
	CREATE_POST,
	UPDATE_POST,
	FETCH_POSTS,
	DELETE_POST,
	LIKE_POST,
} from "../constants/actionTypes";
// Action Creators

export const getPosts = () => async (dispatch) => {
	// fecthing data is asynchronous work
	// that's why this type of fucntion is used
	try {
		const { data } = await api.fetchPosts();
		const action = { type: FETCH_POSTS, payload: data };
		dispatch(action); // dispatching the action instead of returning it
	} catch (err) {
		console.log(err);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		const action = { type: CREATE_POST, payload: data };
		dispatch(action);
	} catch (err) {
		console.log(err);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		const action = { type: UPDATE_POST, payload: data };
		dispatch(action);
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: DELETE_POST, payload: id });
	} catch (err) {
		console.log(err);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		const action = { type: LIKE_POST, payload: data };
		dispatch(action);
	} catch (err) {
		console.log(err);
	}
};
