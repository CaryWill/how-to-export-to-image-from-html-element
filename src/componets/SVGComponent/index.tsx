import React, { useRef } from "react";
import { Button, Typography } from "antd";
const demo = new URL("@/assets/demo.html", import.meta.url).href;
import normalSvg from "@/assets/normal.svg";
import abnormalSvg from "@/assets/abnormal.svg";

export const SVGComponent = (props: {}) => {
  const ref = useRef(null);
  const docs = [
    {
      label: "namespaces",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/Namespaces_crash_course",
      desc: [
        "For example, both HTML and SVG have a <title> element. How does the user agent distinguish between the two? ",
        "When passed as datauri, img rendering will go to svg rendering engine, since it will look up the mime type",
        "Each xml dialet has a determined namespace, not a random one",
        <div>
          <img
            src={abnormalSvg}
            alt="这个 svg 浏览器识别不了，因为它的 namespace"
            style={{ marginRight: 20 }}
          />
          <img src={normalSvg} />
        </div>,
      ],
    },
    {
      label: "foreignObject",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/foreignObject",
      desc: "The <foreignObject> SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.",
    },
    {
      label: "createElementNS",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS",
    },
  ];
  // TODO: 1. xml and html, what is the difference? html can also have xmlns?

  // code from html-to-image
  async function svgToDataURL(svg: SVGElement): Promise<string> {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(svg))
      .then(encodeURIComponent)
      .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }

  const download = async () => {
    if (!ref.current) return;
    const svgNode =
      ref.current.contentDocument.documentElement.querySelector("svg");
    const dataUrl = await svgToDataURL(svgNode);

    var link = document.createElement("a");
    link.download = "my-image-name.svg";
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
        Below svg content is from{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/foreignObject"
          target="_blank"
        >
          here(foreignObject)
        </a>
      </div>
      <iframe src={demo} width={200} height={200} ref={ref} />

      <div>
        <Button type="primary" onClick={download}>
          download iframe svg file
        </Button>
      </div>
    </div>
  );
};
