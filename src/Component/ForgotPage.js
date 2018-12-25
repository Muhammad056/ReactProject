import React from "react";

const ForgotPage = () => {
  return (
    <div>
      <form>
        <div className="form-inline">
          <label forHTML="Password">Password</label>
          <input
            type="text"
            name="Password"
            className="form-control ml-3"
            placeholder="Enter Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPage;
