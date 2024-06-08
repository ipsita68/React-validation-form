import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No form data available</p>;
  }

  return (
    <div className="success">
      <h1>Form Submission Successful</h1>
      <p>
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p>
        <strong>Username:</strong> {formData.username}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {formData.phoneNo}
      </p>
      <p>
        <strong>Country:</strong> {formData.country}
      </p>
      <p>
        <strong>City:</strong> {formData.city}
      </p>
      <p>
        <strong>PAN No.:</strong> {formData.panNo}
      </p>
      <p>
        <strong>Aadhar No.:</strong> {formData.aadharNo}
      </p>
    </div>
  );
}

export default Success;
