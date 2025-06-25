import { Link } from "react-router-dom";

const Navbar = ({ watchLaterCount }) => {
  return (
    <>
      <nav
        className="navbar navbar-light bg-white border-bottom px-3 py-2"
        style={{ position: "sticky", top: 0, zIndex: 1020 }}
      >
        <div className="container-fluid justify-content-between align-items-center">

          {/*Hamburger menu and logo*/}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-outline-dark d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
            >
              ☰
            </button>

            <Link
              to="/"
              className="navbar-brand d-flex align-items-center gap-2 mb-0 h1 text-dark"
            >
              <i className="bi bi-youtube fs-4 text-danger"></i>
              youtube
            </Link>
          </div>

          {/*Search bar*/}
          <form className="d-none d-md-flex mx-auto" style={{ width: "50%" }}>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-start-pill"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="voice-icon"
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <span
                className="input-group-text bg-white border-start-0"
                id="voice-icon"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-mic-fill text-secondary"></i>
              </span>
            </div>
          </form>
        </div>
      </nav>

      {/*Sidebar for Hamburger menu*/}
      <div
        className="offcanvas offcanvas-start text-bg-white"
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">youtube</h5>
          <button
            type="button"
            className="btn-close btn-close-black"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <Link to="/" className="text-black text-decoration-none">
          <i className="bi bi-house"></i> Home
          </Link>
          <Link to="/watch-later" className="text-black text-decoration-none">
          <i className="bi bi-clock"></i> Watch Later
            {watchLaterCount > 0 && (
              <span className="badge bg-light text-dark ms-2">
                {watchLaterCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
