import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../styles/components/footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer>
      <nav className="bottom-nav">
        <div className="row justify-content-center align-items-center ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link text-center col-2 p-3"
                : "nav-link text-white text-center col-2 p-3"
            }
            to="/"
            end
          >
            <i className="bi bi-journal-text"></i>
            <div className="nav-label">Diary</div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link text-center col-2 p-3"
                : "nav-link text-white text-center col-2 p-3"
            }
            to="/saved"
            end
          >
            <i className="bi bi-star"></i>
            <div className="nav-label">Saved</div>
          </NavLink>

          <div
            ref={dropdownRef}
            className="position-relative d-flex flex-column align-items-center col-2 p-3 text-center"
          >
            <button
              type="button"
              className={`footer-fab ${isOpen ? "is-open" : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              aria-controls="create-menu"
              aria-label="Create"
              title="Create"
            >
              <i className="bi bi-plus"></i>
            </button>

            {isOpen && (
              <ul
                id="create-menu"
                className="dropdown-list bg-white border shadow rounded p-2"
                role="menu"
              >
                <li
                  className="dropdown-item"
                  role="none"
                  onClick={() => setIsOpen(false)}
                >
                  <Link role="menuitem" to="/create?type=meal">
                    Create Meal
                  </Link>
                </li>
                <li
                  className="dropdown-item"
                  role="none"
                  onClick={() => setIsOpen(false)}
                >
                  <Link role="menuitem" to="/create?type=food">
                    Create Food
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link text-center col-2 p-3"
                : "nav-link text-white text-center col-2 p-3"
            }
            to="/search"
            end
          >
            <i className="bi bi-search"></i>
            <div className="nav-label">Search</div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link text-center col-2 p-3"
                : "nav-link text-white text-center col-2 p-3"
            }
            to="/profile"
            end
          >
            <i className="bi bi-person"></i>
            <div className="nav-label">Profile</div>
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
