import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import useUser from '../hooks/useUser'

const Home: NextPage = () => {
  const {		
    getAuthUserDetails,
		getAuthUser,
		getUser
  }  = useUser();

  
    
  return (
    <div>Hello World</div>
  )
}

export default Home
