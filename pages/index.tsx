import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import useUser from '../hooks/useUser'
import GridLayout from '../components/GridLayout'

import {User, Post as PostType} from "../store/userTypes";

import Post from '../components/Post/Post'
import Recommendation from '../components/Recommendation/Recommendation';


const Home: NextPage = () => {

  const {getAuthUser} = useUser();
  const authUser = getAuthUser();


  const renderFeed = (post: PostType, i:number) => {
    return <Post key={i} data={post}/>
  }
    
  return (
    <GridLayout>
        <div style={{width: '100%', height: '500px', backgroundColor: 'red'}}></div>
        <div className={styles.feedContainer}>
              <h1 className={styles.title} >Your Feed</h1>
              {(!authUser.feed || authUser.feed.length === 0) && (<p>Nothing to show!</p>) }
              {(authUser.feed)  && authUser.feed.map(renderFeed) }
        </div>
        <Recommendation title={"Recommendations"} recommendations={authUser.recommendations} />
    </GridLayout>
  )
}

export default Home
