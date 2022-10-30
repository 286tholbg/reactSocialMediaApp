import { useInRouterContext } from "react-router-dom"
import React, {useContext} from "react"
import { AuthContext } from "../../context/authContext"
import "./comments.scss"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Davide Comuo",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula nec fermentum rhoncus, quam sem pellentesque augue"
        },
        {
            id: 1,
            name: "Mathew Connor",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula nec fermentum rhoncus, quam sem pellentesque augue"
        }
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt=""/>
                <input 
                    type="text"
                    placeholder="Leave a comment"
                />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour agp</span>
                </div>
            ))}
        </div>
    )
}

export default Comments