import './posts.scss'
import Post from "../post/Post"

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "Davide Comuo",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula nec fermentum rhoncus, quam sem pellentesque augue",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 1,
            name: "Mathew Connor",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, ligula nec fermentum rhoncus, quam sem pellentesque augue",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]
    return (
        <div className='Posts'>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts