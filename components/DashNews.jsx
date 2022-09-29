const DashNews = () => {
  return (
    <>
      <section className="bg-warning text-light p-5 text-m-center text-sm-start text text-center">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h3 className="mb-1 mb-md-0 mx-5 text-primary">Newsletter</h3>
            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
              <button className="btn btn-primary btn-lg" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashNews;
