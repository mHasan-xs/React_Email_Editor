import React from "react";
import ContentEditable from "react-contenteditable";
import { useNode, useEditor } from "@craftjs/core";
import { TextSettings } from "./TextSettings";

export const Text = (props) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const {
    fontSize,
    textAlign,
    fontWeight,
    color,
    shadow,
    text,
    Margin,
    Padding,
    tranformText,
  } = props;

  return (
    <ContentEditable
      className="contentEditable"
      innerRef={connect}
      html={text}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }}
      tagName="p"
      style={{
        width: "100%",
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
        padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
        color: `rgba(${Object.values(color)})`,
        fontSize: `${fontSize}px`,
        textShadow: `2px 2px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        fontWeight,
        textAlign,
        textTransform: `${tranformText}`,
      }}
    />
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    fontSize: "15",
    textAlign: "center",
    fontWeight: "500",
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadow: 0,
    text: "Text",
  },
  related: {
    toolbar: () => {
      return <TextSettings />;
    },
  },
};
