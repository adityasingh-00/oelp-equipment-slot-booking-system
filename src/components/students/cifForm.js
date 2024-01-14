import React from "react";

const cifForm = () => {
  return (
    <div className="container mt-5">
      <form
        class="row g-3 mt-4 mx-auto "
        style={{ width: "68%", border: "black solid 1px" }}
      >
        <p className="mb-3" style={{ textAlign: "center" }}>
          <strong>For CIF Office Use:</strong>
        </p>
        <div class="col-md-3">
          <label for="" class="form-label">
            Job No(For office Use):
          </label>
          <input type="text" class="form-control" id="" name="job_no" />
        </div>
        <div class="col-md-3">
          <label for="" class="form-label">
            Date:
          </label>
          <input type="date" class="form-control" id="" name="job_no" />
        </div>
        <div class="col-md-3">
          <label for="" class="form-label">
            Start Time:
          </label>
          <input type="time" class="form-control" id="" name="job_no" />
        </div>
        <div class="col-md-3">
          <label for="" class="form-label">
            End Time:
          </label>
          <input type="time" class="form-control" id="" name="job_no" />
        </div>
      </form>
    </div>
  );
};

export default cifForm;
