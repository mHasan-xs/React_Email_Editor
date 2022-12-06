import React from "react";
import SocailActionCard from "./SocailActionCard";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { createCard } from "rtk/features/socailCard/socialCardSlice";
import { removeIcon } from "rtk/features/socailIcon/socailIconSlice";
import { useDispatch, useSelector } from "react-redux";

export const SocailSetting = () => {
  const { value } = useSelector((state) => state.socailCard);
  const { icons } = useSelector((state) => state.socailIcon);
  const dispatch = useDispatch();

  const handleIcon = (item) => {
    dispatch(createCard(item));
    dispatch(removeIcon(item));
  };

  return (
    <>
      <ToolbarSection title="Size" props={["fontSize"]}>
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Icon Size"
        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem propKey="flexDirection" type="radio" label="">
          <ToolbarRadio value="row" label="Row" />
        </ToolbarItem>
        <ToolbarItem propKey="flexDirection" type="radio" label=" ">
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
          <ToolbarRadio value="space-between" label="Between" />
          <ToolbarRadio value="space-evenly" label="Evenly" />
          <ToolbarRadio value="space-around" label="Around" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
          <ToolbarRadio value="space-between" label="Between" />
          <ToolbarRadio value="space-evenly" label="Evenly" />
          <ToolbarRadio value="space-around" label="Around" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="Appearance"
        props={["color"]}
        summary={({ color }) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
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
      </ToolbarSection>

      <ToolbarSection title="Icons">
        {value.length > 0 && <SocailActionCard />}

        {icons.map((item, index) => (
          <item.icon
            style={{ margin: "2px 5px", cursor: "pointer", display: "flex" }}
            id={item.id}
            key={item.id}
            onClick={() => handleIcon(item)}
          />
        ))}
      </ToolbarSection>
    </>
  );
};
