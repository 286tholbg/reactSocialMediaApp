import './stories.scss'
import React, {useContext} from 'react'
import { AuthContext } from '../../context/authContext'

const Stories = () => {
    
    const {currentUser} = useContext(AuthContext)
 
    // Temporary data

    const stories = [
        {
            id: 1,
            name: 'Johnny Doko',
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: 'Johnny Doko',
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 1,
            name: 'Johnny Doko',
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: 'Johnny Doko',
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]
    
    const storiesElement = stories.map(story => {
        return (
        <div className='story' key={story.id}>
            <img src={story.img} alt="profile image"/>
            <span>{story.name}</span>
        </div>
        )
    })
    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} alt="profile image"/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {storiesElement}
        </div>
    )
}

export default Stories