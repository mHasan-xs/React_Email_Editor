import React, { useState } from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
import { ColumnFour } from "./ColumnFour";
import { ColumnFive } from "./ColumnFive";
import { ColumnSix } from "./ColumnSix";
import { Element, useEditor, useNode } from "@craftjs/core";
import { ToolbarSection, ToolbarItem } from "components/editor";
import { imageValidation } from "helpers/Validation";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { toast } from "react-toastify";
import BorderDrop from "./BorderDrop";

const intialColumn = [
  {
    id: 1,
    column: ColumnOne,
    img: " /image/ColumnOne.jpg",
  },
  {
    id: 2,
    column: ColumnTwo,
    img: "/image/ColumnTwo.jpg",
  },
  {
    id: 3,
    column: ColumnThree,
    img: "/image/ColumnThree.jpg",
  },
  {
    id: 4,
    column: ColumnFour,
    img: "/image/ColumnFour.jpg",
  },
  {
    id: 5,
    column: ColumnFive,
    img: "/image/ColumnFive.jpg",
  },
  {
    id: 6,
    column: ColumnSix,
    img: "/image/ColumnSix.jpg",
  },
];

export const ColumnSettings = (props) => {
  const {
    actions: { setProp },
  } = useNode();

  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // FOR BACKGROUND IMAGE UPLOAD
  const handleChange = (e) => {
    const image = e.target.files[0];

    if (!imageValidation(image)) {
      toast.error("Only jpg, jpeg, gif, png accepted");
    } else {
      const newImage = URL.createObjectURL(image);
      setProp((props) => (props.picture = newImage));
    }
  };

  // FOR COLUMN HANDLE
  const handleColumn = (item) => {
    setProp((props) => (props.columnContainer = item.column));
    setProp((props) => (props.columnID = item.id));
  };

  return (
    <>
      <ToolbarSection title="Columns">
        <div>
          {intialColumn.map((item) => (
            <div
              onClick={() => handleColumn(item)}
              key={item.id}
              ref={(ref) =>
                create(
                  ref,
                  <Element
                    canvas
                    is={item.column}
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    color={{ r: 0, g: 0, b: 0, a: 0 }}
                    height="200px"
                    width="300px"
                  ></Element>
                )
              }
            >
              <img
                src={item.img}
                style={{ width: "100%", margin: "10px 0px", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </ToolbarSection>
      <ToolbarSection title="Column_Properties">
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
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
        <ToolbarSection title="Border">
          <ToolbarItem full={true} propKey="color" type="color" label="Color" />
          <ToolbarItem
            full={true}
            propKey="radius"
            type="slider"
            label="Width"
          />
          <BorderDrop />
        </ToolbarSection>
      </ToolbarSection>
      <ToolbarSection title="Row_Properties">
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <div
          style={{
            fontSize: "13px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h5>Background Image</h5>

          <input type="file" id="actual-btn" hidden onChange={handleChange} />
          <label
            for="actual-btn"
            style={{
              background: "skyblue",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Upload Image
          </label>
        </div>
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="flexDirection"
          type="radio"
          label="Flex Direction"
        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="fillSpace" type="radio" label="Fill space">
          <ToolbarRadio value="yes" label="Yes" />
          <ToolbarRadio value="no" label="No" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
      </ToolbarSection>
    </>
  );
};
