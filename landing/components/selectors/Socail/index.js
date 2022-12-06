import React from "react";
import { SocailSetting } from "./SocailSetting";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNode } from "@craftjs/core";

// Rendering value after drop from sidemenu
const initialValues = [
  {
    id: 0,
    icon: BsFacebook,
    text: "Facebook",
    url: "",
  },
  {
    id: 1,
    icon: BsTwitter,
    text: "Twitter",
    url: "",
  },
];

export const SocailIcon = (props) => {
  // Take value from Redux => Social Card Slice
  const { value } = useSelector((state) => state.socailCard);

  // For Select Container
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    fontSize,
    margin,
    fontWeight,
    color,
    textAlign,
    flexDirection,
    alignItems,
    justifyContent,
    width,
  } = props;

  // DECIDE WHAT TO RENDER
  const renderIcon = value.length > 0 ? value : initialValues;

  return (
    <div
      ref={connect}
      style={{
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent,
        width,
      }}
    >
      {/* Map Icon, Which Was Created From Sidebar  */}
      {renderIcon.length > 0
        ? renderIcon.map((item) => (
            <div className=" m-2" key={item.id}>
              <a href={item.url}>
                <item.icon
                  style={{
                    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                    color: `rgba(${Object.values(color)})`,
                    fontSize: `${fontSize}px`,
                    fontWeight,
                    textAlign: `${textAlign}`,
                  }}
                />
              </a>
            </div>
          ))
        : null}
    </div>
  );
};

SocailIcon.craft = {
  displayName: "Social Image",
  props: {
    fontSize: "15",
    textAlign: "left",
    fontWeight: "500",
    width: "100%",
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 10, 0, 10],
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  related: {
    toolbar: () => {
      return <SocailSetting />;
    },
  },
};
