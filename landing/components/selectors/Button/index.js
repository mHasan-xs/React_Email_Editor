import React from "react";
import { useEditor, useNode } from "@craftjs/core";
import { ButtonSettings } from "./ButtonSettings";
import { Text } from "../Text";

export const Button = (props) => {
  const { action } = props;

  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const {
    text,
    color,
    buttonStyle,
    textComponent,
    margin,
    width,
    padding,
    borderColor,
    justifyContent,
    textAlign,
    fontSize,
    fontWeight,
    ...otherProps
  } = props;

  return (
    <table
      style={{
        borderCollapse: "collapse",
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        width,
      }}
    >
      <tbody
        style={{
          border: " 2px solid transparent",
          cursor: "pointer",
          background: ` ${
            buttonStyle === "full"
              ? `rgba(${Object.values(props.background)})`
              : "transparent"
          }`,
          boxShadow: `${
            buttonStyle == "outline" ? `0px 0px 2px 0px gray` : "transparent"
          }`,
        }}
      >
        <tr>
          <td
            style={{
              padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
            }}
          >
            <a
              href={action ? action : "#"}
              style={{
                textDecoration: "none",
                fontSize: `${fontSize}px`,
              }}
            >
              <Text
                {...textComponent}
                text={text}
                color={color}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    width: "100%",
    justifyContent: "center",
    background: { r: 0, g: 0, b: 0, a: 1 },
    color: { r: 255, g: 192, b: 203, a: 1 },
    buttonStyle: "full",
    text: "Button",
    margin: ["5", "0", "5", "0"],
    padding: ["5", "0", "5", "0"],
    textAlign: "center",
    fontSize: "15",
    fontWeight: "500",
    borderColor: { r: 0, g: 0, b: 0, a: 1 },
    textComponent: {
      ...Text.craft.props,
      textAlign: "center",
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
