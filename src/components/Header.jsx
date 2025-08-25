const Header = () => {
  return (
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
  );
};

export default Header;
