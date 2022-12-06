import React, { useState } from "react";
import axios from "axios";
import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import cx from "classnames";
import styled from "styled-components";
import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import RedoSvg from "../../../public/icons/toolbox/redo.svg";
import UndoSvg from "../../../public/icons/toolbox/undo.svg";

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = ({ htmlExport }) => {
  const { query } = useEditor();
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  // SAVE DATA JSON SERVER
  const handleExportHtml = async () => {
    actions.setOptions((options) => (options.enabled = !enabled));

    if (enabled) {
      const htmlFromProps = htmlExport.current;
      const editorState = query.serialize();

      const itemsList = htmlFromProps.querySelectorAll(".contentEditable");
      if (itemsList.length > 0) {
        for (const item of itemsList) {
          item.setAttribute("contenteditable", "false");
        }
      }

      const htmlData = htmlFromProps.outerHTML;
      console.log(htmlData, "export");

      try {
        await axios.post("http://localhost:9000/data", {
          html: htmlData,
          object: editorState,
        });
      } catch (error) {
        console.log(error.massage);
      }
    }
  };

  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
          </div>
        )}
        <div className="flex">
          <Btn
            className={cx([
              "transition cursor-pointer",
              {
                "bg-green-400": enabled,
                "bg-primary": !enabled,
              },
            ])}
            onClick={handleExportHtml}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? "Save" : "Edit"}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
