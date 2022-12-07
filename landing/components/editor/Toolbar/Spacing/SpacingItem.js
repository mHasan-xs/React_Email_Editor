import { useNode } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import { BsLink45Deg } from "react-icons/bs";

export const SpacingItem = ({ title }) => {
  const {
    actions: { setProp },
  } = useNode();

  const [spacing, setSpacing] = useState({
    Top: "0",
    Right: "0",
    Bottom: "0",
    Left: "0",
  });

  // For Handle Spacing
  const handleChange = (e) => {
    setSpacing({ ...spacing, [e.target.name]: e.target.value });
  };
  // For show Spacing UI
  useEffect(() => {
    setProp((props) => (props[title] = spacing));
  }, [spacing]);

  return (
    <>
      <div className="spacing_wrapper">
        <ul>
          <li>
            <input type="number" name="Top" id="Top" onChange={handleChange} />
            <p>Top</p>
          </li>
          <li>
            <input
              type="number"
              name="Right"
              id="Right"
              onChange={handleChange}
            />
            <p>Right</p>
          </li>
          <li>
            <input
              type="number"
              name="Bottom"
              id="Bottom"
              onChange={handleChange}
            />
            <p>Bottom</p>
          </li>
          <li>
            <input
              type="number"
              name="Left"
              id="Left"
              onChange={handleChange}
            />
            <p>Left</p>
          </li>
          <li>
            <button>
              <BsLink45Deg />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
