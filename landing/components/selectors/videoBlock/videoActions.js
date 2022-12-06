import React from "react";
import { useEditor, useNode } from "@craftjs/core";

const VideoActions = ({ onChange }) => {
  const {
    actions: { setProp },
  } = useNode();

  const {
    enabled,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // Backgroung Change
  const handleChange = async (e) => {
    const image = e.target.files[0];
    const newImage = URL.createObjectURL(image);
    setProp((props) => (props.picture = newImage));
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

export default VideoActions;
