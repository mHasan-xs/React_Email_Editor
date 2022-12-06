import React from "react";
import { toast } from "react-toastify";
import { useEditor, useNode } from "@craftjs/core";
import { imageValidation } from "../../../helpers/Validation";

const ImageComponentAction = ({ onChange }) => {
  const {
    actions: { setProp },
  } = useNode();

  const {
    enabled,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // Upload image after validation
  const handleChange = async (e) => {
    const image = e.target.files[0];

    if (!imageValidation(image)) {
      toast.error("Only jpg, jpeg, gif, png accepted");
    } else {
      const newImage = URL.createObjectURL(image);
      setProp((props) => (props.image = newImage));
    }
  };

  return (
    <>
      <div>
        <input
          style={{
            padding: " 3px 10px",
            width: "200px",
          }}
          type="file"
          placeholder="Enter Actions"
          onChange={(e) => handleChange(e)}
          disabled={!enabled}
        />
      </div>
    </>
  );
};

export default ImageComponentAction;
