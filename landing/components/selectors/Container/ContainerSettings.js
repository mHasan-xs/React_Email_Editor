import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { AlignItems } from "../../editor/Toolbar/Alignment/AlignItems";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineAlignCenter } from "react-icons/ai";

export const ContainerSettings = () => {
  return (
    <>
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
      <ToolbarSection
        title="Colors"
        props={["background", "color"]}
        summary={({ background, color }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
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
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        // summary={({ margin }) => {
        //   return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
        //     margin[3] || 0
        //   }px`;
        // }}
      >
        {/* <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" /> */}
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection
        title="Padding"
        props={["padding"]}
        // summary={({ padding }) => {
        //   return `${padding[0] || 0}px ${padding[1] || 0}px ${
        //     padding[2] || 0
        //   }px ${padding[3] || 0}px`;
        // }}
      >
        {/* <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" /> */}
        <SpacingItem title="Padding" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={["radius", "shadow"]}>
        <ToolbarItem
          full={true}
          propKey="radius"
          type="slider"
          label="Radius"
        />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="alignItems"
          type="radio"
          label="Align Items"
          // full={true}
        >
          <AlignItems
            options={[
              {
                id: "start",
                name: "alignItem",
                value: "flex-start",
                Icon: <AiOutlineAlignLeft />,
              },
              {
                id: "center",
                name: "alignItem",
                value: "center",
                Icon: <AiOutlineAlignCenter />,
              },
              {
                id: "end",
                name: "alignItem",
                value: "flex-end",
                Icon: <AiOutlineAlignRight />,
              },
            ]}
          />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
          // full={true}
        >
          <AlignItems
            options={[
              {
                id: "just_start",
                name: "justifyContent",
                value: "flex-start",
                Icon: <AiOutlineAlignLeft />,
              },
              {
                id: "just_center",
                name: "justifyContent",
                value: "center",
                Icon: <AiOutlineAlignCenter />,
              },
              {
                id: "just_end",
                name: "justifyContent",
                value: "flex-end",
                Icon: <AiOutlineAlignRight />,
              },
            ]}
          />
        </ToolbarItem>
      </ToolbarSection>
    </>
  );
};
