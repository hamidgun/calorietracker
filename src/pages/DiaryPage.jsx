import DateSelector from "../components/DateSelector.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function DiaryPage() {
  return (
    <>
      {/* header */}
      <div id="header">
        <Header />
      </div>

      {/* date */}
      <DateSelector />

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
