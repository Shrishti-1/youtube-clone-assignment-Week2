import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const WatchLater = ({ likes, watchLater, setLikes, setWatchLater }) => {
  const toggleLike = (id) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const toggleWatchLater = (id) => {
    setWatchLater((prev) => prev.filter((v) => v !== id));
  };

  const watchLaterVideos = videos.filter((video) =>
    watchLater.includes(video.id)
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">Watch Later</h2>
      {watchLaterVideos.length > 0 ? (
        <div className="row g-4">
          {watchLaterVideos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <VideoCard
                video={video}
                isLiked={likes.includes(video.id)}
                isWatchLater={watchLater.includes(video.id)}
                toggleLike={toggleLike}
                toggleWatchLater={toggleWatchLater}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">No videos in Watch Later.</p>
      )}
    </div>
  );
};

export default WatchLater;
