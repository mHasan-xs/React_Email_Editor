import React from "react";
import ImageSettings from "./ImageSettings";
import { useNode } from "@craftjs/core";

// let previousImage = "/image/defualt.jpg";
let previousImage =
  "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg";

export const CustomeImage = (props, e) => {
  const { picture } = props;

  const { connectors: { connect } } = useNode((node) => ({
    selected: node.events.selected,
  }));

  props = {
    ...defaultProps,
    ...props,
  };

  const { flexDirection, alignItems, justifyContent, color, Padding, Margin, shadow, children, width, minHeight, backgroundSize } = props;

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        width,
        minHeight: "200px",
        maxHeight: "auto",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        justifyContent,
        flexDirection,
        display: "flex",
        alignItems,
        backgroundImage: `url(${picture ? picture : previousImage})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
      }}
    >
      <tr style={{ width: "100%" }}>
        <td
          style={{
            display: "flex",
            flexDirection,
            alignItems,
            padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
          }}
        >
          {children}
        </td>
      </tr>
    </table>
  );
};

// Default props for this component
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
  minHeight: "300px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

CustomeImage.craft = {
  displayName: "Image Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: () => {
      return <ImageSettings />;
    },
  },
};
