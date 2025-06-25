import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const Home = ({ likes, watchLater, setLikes, setWatchLater }) => {
  const toggleLike = (id) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const toggleWatchLater = (id) => {
    setWatchLater((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">Recommended Videos</h2>
      <div className="row g-4">
        {videos.map((video) => (
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
    </div>
  );
};

export default Home;
