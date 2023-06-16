import React, {useState} from 'react'
import {Comment} from "../../store/userTypes"
import {BsChevronDown, BsFillArrowRightCircleFill} from "react-icons/bs"
import ProfileImage from '../Profile/ProfileImage';
import Link from 'next/link';
import useUser from '../../hooks/useUser';

import styles from "./Comment.module.css"

type Props = {
    comments: Comment[], 
    username: string,
    postId: number,
}

export default function Comment({comments, username, postId}: Props) {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const {addComment} = useUser();
    

    function onChangeHandler(e: any) {
        setValue(e.target.value);
    }

    function clickHandler(){
        if(value.trim().length > 0){
            addComment(username, postId, value)
            setValue("");
        }
        
    }



    const renderComment = (comment: Comment) => {
        
        return (
            <div className={styles.container1}>
                <div className={styles.innerContainer1}>
                <ProfileImage  size={undefined} username={comment.username} src={comment.profileImageUrl}  />
                </div>
                <div className={styles.innerContainer2}>
                    <Link style={{color: "var(--blue-color)"}} href={`/user/${comment.username}`}>{comment.name} :</Link>
                    <span>{comment.comment}</span>
                </div>
            </div>
        )
    }
    
  return (
    <div className={styles.container}>  
        <div  className={styles.title} onClick={() => {setShow((prev) => !prev )}}>
            <span>Comments</span>
            <span
                 style={{ transform: `${show ? "rotate(180deg)" : "rotate(0deg)"}`, transition: "transform 0.2s ease-in-out" }}
            > <BsChevronDown /> </span>
        </div>

        <div style={{ gridTemplateRows: `${show ? "1fr" : "0fr" }` }} className={styles.commentContainer}>
            <div className={styles.comment}>
                {comments[0] ? comments.map(renderComment) : "No comments"}
            </div>
            
        </div>
        
        <div className={styles.inputContainer}>
            <input onChange={onChangeHandler} type="text" placeholder='Comment something...' value={value}/>
            <span onClick={clickHandler} style={{display: "flex", alignItems: "center"}}>
                <BsFillArrowRightCircleFill fill = "black" size={20} />
            </span>
            
        </div>
        
    </div>
  )
}