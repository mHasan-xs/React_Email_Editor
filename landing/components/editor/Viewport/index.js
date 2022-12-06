import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useEditor } from "@craftjs/core";
import cx from "classnames";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import TabPannel from "../../selectors/TabPannel/TabPanel";

export const Viewport = ({ children }) => {
  const htmlref = useRef(null);
  const [setHtml, setShowHtml] = useState("");

  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  //GET DATA FROM SERVER
  useEffect(() => {
    const fatchData = async () => {
      await axios.get(`http://localhost:9000/data`).then((res) => {
        const saveData = res.data;
        setShowHtml(saveData.html);
      });
    };
    fatchData();
  }, []);

  return (
    <div className="viewport">
      <div
        className={cx(["flex h-full overflow-hidden flex-row w-full fixed"])}
      >
        <div className="page-container flex flex-1 h-full flex-col">
          <Header htmlExport={htmlref} />

          <div
            style={{
              display: "flex",
              justifyContent: enabled ? "flex-start" : "center",
              gap: "0 10px",
            }}
            className={cx([
              "craftjs-renderer   h-full w-full transition  overflow-auto",
              {
                "bg-renderer-gray": enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <TabPannel />
            <div>
              <table
                style={{
                  fontFamily: "monospace",
                  position: "static",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                ref={htmlref}
              >
                {children}
              </table>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
