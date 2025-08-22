import "./App.css";

function App() {
  return (
    <>
      <div id="header">
        <div className="d-flex justify-content-between align-items-center shadow rounded position-relative h-100">
          <div className="container mt-3">
            <div className="row text-center align-items-center justify-content-center g-3 text-white">
              <div className="col-4">
                <div>
                  <h6 className="value">1540</h6>
                  <p className="label">INTAKE</p>
                </div>
              </div>

              <div className="col-4">
                <div className=" d-flex flex-column align-items-center">
                  <div className="circle-ring mb-2 d-flex flex-column align-items-center justify-content-center">
                    <p className="value">200</p>
                    <small className="label">KCAL OVER</small>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div>
                  <h6 className="value">420</h6>
                  <p className="label">BURNED</p>
                </div>
              </div>
            </div>
          </div>
          <div className="macro-bars-container">
            <div className="row macro-bars shadow bg-white rounded p-3 mx-auto">
              {/* Carbs */}
              <div className="col-4 d-flex flex-column text-center gap-2">
                <small>Carbs</small>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <small className="text-muted">150g / 200g</small>
              </div>

              {/* Protein */}
              <div className=" col-4 d-flex flex-column text-center gap-2">
                <small>Protein</small>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <small className="text-muted">120g / 150g</small>
              </div>

              {/* Fat */}
              <div className="col-4 d-flex flex-column text-center gap-2">
                <small>Fat</small>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <small className="text-muted">60g / 80g</small>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default App;
