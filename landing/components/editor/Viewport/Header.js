import React from "react";
import { axiosInstance } from "../../../helpers/Axios"
import { useEditor } from "@craftjs/core";
import cx from "classnames";
import styled from "styled-components";
import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import { Preview } from "./Preview/Preview"

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


export const Header = ({ htmlExport }) => {
  const { query } = useEditor();
  const { enabled, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
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
        // await axiosInstance.post("emailkit/wp-json/Emailkit/v1/template-data/", { id: "", html: htmlData, object: editorState })
        await axiosInstance.post("data", { id: "", html: htmlData, object: editorState });
      } catch (error) {
        console.log(error.massage);
      }
    }
  };

  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
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
          {enabled && <Preview htmlData={htmlExport} />}

        </div>
      </div>
    </HeaderDiv>
  );
};
