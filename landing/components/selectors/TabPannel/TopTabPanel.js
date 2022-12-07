import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Toolbox } from "../../editor/Viewport/Toolbox";
import { TbGridDots } from "react-icons/tb";
import { useEditor, useNode } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import { GrUndo, GrRedo } from "react-icons/gr";
import { Search } from "../../editor/Toolbar/Search/Search";
import { TabBody } from "./TabBody";
import { Sidebar } from "../../editor/Viewport/Sidebar";

// =========== TAB ELEMENTS ========
const tabElement = [
  {
    name: "Element",
    value: "1",
  },
  {
    name: "Template",
    value: "2",
  },
  {
    name: "Body",
    value: "3",
  },
];

export const TopTabPanel = (props) => {
  const [value, setValue] = useState("1");
  const [showStyleBar, setShowStyleBar] = useState(false);

  const {
    enabled,
    actions,
    connectors: { create, connect },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   ========= HANDLE STYLE BAR ========
  const handleStyleBar = () => {
    setShowStyleBar(!showStyleBar);
  };

  console.log(props, "connect");

  return (
    <Box
      style={{
        position: "relative",
        display: enabled ? "block" : "none",
        width: "300px",
      }}
    >
      <div style={sidebarHeader}>
        <div>
          <p style={{ fontSize: "14px" }}>Widgets</p>
        </div>
        <div>
          <span style={{ cursor: "pointer" }} onClick={handleStyleBar}>
            <TbGridDots />
          </span>
        </div>
      </div>
      {showStyleBar == true ? (
        <Sidebar />
      ) : (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} style={{ background: "white" }}>
              {tabElement.map((item) => (
                <Tab
                  key={item.value}
                  label={<p style={{ fontSize: "10px" }}>{item.name}</p>}
                  value={item.value}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value="1" style={tabPanelStyle}>
            <Toolbox />
          </TabPanel>
          <TabPanel value="2" style={tabPanelStyle}>
            <Search />
          </TabPanel>
          <TabPanel value="3" style={tabPanelStyle}>
            <TabBody />
          </TabPanel>
        </TabContext>
      )}
      <div style={sidebarFooter}>
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <button onClick={() => actions.history.undo()} style={RedoUndo}>
                <GrUndo />
              </button>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <button onClick={() => actions.history.redo()} style={RedoUndo}>
                <GrRedo />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </Box>
  );
};

const RedoUndo = {
  color: "white",
  cursor: "not-allowed",
  fontSize: "20px",
  margin: "0px 4px",
};

const sidebarHeader = {
  background: "#4896ED",
  padding: "10px 15px",
  color: "white",
  fontSize: "20px",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
};

const sidebarFooter = {
  background: "#495157",
  position: "absolute",
  bottom: "0",
  width: "100%",
  padding: "10px 10px",
};

const tabPanelStyle = {
  background: "white",
  height: "100%",
  overflowY: "scroll",
};
