import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

export const DividerSettings = () => {
  return (
    <>
      <ToolbarSection
        title="Line"
        props={["width", "height"]}
        summary={({ width, height }) => {
          return `${width || 0} x ${height || 0}`;
        }}
      >
        <ToolbarItem full={true} propKey="width" type="slider" label="width" />
        <ToolbarItem
          full={true}
          propKey="height"
          type="slider"
          label="height"
        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          full={true}
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Margin" props={["margin"]}>
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection
        title="Appearance"
        props={["color"]}
        summary={({ background }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
              ></div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
      </ToolbarSection>
    </>
  );
};
