import React from "react";
import DateAndTimePicker from "./DateAndTimePicker";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { capitalize } from "../../../utils/text";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

export const TimerSettings = ({ handleTime }) => {
  return (
    <>
      <ToolbarSection title="Time">
        <DateAndTimePicker handleTime={handleTime} />
      </ToolbarSection>
      <ToolbarSection title="Container">
        <ToolbarItem
          full={true}
          propKey="width"
          type="slider"
          label="Container width"
        />
      </ToolbarSection>
      <ToolbarSection title="Colors" props={["background", "color"]}>
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Typography"
        props={["fontSize", "fontWeight", "textAlign"]}
        summary={({ fontSize, fontWeight, textAlign }) => {
          return `
           ${fontSize || ""},
           ${fontWeight},
           ${capitalize(textAlign || "")}`;
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
        <ToolbarSection title="Margin" props={["margin"]}>
          <SpacingItem title="Margin" />
        </ToolbarSection>
        <ToolbarSection title="Padding" props={["padding"]}>
          <SpacingItem title="Padding" />
        </ToolbarSection>
      </ToolbarSection>
    </>
  );
};
