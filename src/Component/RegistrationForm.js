import React from "react";

const RegistrationForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-12">
          <form>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
            <div className="form-inline">
              <label forHTML="First Name">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="form-control ml-3"
                placeholder="FirstName"
              />
              {/* Last Name */}
              <label forHTML="Last Name">Last Name</label>
              <input
                type="text"
                name="Password"
                className="form-control ml-3"
                placeholder="Last Name"
              />
            </div>
          </form>
        </div>
      </div>
      <form className="Radio-Button mt-5">
        <label>
          <input type="radio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" className="ml-5" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" className="ml-5" value="option2" />
          Option 2
        </label>
        <label className="pl-5">
          <input type="radio" className="pr-5" value="option2" />
          Option 2
        </label>
      </form>
      <button className="btn btn-primary">Submit</button>
      <button className="btn btn-primary">Back</button>
    </div>
  );
};

export default RegistrationForm;
