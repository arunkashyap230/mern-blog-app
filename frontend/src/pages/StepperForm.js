import React, { useState } from "react";
import axios from "axios";

function StepperForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    registrationDate: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    postalCode: "",
    businessAddress: false,
    numShares: "",
    shareCapital: "",
    currency: "SGD",
    businessActivity1: "",
    activity1Desc: "",
    businessActivity2: "",
    activity2Desc: "",
    director: {
      name: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      postalCode: "",
      phone: "",
      nationality: "",
      idType: "",
      idNumber: "",
    },
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id.startsWith("director")) {
      const fieldName = id.replace("director", "").toLowerCase();
      setFormData((prevFormData) => ({
        ...prevFormData,
        director: {
          ...prevFormData.director,
          [fieldName]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/company",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Basic forms</h3>
              <div id="stepper">
                <ul className="nav nav-pills mb-3">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${step === 1 ? "active" : ""}`}
                      onClick={() => setStep(1)}
                    >
                      Basic Info
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${step === 2 ? "active" : ""}`}
                      onClick={() => setStep(2)}
                    >
                      Director Info
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Step 1: Basic Info */}
                  {step === 1 && (
                    <div className="tab-pane fade show active">
                      <h4>Step 1: Basic Info</h4>
                      <form>
                        <div className="mb-3">
                          <label htmlFor="companyName" className="form-label">
                            Proposed Name of Company*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="registrationDate"
                            className="form-label"
                          >
                            Proposed Date of Registration*
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="registrationDate"
                            value={formData.registrationDate}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="addressLine1" className="form-label">
                            Address Line 1*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            pattern="[A-Za-z0-9\s,.]+"
                            title="Address Line 1 should only contain letters, numbers, spaces, commas, and periods."
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="addressLine2" className="form-label">
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            Country*
                          </label>
                          <select
                            className="form-control"
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Country</option>
                            <option value="SG">Singapore</option>
                            <option value="US">United States</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="postalCode" className="form-label">
                            Postal Code*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="businessAddress"
                              checked={formData.businessAddress}
                              onChange={handleChange}
                            />
                            Do you need a registered business address in
                            Singapore?
                          </label>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="numShares" className="form-label">
                            Proposed Number of Shares*
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="numShares"
                            value={formData.numShares}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="shareCapital" className="form-label">
                            Proposed Share Capital*
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              id="shareCapital"
                              value={formData.shareCapital}
                              onChange={handleChange}
                              required
                            />
                            <select
                              className="form-select"
                              id="currency"
                              value={formData.currency}
                              onChange={handleChange}
                              required
                            >
                              <option value="SGD">SGD</option>
                              <option value="USD">USD</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="businessActivity1"
                            className="form-label"
                          >
                            Proposed Business Activity 1*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="businessActivity1"
                            value={formData.businessActivity1}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="activity1Desc" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="activity1Desc"
                            value={formData.activity1Desc}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="businessActivity2"
                            className="form-label"
                          >
                            Proposed Business Activity 2
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="businessActivity2"
                            value={formData.businessActivity2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="activity2Desc" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="activity2Desc"
                            value={formData.activity2Desc}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Step 2: Director Info */}
                  {step === 2 && (
                    <div className="tab-pane fade show active">
                      <h4>Step 2: Director Info</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="directorName" className="form-label">
                            Name of Proposed Director*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorName"
                            value={formData.director.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="directorEmail" className="form-label">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="directorEmail"
                            value={formData.director.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorAddressLine1"
                            className="form-label"
                          >
                            Address Line 1*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorAddressLine1"
                            value={formData.director.addressLine1}
                            onChange={handleChange}
                            pattern="[A-Za-z0-9\s,.]+"
                            title="Address Line 1 should only contain letters, numbers, spaces, commas, and periods."
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorAddressLine2"
                            className="form-label"
                          >
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorAddressLine2"
                            value={formData.director.addressLine2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorCountry"
                            className="form-label"
                          >
                            Country*
                          </label>
                          <select
                            className="form-control"
                            id="directorCountry"
                            value={formData.director.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Country</option>
                            <option value="SG">Singapore</option>
                            <option value="US">United States</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorPostalCode"
                            className="form-label"
                          >
                            Postal Code*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorPostalCode"
                            value={formData.director.postalCode}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="directorPhone" className="form-label">
                            Contact No*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorPhone"
                            value={formData.director.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorNationality"
                            className="form-label"
                          >
                            Nationality*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorNationality"
                            value={formData.director.nationality}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorIdType"
                            className="form-label"
                          >
                            Identification Document Type*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorIdType"
                            value={formData.director.idType}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="directorIdNumber"
                            className="form-label"
                          >
                            Identification No*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="directorIdNumber"
                            value={formData.director.idNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="isShareholder"
                              checked={formData.director.isShareholder}
                              onChange={handleChange}
                            />
                            Is this Director also a Shareholder?
                          </label>
                        </div>

                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperForm;
