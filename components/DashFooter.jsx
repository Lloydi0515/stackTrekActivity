import React from "react";

const DashFooter = () => {
  return (
    <>
      <footer className="p-4 bg-warning text-white text-center position-relative">
        <div>
          <p className="lead text-primary">
            Copyright &copy; 2022 Lloydi StackTrek Web Dev | Follow Me:
            <a href="https://www.facebook.com/" target="blank">
              <i className="bi bi-facebook p-1 text-primary"></i>
            </a>
            <a href="https://www.instgram.com/" target="blank">
              <i className="bi bi-instagram p-1 text-primary"></i>
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <i className="bi bi-twitter p-1 text-primary"></i>
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <i className="bi bi-linkedin p-1 text-primary"></i>
            </a>
          </p>
          <a href="#" className="position-absolute bottom-0 end-0 p-4">
            <i className="bi bi-arrow-up-circle h2"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default DashFooter;
