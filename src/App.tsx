import { useState } from "react";
import { Tabs } from "antd";

import { DataUrls } from "./componets/DataUrls";
import "./App.css";
import { SVGComponent } from "./componets/SVGComponent";
import { CanvasComponent } from "./componets/CanvasComponent";

function App() {
  // since chrome does not offer api to create image out of html elements directly
  // we need to figure out how to workaround the image creation process out of html elements
  return (
    <div className="app">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "What is data URLs",
            key: "1",
            children: <DataUrls />,
          },
          {
            label: "How to get data URLs of image type? **SVG**",
            key: "2",
            children: <SVGComponent />,
          },
          {
            label: "Export to other image format",
            key: "3",
            children: <CanvasComponent />,
          },
        ]}
      />
    </div>
  );
}

export default App;
