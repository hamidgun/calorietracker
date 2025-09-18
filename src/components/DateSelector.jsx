const DateSelector = () => {
  return (
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
  );
};

export default DateSelector;
