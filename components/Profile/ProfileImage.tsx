import React from 'react'
import styles from "./ProfileImage.module.css"
import Link from 'next/link';

type Props = {
    src: string,
    username: string,
    size: string | undefined
}

export default function ProfileImage({src, username, size}: Props) {
  const imageStyle = {
    width: `${size && size}`,
    height: `${size && size}`
  }

  return (
    <Link  style={imageStyle} href={`/user/${username}`} className={styles.profileImage} >
        <img src={src} alt="Profile Image" />
    </Link>
  )
}