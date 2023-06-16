import React, {useState}  from 'react'

import styles from "./EditBio.module.css"
import { Bio } from "../../store/userTypes"
import useUser from '../../hooks/useUser'

type Props = {
    bio: Bio | undefined
}

export default function EditBio({bio}: Props) {
    const {updateBio} = useUser();
    const [work , setWork] = useState(bio?.worked);
    const [college , setCollege] = useState(bio?.college);
    const [school , setSchool] = useState(bio?.school);
    const [formerLocation, setFormerLocation] = useState(bio?.formerLocation);
    const [location , setLocation] = useState(bio?.location);
    const followers = bio?.followers

    function clickHandler(){
        let bio:Bio = {
            worked: work,
            college: college,
            school: school,
            formerLocation: formerLocation,
            location: location,
            followers: followers
        } 

        updateBio(bio);
    }
   

  return (
    <div className={styles.container}>

        <div className={styles.hero}>
            <label htmlFor="work">Work</label>
            <input onChange={(e) => {setWork(e.target.value)}} type="text" value={work} id="work" className={styles.input}/>
        </div>

        <div className={styles.hero}>
            <label htmlFor="college">College</label>
            <input onChange={(e) => {setCollege(e.target.value)}} type="text" value={college} id="college" className={styles.input}/>
        </div>

        <div className={styles.hero}>
            <label htmlFor="school">School</label>
            <input onChange={(e) => {setSchool(e.target.value)}} type="text" value={school} id="school" className={styles.input}/>
        </div>

        <div className={styles.hero}>
            <label htmlFor="formerLocation">Former Location</label>
            <input onChange={(e) => {setFormerLocation(e.target.value)}} type="text" value={formerLocation} id="formerLocation" className={styles.input}/>
        </div>

        <div className={styles.hero}>
            <label htmlFor="location">Location</label>
            <input onChange={(e) => {setLocation(e.target.value)}} type="text" value={location} id="location" className={styles.input}/>
        </div>

        <button onClick = {clickHandler} className={styles.btn}>
            Submit
        </button>

    </div>
  )
}