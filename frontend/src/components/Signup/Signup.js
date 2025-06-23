import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "admin-lte/dist/css/adminlte.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { name, phone, email, password, rePassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      alert(response.data.msg);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="/">
            <b>Admin</b>LTE
          </a>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>

            <form onSubmit={onSubmit}>
              {/* Name Input */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Full Name"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>

              {/* Phone Input with Country Code */}
              <div className="input-group mb-3">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  placeholder="Enter phone number"
                  className="form-control"
                />
              </div>

              {/* Email Input */}
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              {/* Re-enter Password Input */}
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="rePassword"
                  value={rePassword}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Re-enter Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <a href="/" className="text-center">
              I already have a membership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
