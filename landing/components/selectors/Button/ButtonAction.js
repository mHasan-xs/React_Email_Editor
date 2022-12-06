import React, { useState } from "react";
import { inputValidation } from "../../../helpers/Validation";

export const ButtonAction = ({ title, value, onChange }) => {
  const [error, setError] = useState("");

  // INPUT FIELD VALUE SAVE DRAFT AFTER VALIDATION
  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (!inputValidation(inputValue)) {
      setError("please write a valid action");
    } else {
      setError("");
      onChange(inputValue);
    }
  };

  return (
    <>
      <div>
        <label className="text-sm">{title}</label>
        <div style={{ width: "250px" }}>
          <input
            style={{
              marginTop: "10px",
              padding: "4px 12px",
              outline: "none",
              border: " 1px solid black",
            }}
            type="text"
            placeholder="Enter Link"
            onChange={(e) => handleChange(e)}
          />
          {error && (
            <p style={{ color: "red", fontSize: "12px", maxWidth: "12.5rem" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
