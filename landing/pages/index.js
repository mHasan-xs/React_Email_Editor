import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { VideoBlock } from "../components/selectors/videoBlock";
import { SocialIcon } from "../components/selectors/Socials";
import { CustomeImage } from "../components/selectors/ImageBlock";
import { Divider } from "components/selectors/Divider";
import { CountDownTimer } from "components/selectors/Timer";
import { Column } from "components/selectors/column";
import { ColumnOne } from "components/selectors/column/ColumnOne";
import { ColumnTwo } from "components/selectors/column/ColumnTwo";
import { ColumnThree } from "components/selectors/column/ColumnThree";
import { ColumnFour } from "components/selectors/column/ColumnFour";
import { ColumnFive } from "components/selectors/column/ColumnFive";
import { ColumnSix } from "components/selectors/column/ColumnSix";
import { ImageComponent } from "components/selectors/ImageComponent";
import { TabBody } from "../components/selectors/TabPannel/TabBody";
import { TopTabPanel } from "../components/selectors/TabPannel/TopTabPanel";
import TabPannel from "../components/selectors/TabPannel/TabPanel";
import { List } from "components/selectors/List";
import { CanvasContainer } from "components/selectors/CanvasContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const App = () => {
  const [showDraft, setShowDraft] = useState("");
  const [show, setShow] = useState(false);

  // Set Asynchronous function for Render Draft UI
  const isTrue = () => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  //GET DRAFT DATA FROM SERVER
  useEffect(() => {
    const fatchData = async () => {
      await axios.get(`http://localhost:9000/data`).then((res) => {
        const draft = res.data;
        setShowDraft(draft.object);
      });
    };
    fatchData();
    isTrue();
  }, [showDraft]);

  return (
    <ThemeProvider theme={theme}>
      <div className=" h-screen">
        <Editor
          resolver={{
            Container,
            Text,
            Button,

            CustomeImage,
            Divider,
            CountDownTimer,
            SocialIcon,
            VideoBlock,
            Column,
            ImageComponent,
            CanvasContainer,
            List,
            ColumnOne,
            ColumnTwo,
            ColumnThree,
            ColumnFour,
            ColumnFive,
            ColumnSix,
            TabBody,
            TopTabPanel,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          {/* Toast for show error and success alert */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Viewport>
            {show && (
              <Frame data={showDraft}>
                <Element
                  canvas
                  is={CanvasContainer}
                  width="600px"
                  height="auto"
                  background={{ r: 255, g: 255, b: 255, a: 1 }}
                  color={{ r: 0, g: 0, b: 0, a: 1 }}
                  padding={["20", "20", "20", "20"]}
                  custom={{ displayName: "App" }}
                ></Element>
              </Frame>
            )}
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
};

export default App;
