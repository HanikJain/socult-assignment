import React from 'react'
import styles from "./ProfileImage.module.css"
import Link from 'next/link';

type Props = {
    src: string,
    username: string
}

export default function ProfileImage({src, username}: Props) {
  return (
    <Link href={`/user/${username}`} className={styles.profileImage} >
        <img src={src} alt="Profile Image" />
    </Link>
  )
}