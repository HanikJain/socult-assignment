import React from 'react'
import styles from "./FollowBtn.module.css"
import useUser from "../../hooks/useUser"

type Props = {
  isFollowing: boolean | null;
  username: string
}

export default function FollowBtn({isFollowing, username}: Props) {
    const {follow, getAuthUserDetails} = useUser();
    const authUser = getAuthUserDetails();

    if(authUser.username === username) {
        return ;
    }

    function clickHandler(e: any){
        e.preventDefault();
        follow(username)

    }

    const  FollowButton = 
    <button onClick = {clickHandler} className={styles.followButton}>
        Follow
    </button>
    return (
        <div>
            {isFollowing? <p style={{color: "var(--blue-color)"}}>Following </p> : FollowButton}
        
        </div>
  )
}