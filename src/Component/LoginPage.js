import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="description">
            <h3 className="text-center">
              EQUAL EMPLOYMENT OPPORTUNITY COMMISSION (EEOC)
            </h3>
            <p asdsa>
              This system contains confidential data protected by federal
              information and data privacy legislation. The authorized use of
              this system is for official EEOC case management and reporting.
              Access by unauthorized users or for purposes not authorized by the
              Commission, is subject to civil and criminal penalties or
              administrative action for computer fraud and abuse. EEOC takes
              measures to maintain the security, confidentiality, and integrity
              of the information we collect at this site, such as access
              controls designed to limit access to the information, as necessary
              to accomplish its mission. EEOC also employs various security
              technologies to protect the information stored on its systems. All
              uses of this system and portal are subject to monitoring and
              inspection according to public law.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-center">Sign in</h4>
        <p>*Required</p>

        <form className="form-group">
          <div className="form-inline">
            <label forHTML="Email">Email</label>
            <input
              type="text"
              name="Email"
              className="form-control ml-5 "
              placeholder="Enter Email"
              value=""
            />
          </div>
          <div className="form-inline">
            <label forHTML="Password">Password</label>
            <input
              type="text"
              name="Password"
              className="form-control "
              style={{ marginLeft: "20px" }}
              placeholder="Enter Password"
            />
          </div>
        </form>
        <div className="ml-5">
          <Link to="/RegistrationForm">Click to Registration Conatact</Link>
          <Link to="/ForgotPage" className="ml-5">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
