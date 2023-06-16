import React, {useState} from 'react'
import styles from "./Bio.module.css"
import {BiEdit} from "react-icons/bi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {FaGraduationCap} from "react-icons/fa"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {MdWork} from "react-icons/md"
import useUser from '../../hooks/useUser'
import {Bio} from "../../store/userTypes"
import Modal from "../Modal/Modal"
import EditBio from './EditBio'

type Props = {
    username: string,
    bio: Bio | undefined
}

export default function Bio({username, bio}: Props) {
    const {getAuthUserDetails} = useUser();
    const authUser = getAuthUserDetails();

    const [showModal, setShowModal] = useState(false);
  
    
  return (
    <>
        <div className={styles.container}>
            <div className={styles.innerContainer1}>
                <div>Bio</div>
                <div>
                    {
                    (authUser.username === username ) && <span onClick={() => setShowModal(true)} className={styles.center}><BiEdit size={20} /></span>
                    }
                
                </div>
            </div>

            <div className={styles.container2}>
                    {
                        bio?.worked && (
                            <div className={styles.hero}>
                                <div className={styles.innerHero1}><MdWork size={20}/></div>
                                <div className={styles.innerHero2}>{bio?.worked}</div>
                            </div> 
                        )
                    }
                

                    {
                        bio?.formerLocation && (
                        <div className={styles.hero}>
                            <div className={styles.innerHero1}><BsFillHouseDoorFill size={20} /></div>
                            <div className={styles.innerHero2}>{bio?.formerLocation}</div>
                        </div>
                        )
                    }

                    {
                        bio?.location && (
                        <div className={styles.hero}>
                            <div className={styles.innerHero1}><HiOutlineLocationMarker size={20} /></div>
                            <div className={styles.innerHero2}>{bio?.location}</div>
                        </div>  
                        )
                    } 

                    {
                        bio?.college && (
                            <div className={styles.hero}>
                                <div className={styles.innerHero1}><FaGraduationCap size={20} /></div>
                                <div className={styles.innerHero2}>{bio?.college}</div>
                            </div> 
                        )
                    }

                    {
                        bio?.school && (
                        <div className={styles.hero}>
                            <div className={styles.innerHero1}><FaGraduationCap size={20}/></div>
                            <div className={styles.innerHero2}>{bio?.school}</div>
                        </div> 
                        )
                    }
                

                



                

                
            </div>
        </div>

        <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title="Modal Title"
        >
            <EditBio bio={bio}/>
        </Modal>
    </>
    

  )
}