import React from 'react';
import {User, UserDetails, Comment, Bio} from "../store/userTypes"

import { useAppDispatch, useAppSelector } from '../store/index';
import { dataActions } from '../store/updateData';


export default function useUser() {

	const USERS = useAppSelector(state => state.data.users);
	const cloneUsers = structuredClone(USERS)
	
	const authUser: User = cloneUsers[0];

	const dispatch = useAppDispatch();
	
	function getAuthUserDetails() : UserDetails{
		return authUser.userDetails;
	}
	
	function getAuthUser() : User{
		return authUser;
	}


	function getUser(username: string): User | null{
		let user = cloneUsers.filter(user => user.userDetails.username === username);
		if(user.length === 0) {
			return null;
		}
		return user[0];
	} 


	function followUser(username: string) {
		let following = false;

		cloneUsers.forEach(user => {
			if(user.userDetails.username === username) {
				user.userDetails.isFollowing = true;
				let currDetails: UserDetails = getAuthUserDetails()
				user.following?.push(currDetails);
				following = true;
			}
		});


		dispatch(dataActions.updateState(cloneUsers));
	   
	   
		
	
	}


	function addComment(username: string, postId: number, userComment: string) {

		
		
		cloneUsers.forEach(user => {
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
							username: currDetails.username,


						} 

						post.comments = [...post.comments, comment]

					}
				})
		
			}
		});


		dispatch(dataActions.updateState(cloneUsers));
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
