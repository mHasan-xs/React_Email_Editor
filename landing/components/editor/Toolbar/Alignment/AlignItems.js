import { useNode } from "@craftjs/core";
import React, { useState } from "react";

export const AlignItems = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (options[0]?.name == "alignItem") {
      setProp((props) => (props.selectedAlign = event.target.value));
    }
    if (options[0]?.name == "justifyContent") {
      setProp((props) => (props.selectedJustify = event.target.value));
    }
  };

  return (
    <>
      <div className="radio-toolbar">
        {options.map((item) => (
          <>
            <input
              type="radio"
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
              checked={selectedValue === item.value}
            />
            <label for={item.id}>{item.Icon}</label>
          </>
        ))}
      </div>
    </>
  );
};
