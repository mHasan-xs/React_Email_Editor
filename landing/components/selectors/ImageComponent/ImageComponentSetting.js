import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import ImageComponentAction from "./ImageComponentAction";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

const ImageComponentSetting = () => {
  return (
    <>
      <ToolbarSection title="Upload">
        <ImageComponentAction />
      </ToolbarSection>
      <ToolbarSection
        title="Dimensions"
        props={["width", "height"]}
        summary={({ width, height }) => {
          return `${width || 0} x ${height || 0}`;
        }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
        <ToolbarItem propKey="height" type="text" label="Height" />
      </ToolbarSection>

      <ToolbarSection title="Margin" props={["margin"]}>
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={["shadow"]}>
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
    </>
  );
};

export default ImageComponentSetting;
