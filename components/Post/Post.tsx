import React, { ReactNode } from 'react'
import {User, Post} from "../../store/userTypes";
import Link from 'next/link';
import { AiFillLike, AiFillDislike, AiOutlineDislike, AiOutlineLike} from "react-icons/ai"

import ProfileImage from '../Profile/ProfileImage';
import Comment from './Comment';
import FollowBtn from './FollowBtn';
import useUser from "../../hooks/useUser"

import styles from "./Post.module.css"


interface Props {
    data: Post
}

const Post = ({data}: Props) => {
    const {updateLike,   updateDisLike} = useUser();
    
    function likeHandler(){
        updateLike(data.userDetails.username, data.id);
    }

    function disLikeHandler() {
        updateDisLike(data.userDetails.username, data.id)
    }

    return (
      <div className={styles.container}>
        {
          data.isImage && 
          <div className={styles.imageContainer}>
            <img src={data.url} alt="image" />
          </div>
        }

        {
          data.isVideo && (
            <div className={styles.videoContainer}>
                <video src={data.url} controls muted > </video>
            </div>
          )
        }
        
        <div className={styles.profileContainer}>
          <ProfileImage size={undefined} src={data.userDetails.profileImageUrl} username={data.userDetails.username}/>
          <div className={styles.profileContainer2}>
            
            <div className={styles.innerContainer}>
              <div className={`${styles.innerContainer1} ${styles.flexCol}`}>
                <div style={{columnGap: "0.7rem"}} className={styles.flexRow}>
                  <div style={{rowGap: "0rem"}} className={styles.flexCol}>
                    <span>{data.userDetails.name}</span>
                    <Link className={styles.username} href={`/user/${data.userDetails.username}`}>
                        @{data.userDetails.username.length > 10 ? (data.userDetails.username.slice(0, 8) + "...") : data.userDetails.username}
                    </Link>
                    
                  </div>
                  <FollowBtn username={data.userDetails.username} isFollowing = {data.userDetails.isFollowing}/>
                </div>
                <div>
                  {data.postedDate}
                </div>
              </div>
              <div className={styles.innerContainer2}>
                  <div className={styles.inner}>
                    {data.isLiked ? <span onClick={likeHandler}><AiFillLike size={20} fill={"#00DFA2"} /> </span>: <span onClick={likeHandler} ><AiOutlineLike size={20} /> </span>}
                    <span>{data.likes}</span>
                  </div>
                  <div className={styles.inner}>
                  {data.isDisliked ? <span onClick={disLikeHandler} > <AiFillDislike size={20} fill={"#E21818"} /> </span>: <span onClick={disLikeHandler} ><AiOutlineDislike size={20} /></span>}
                    
                    <span>{data.dislikes}</span>
                  </div>
              </div>
            </div>
            <hr />
            <div>{data.description}</div>
            <hr />
            <Comment comments={data.comments}  username={data.userDetails.username} postId={data.id}/>
          </div>
        </div>
      </div>
    )
}


export default Post;
