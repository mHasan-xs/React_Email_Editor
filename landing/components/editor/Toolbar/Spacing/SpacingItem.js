import { useNode } from "@craftjs/core";
import React, { useState } from "react";

export const SpacingItem = ({ title }) => {
  const [spacing, setSpacing] = useState({
    Top: "0",
    Right: "0",
    Bottom: "0",
    Left: "0",
  });
  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (e) => {
    setSpacing({ ...spacing, [e.target.name]: e.target.value });
    if (title == "Margin") {
      setProp((props) => (props.MarginSpacing = spacing));
    }
    if (title == "Padding") {
      setProp((props) => (props.PaddingSpacing = spacing));
    }
  };

  return (
    <>
      <div className="spacing_wrapper">
        <ul>
          <li>
            <input type="number" name="Top" id="Top" onChange={handleChange} />
          </li>
          <li>
            <input
              type="number"
              name="Right"
              id="Right"
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="number"
              name="Bottom"
              id="Bottom"
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="number"
              name="Left"
              id="Left"
              onChange={handleChange}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
