import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const ButtonSettings = () => {
  return (
    <>
      <ToolbarSection title="Colors" props={["background", "color"]}>
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="outline" label="Outline" />
        </ToolbarItem>
      </ToolbarSection>

      <ToolbarSection title="Dimensions" props={["radius", "width"]}>
        <ToolbarItem full={true} propKey="width" type="slider" label="width" />
      </ToolbarSection>
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
        <ToolbarSection
          title="Padding"
          props={["padding"]}
          summary={({ padding }) => {
            return `${padding[0] || 0}px ${padding[1] || 0}px ${
              padding[2] || 0
            }px ${padding[3] || 0}px`;
          }}
        >
          <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
          <ToolbarItem
            propKey="padding"
            index={1}
            type="slider"
            label="Right"
          />
          <ToolbarItem
            propKey="padding"
            index={2}
            type="slider"
            label="Bottom"
          />
          <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
        </ToolbarSection>
      </ToolbarSection>
      <ToolbarSection title="Actions">
        <ToolbarItem propKey="action" type="setLink" label="Set Action" />
      </ToolbarSection>
    </>
  );
};
