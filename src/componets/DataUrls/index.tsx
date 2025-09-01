import { useState } from "react";
import { Button, message } from "antd";
import { selectAndEncodeImage, binaryToHex } from "./utils";
import "./index.less";

export const DataUrls = (props: {}) => {
  const url = "data:,Hello%2C%20World%21";
  const [current, setCurrent] = useState("");
  const [binaryText, setBinaryText] = useState("");
  return (
    <div>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data#datatextplainbase64sgvsbg8sifdvcmxkiq"
        target="_blank"
        style={{ display: "block" }}
      >
        data: URLs
      </a>
      <iframe src={url}></iframe>
      <a
        href="data:,Hello%2C%20World%21"
        download="hello.txt"
        style={{ display: "block" }}
      >
        Download
      </a>

      <div>let's try download a base64 encoded image</div>

      <div>
        <Button
          size="small"
          type="primary"
          onClick={async () => {
            const dataUrl = await selectAndEncodeImage();
            console.log("---🪵🪵🪵--- dataUrl", dataUrl);
            setCurrent(dataUrl);
          }}
        >
          encode image in base64 dataUrl
        </Button>

        <Button
          style={{ margin: "0 10px" }}
          size="small"
          type="primary"
          onClick={() => {
            var link = document.createElement("a");
            link.download = "my-jpeg.jpeg";
            link.href = current;
            link.click();
          }}
        >
          download base64 dataUrl
        </Button>
      </div>

      {current && <div className="base64Text">{current}</div>}

      <Button
        style={{ margin: "10px 0" }}
        type="primary"
        size="small"
        onClick={() => {
          if (!current) return;
          const base64String = current.split("base64,")[1];
          setBinaryText(binaryToHex(window.atob(base64String)));
        }}
      >
        Convert base64 back to binary of image data
      </Button>

      {binaryText && <div className="binaryText">{binaryText}</div>}

      {/* <div>What happened?</div> */}

      <div>so, we need a data url which MIME type is 'image' is, *svg*.</div>
    </div>
  );
};
