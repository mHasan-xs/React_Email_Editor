import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import TextTransform from "./TextTransform";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

export const TextSettings = () => {
  return (
    <>
      <ToolbarSection
        title="Typography"
        props={["fontSize", "fontWeight", "textAlign"]}
        summary={({ fontSize, fontWeight, textAlign }) => {
          return `${fontSize || ""}, ${fontWeight}, ${textAlign}`;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Font Size"
        />
        <ToolbarItem propKey="textAlign" type="radio" label="Align">
          <ToolbarRadio value="left" label="Left" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="right" label="Right" />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" label="Weight">
          <ToolbarRadio value="400" label="Regular" />
          <ToolbarRadio value="500" label="Medium" />
          <ToolbarRadio value="700" label="Bold" />
        </ToolbarItem>
        {/* TEXT TRANSFORM */}
        <TextTransform />
      </ToolbarSection>
      <ToolbarSection title="Margin" props={["margin"]}>
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection
        title="Appearance"
        props={["color", "shadow"]}
        summary={({ color, shadow }) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                  textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                }}
                className="text-white text-right"
              >
                T
              </p>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
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
