import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function DiaryPage() {
  return (
    <>
      {/* header */}

      <Header />

      {/* date */}
      <div className="date rounded mt-5 p-2">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <i className="bi bi-arrow-left fs-4"></i>
            </div>
            <div className="col-4">
              <h5 className="text-center">
                <i className="bi bi-calendar"></i> Today, 21 Aug
              </h5>
            </div>
            <div className="col-4 text-end">
              <i className="bi bi-arrow-right fs-4 "></i>
            </div>
          </div>
        </div>
      </div>

      {/* meals */}
      <div id="meals">
        <div className="card meal shadow rounded border-0 p-3 mt-2 mb-4">
          <div className="row d-flex ">
            <div className="col-2 text-center">
              <img
                src="/img/breakfast.png"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-10 ">
              <div className="card-body ps-0 position-relative">
                <h5 className="card-title">Breakfast</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet.
                </p>
                <i className="bi bi-plus-circle position-absolute top-50 translate-middle-y end-0 me-4 p-0"></i>
              </div>
            </div>
            <hr />
            <small className="text-center">858 kcal</small>
          </div>
        </div>
        <div className="card meal shadow rounded border-0 p-3 mt-2 mb-4">
          <div className="row d-flex ">
            <div className="col-2 text-center">
              <img
                src="/img/lunch.png"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-10 ">
              <div className="card-body ps-0 position-relative">
                <h5 className="card-title">Lunch</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet.
                </p>
                <i className="bi bi-plus-circle position-absolute top-50 translate-middle-y end-0 me-4 p-0"></i>
              </div>
            </div>
            <hr />
            <small className="text-center">858 kcal</small>
          </div>
        </div>
        <div className="card meal shadow rounded border-0 p-3 mt-2 mb-4">
          <div className="row d-flex ">
            <div className="col-2 text-center">
              <img
                src="/img/dinner.png"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-10 ">
              <div className="card-body ps-0 position-relative">
                <h5 className="card-title">Dinner</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet.
                </p>
                <i className="bi bi-plus-circle position-absolute top-50 translate-middle-y end-0 me-4 p-0"></i>
              </div>
            </div>
            <hr />
            <small className="text-center">858 kcal</small>
          </div>
        </div>
        <div className="card meal shadow rounded border-0 p-3 mt-2 mb-4">
          <div className="row d-flex ">
            <div className="col-2 text-center">
              <img
                src="/img/snack.png"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-10 ">
              <div className="card-body ps-0 position-relative">
                <h5 className="card-title">Snack</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet.
                </p>
                <i className="bi bi-plus-circle position-absolute top-50 translate-middle-y end-0 me-4 p-0"></i>
              </div>
            </div>
            <hr />
            <small className="text-center">858 kcal</small>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default DiaryPage;
