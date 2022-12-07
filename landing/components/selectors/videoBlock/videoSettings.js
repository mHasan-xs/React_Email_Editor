import { useNode } from "@craftjs/core";
import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import VideoActions from "./videoActions";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

export const VideoSettings = () => {
  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (e) => {
    const videoAction = e.target.value;
    setProp((props) => (props.actions = videoAction));
  };
  return (
    <>
      <ToolbarSection title="Background">
        <VideoActions />
      </ToolbarSection>
      <ToolbarSection title="Spacing">
        <ToolbarSection title="Margin" props={["margin"]}>
          <SpacingItem title="Margin" />
        </ToolbarSection>
      </ToolbarSection>
      <ToolbarSection title="Actions">
        <div>
          <input
            className="border border-1"
            type="text"
            placeholder="Write video actions"
            onChange={handleChange}
          />
        </div>
      </ToolbarSection>
    </>
  );
};
