import React, { ReactNode } from 'react'
import {User, Post} from "../../store/userTypes";
import Link from 'next/link';

import ProfileImage from '../Profile/ProfileImage';
import Comment from './Comment';
import styles from "./Post.module.css"


interface Props {
    data: Post
}

const Post = ({data}: Props) => {
  
 
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
        <ProfileImage src={data.userDetails.profileImageUrl} username={data.userDetails.username}/>
        <div className={styles.profileContainer2}>
          
          <div className={styles.innerContainer}>
            <div className={`${styles.innerContainer1} ${styles.flexCol}`}>
              <div style={{columnGap: "0.7rem"}} className={styles.flexRow}>
                <div style={{rowGap: "0rem"}} className={styles.flexCol}>
                  <span>{data.userDetails.name}</span>
                  <Link className={styles.username} href={`/user/${data.userDetails.name}`}>
                      @ {data.userDetails.username.length > 10 ? (data.userDetails.username.slice(0, 8) + "...") : data.userDetails.username}
                  </Link>
                  
                </div>
                <span>Following</span>
              </div>
              <div>
                {data.postedDate}
              </div>
            </div>
            <div className={styles.innerContainer2}>L</div>
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
