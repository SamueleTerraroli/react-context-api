import { useGlobalContext } from "../context/GlobalContext"
import PostCard from "./PostCard"

const PostList = () => {
    //recupero post list da useGlobalContext

    const { PostList } = useGlobalContext()

    return (
        <div className="container">
            <div className="row">
                {PostList.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostList