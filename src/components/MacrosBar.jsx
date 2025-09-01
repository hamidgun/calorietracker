const MacrosBar = () => {
  return (
    <div className="row macro-bars shadow bg-white rounded p-3 mx-auto">
      {/* Carbs */}
      <div className="col-4 d-flex flex-column text-center gap-2">
        <small>Carbs</small>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "75%" }}></div>
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
  );
};
export default MacrosBar;
