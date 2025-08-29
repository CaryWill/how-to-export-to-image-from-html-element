import React, { useRef } from "react";
import { Button, Typography } from "antd";
const demo = new URL("@/assets/demo.html", import.meta.url).href;

export const CanvasComponent = (props: {}) => {
  const ref = useRef(null);

  const docs = [
    {
      label: "canvas",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL",
    },
  ];

  async function svgToDataURL(svg: SVGElement): Promise<string> {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(svg))
      .then(encodeURIComponent)
      .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }

  function createImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        img.decode().then(() => {
          requestAnimationFrame(() => resolve(img));
        });
      };
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = url;
    });
  }

  const download = async () => {
    if (!ref.current) return;
    const svgNode =
      ref.current.contentDocument.documentElement.querySelector("svg");

    const svgDataUrl = await svgToDataURL(svgNode);
    const img = await createImage(svgDataUrl);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.drawImage(img, 0, 0, 200, 200);

    const dataUrl = canvas.toDataURL(); // default image/png

    var link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div>
      {docs.map((doc, index) => (
        <div>
          <a href={doc.value} target="_blank" style={{ display: "block" }}>
            {index}.{doc.label}
          </a>
          {doc.desc && (
            <Typography.Text type="secondary">{doc.desc}</Typography.Text>
          )}
        </div>
      ))}
      <div>
        Since there are not api on svg that can convert svg to other types of
        image. So, we need to find a way that can output image/png, image/xxx
        dataUrl, the solution is **Canvas**.
      </div>
      <iframe src={demo} width={200} height={200} ref={ref} />
      <div>
        <Button type="primary" onClick={download}>
          download iframe svg file to png image
        </Button>
      </div>
    </div>
  );
};
