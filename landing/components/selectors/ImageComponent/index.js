import React from "react";
import { useNode } from "@craftjs/core";
import ImageComponentSetting from "./ImageComponentSetting";

export const ImageComponent = (props) => {
  // let previousImage = "/image/defualt.jpg";
  let previousImage =
    "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg";

  const { image, margin, shadow, width, height } = props;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td>
            <img
              src={image || previousImage}
              style={{
                width,
                height,
                margin: "0 auto",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  shadow === 0
                    ? "none"
                    : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
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
  height: "300px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

ImageComponent.craft = {
  displayName: "Image component",
  props: defaultProps,
  related: {
    toolbar: () => {
      return <ImageComponentSetting />;
    },
  },
};
