const Footer = () => {
  return (
    <footer>
      <nav className="bottom-nav">
        <div className="row justify-content-center align-items-center">
          <div className="col-2 p-3">
            <a href="#" className="nav-link text-white text-center">
              <i className="bi bi-journal-text"></i>
              <div className="nav-label">Diary</div>
            </a>
          </div>
          <div className="col-2 p-3">
            <a href="#" className="nav-link text-white text-center">
              <i className="bi bi-star"></i>
              <div className="nav-label">Favorites</div>
            </a>
          </div>
          <div className="col-3 p-3">
            <a href="#" className="nav-link text-white text-center fs-2">
              <i className="bi bi-plus-circle-fill"></i>
              <div className="nav-label-create">Create</div>
            </a>
          </div>
          <div className="col-2 p-3">
            <a href="#" className="nav-link text-white text-center">
              <i className="bi bi-search"></i>
              <div className="nav-label">Search</div>
            </a>
          </div>
          <div className="col-2 p-3">
            <a href="#" className="nav-link text-white text-center">
              <i className="bi bi-person"></i>
              <div className="nav-label">Profile</div>
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
