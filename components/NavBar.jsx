import React from "react";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav
      className={`${styles["custom-navbar"]} navbar navbar-expand-lg custom-navbar`}
    >
      <div className="container-fluid text-white">
        <a className="navbar-brand text-white border-end fs-6 pe-3" href="#">
          MindIndex
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
               <div className="d-flex align-items-center ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-house "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>
                  <span className="px-2  mt-2!important ">Home</span>
                </div>
              </a>
            </li>
            
          </ul>

          <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input
              type="search"
              className={`form-control ${styles["search-box"]}`}
              placeholder="Search MindIndex"
              aria-label="Search MindIndex"
            />
            <button
              className="btn btn-dark"
              type="button"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
