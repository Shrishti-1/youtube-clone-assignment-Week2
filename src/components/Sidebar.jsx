import { Link } from "react-router-dom";

const Sidebar = ({ watchLaterCount }) => {
  return (
    <div className="d-none d-lg-flex flex-column bg-white text-black p-3" style={{ width: "220px", height: "100vh", position: "fixed", top: 0, left: 0 }}>
      <h4 className="mb-4">youtube</h4>
      <Link to="/" className="text-black text-decoration-none mb-3 d-flex align-items-center gap-2">
  <i className="bi bi-house"></i> Home
</Link>

<Link to="/watch-later" className="text-black text-decoration-none d-flex align-items-center gap-2">
  <i className="bi bi-clock"></i> Watch Later

        {watchLaterCount > 0 && (
          <span className="badge bg-light text-dark ms-2">{watchLaterCount}</span>
        )}
      </Link>
    </div>
  );
};

export default Sidebar;
