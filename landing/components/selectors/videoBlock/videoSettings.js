import { useNode } from "@craftjs/core";
import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import VideoActions from "./videoActions";

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
        <ToolbarSection
          title="Margin"
          props={["margin"]}
          summary={({ margin }) => {
            return `${margin[0] || 0}px ${margin[1] || 0}px ${
              margin[2] || 0
            }px ${margin[3] || 0}px`;
          }}
        >
          <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
          <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
          <ToolbarItem
            propKey="margin"
            index={2}
            type="slider"
            label="Bottom"
          />
          <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
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
