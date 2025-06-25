const VideoCard = ({ video, isLiked, isWatchLater, toggleLike, toggleWatchLater }) => {
    return (
      <div className="card h-100 shadow">
        <img src={video.thumbnail} className="card-img-top" alt="thumbnail" style={{ borderRadius: "8px" }} />
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <p className="card-text text-muted mb-1">{video.channel}</p>
          <p className="card-text text-secondary">{video.views} • {video.time}</p>
          <div className="d-flex justify-content-between mt-3">
            <button className={`btn btn-sm ${isLiked ? "btn-danger" : "btn-outline-danger"}`} onClick={() => toggleLike(video.id)}>
              ❤️ {isLiked ? "Liked" : "Like"}
            </button>
            <button className={`btn btn-sm ${isWatchLater ? "btn-primary" : "btn-outline-primary"}`} onClick={() => toggleWatchLater(video.id)}>
              ➕ {isWatchLater ? "Saved" : "Watch Later"}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  