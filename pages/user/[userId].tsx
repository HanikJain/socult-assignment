import React from 'react'
import { useRouter } from 'next/router';
import GridLayout from '../../components/GridLayout';
import useUser from '../../hooks/useUser';
import Recommendation from '../../components/Recommendation/Recommendation';
import ProfileImage from '../../components/Profile/ProfileImage';
import FollowBtn from '../../components/Post/FollowBtn';
import styles from "./user.module.css"

import {User, Post as PostType} from "../../store/userTypes";

import Post from '../../components/Post/Post'

type Props = {}

export default function UserProfile({}: Props) {
    const router = useRouter();
    const userId = router.query.userId;
    let currentUserIsAuth = true;

    const {getAuthUser , getUser, getFollowerCount} =  useUser();
    const authUser = getAuthUser();
    const currUser = getUser(userId as string);
    const followerCount = getFollowerCount(userId as string);
    let title = "Recommendations"

    

    let recommendations = authUser.recommendations;
    

    if(authUser.userDetails.username !== userId) {
        currentUserIsAuth = false;
        if(currUser)  {
            recommendations = currUser.following;
            title = "People following " + currUser.userDetails.name
        }
        else 
        recommendations = [];
        
    }


    function renderPost(post: PostType, i:number){
        return <Post key={i} data={post}/>
    }



  return (
    <GridLayout >
        <div></div>
        <div className={styles.container}>
            <div className={styles.coverContainer}>
                <img src={currUser?.userDetails.coveredImageUrl} alt="Cover Image" />
            </div>
            <div className={styles.container2}>
                <div className={styles.profileContainer}>
                    <ProfileImage size={"100px"} src={currUser?.userDetails.profileImageUrl as string} username={currUser?.userDetails.username as string}  />
                </div>

                <div className={styles.container3}>
                    <div className={styles.container4}>
                        <div >
                            <div>
                            {(currUser?.userDetails) && (currUser?.userDetails.name.length > 10 ? (currUser?.userDetails.name.slice(0, 10) + "...") : (currUser?.userDetails.name))}
                            </div>
                            <div className={styles.lightFont}>
                                @{(currUser?.userDetails) && (currUser?.userDetails.username.length > 15 ? (currUser?.userDetails.username.slice(0, 12) + "...") : (currUser?.userDetails.username))}
                            </div>
                        </div>
                        <div>
                        {!currentUserIsAuth && <FollowBtn  isFollowing = {currUser?.userDetails.isFollowing as boolean} username={currUser?.userDetails.username as string}/>}
                        </div>
                    </div>

                    <div>
                        {`Followed by ${followerCount} people`}
                    </div>
                   
                </div>
            </div>
            <div>
                <h3>TimeLine</h3>
                <div>
                    {
                        currUser?.posts && 
                        currUser?.posts.map(renderPost)
                    }
                </div>
            </div>
        </div>
        <Recommendation title={title} recommendations={recommendations} />
    </GridLayout>

  )
}