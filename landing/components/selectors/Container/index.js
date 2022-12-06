import React from "react";
import { ContainerSettings } from "./ContainerSettings";
import { Resizer } from "../Resizer";

export const Container = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    children,
    selectedAlign,
    selectedJustify,
  } = props;

  return (
    <>
      <table
        style={{
          borderCollapse: "collapse",
          borderSpacing: "0px",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td>
              <Resizer
                propKey={{ width: "width", height: "height" }}
                style={{
                  justifyContent: selectedJustify,
                  flexDirection,
                  alignItems: selectedAlign,
                  background: `rgba(${Object.values(background)})`,
                  color: `rgba(${Object.values(color)})`,
                  padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                  margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                  boxShadow:
                    shadow === 0
                      ? "none"
                      : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                  borderRadius: `${radius}px`,
                  flex: fillSpace === "yes" ? 1 : "unset",
                  display: "flex",
                }}
              >
                {children}
              </Resizer>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  height: "auto",
};

Container.craft = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
