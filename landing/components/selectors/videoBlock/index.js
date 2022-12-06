import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { VideoSettings } from "./videoSettings";
import { VscTriangleRight } from "react-icons/vsc";

export const VideoBlock = (props) => {
  const { picture, actions } = props;
  const [isHover, setIsHover] = useState(false);

  // FOR HOVER => START
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  // FOR HOVER => END

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  // let previousImage = "/image/Image.jpg";
  let previousImage =
    "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg";

  const { margin, width, minHeight } = props;

  return (
    <table
      ref={connect}
      style={{
        width: `${width == "100%" ? width : `${width}%`}`,
        minHeight,
        backgroundSize: "cover",
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        backgroundImage: `url(${picture ? picture : previousImage})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderCollapse: "collapse",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <tr>
        <td>
          <a href={actions}>
            <div
              style={{
                color: "white",
                fontSize: "35px",
                width: "60px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12%",
                // backgroundColor: isHover ? "red" : " rgba(0, 0, 0, 0.5)",
                backgroundColor: " rgba(0, 0, 0, 0.5)",
              }}
            >
              <VscTriangleRight />
            </div>
          </a>
        </td>
      </tr>
    </table>
  );
};

const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  shadow: 0,
  radius: 0,
  width: "100%",
  minHeight: "200px",
  backgroundSize: "cover",
};

VideoBlock.craft = {
  displayName: "Video",
  props: defaultProps,
  related: {
    toolbar: VideoSettings,
  },
};