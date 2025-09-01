import MacrosBar from "./MacrosBar";

const Header = () => {
  return (
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
        <MacrosBar />
      </div>
    </div>
  );
};

export default Header;
