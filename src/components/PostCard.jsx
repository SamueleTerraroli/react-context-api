const PostCard = ({ post }) => {
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
                <img src={post?.image} className="card-img" alt={post?.title} />
                <div className="card-body">
                    <h3 className="post-title">{post?.title}</h3>
                    <p className="post-text">{post?.content}</p>
                </div>
            </div>

        </div>
    )
}

export default PostCard