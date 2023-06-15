import React from 'react';
import {User, UserDetails, Comment, Bio} from "../store/userTypes"

import { useAppDispatch, useAppSelector } from '../store/index';
import { dataActions } from '../store/updateData';


export default function useUser() {

	const USERS = useAppSelector(state => state.data.users);
	
	const authUser: User = USERS[0];

	const dispatch = useAppDispatch();
	
	function getAuthUserDetails() : UserDetails{
		return authUser.userDetails;
	}
	
	function getAuthUser() : User{
		return authUser;
	}


	function getUser(username: string): User | null{
		let user = USERS.filter(user => user.userDetails.username === username);
		if(user.length === 0) {
			return null;
		}
		return user[0];
	} 


	function followUser(username: string) {
		let following = false;

		USERS.forEach(user => {
			if(user.userDetails.username === username) {
				user.userDetails.isFollowing = true;
				let currDetails: UserDetails = getAuthUserDetails()
				user.following?.push(currDetails);
				following = true;
			}
		});


		dispatch(dataActions.updateState(USERS));
	   
	   
		
	
	}


	function addComment(username: string, postId: number, userComment: string) {
		
		USERS.forEach(user => {
			if(user.userDetails.username === username) {
				user.posts.forEach((post) => {
					if(post.id === postId){
						let id: number = 0;

						if(post.comments) {
							id = post.comments.length + 1;
						}

						let currDetails: UserDetails = getAuthUserDetails();

						let comment: Comment = {
							id: id,
							comment: userComment,
							name: currDetails.name,
							profileImageUrl:  currDetails.profileImageUrl,


						} 

						post.comments?.push(comment);

					}
				})
		
			}
		});


		dispatch(dataActions.updateState(USERS));
	}


	function updateBio(bio: Bio){
		dispatch(dataActions.updateBio(bio));
	}


	return {
		getAuthUserDetails,
		getAuthUser,
		getUser,
		followUser,
		addComment,
		updateBio
	}

}
