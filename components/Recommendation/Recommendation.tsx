import React from 'react'
import { UserDetails } from '../../store/userTypes'
import styles from './Recommendation.module.css'
import ProfileImage from '../Profile/ProfileImage'
import FollowBtn from '../Post/FollowBtn'
import useUser from '../../hooks/useUser';

type Props = {
    recommendations:  UserDetails[] | undefined,
    title: string,
}

export default function Recommendation({recommendations, title}: Props) {
    
    const {getAuthUser } =  useUser();
    const authUser = getAuthUser();

    const renderComp  = (user: UserDetails, i:number) => { 

        if(user.username === authUser.userDetails.username) {
            return ;
        }

    return (
    <>
        <div key={i} className={styles.container}>
            <div className={styles.container1}>
                <ProfileImage size={undefined} src={user.profileImageUrl} username={user.username} />
            </div>
            <div className={styles.container2}>
                <span>{user.name}</span>
                <FollowBtn isFollowing={user.isFollowing} username={user.username} />
            </div>
            
        </div>
     
        {((recommendations) && (recommendations.length - 1 > i && <hr /> ) ) }
    </> 
    )
    }


  return (
    <div className={styles.recommendation}>
        <div className={styles.title}>{title}</div>
        {recommendations?.map(renderComp)}
        {((recommendations) && (recommendations.length === 0 && "No recommendations" ) ) }
    </div>
  )
}