import { Typography } from "antd";
const demo = new URL("@/assets/demo.html", import.meta.url).href;

export const SVGComponent = (props: {}) => {
  const docs = [
    {
      label: "namespaces",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/Namespaces_crash_course",
      desc: "For example, both HTML and SVG have a <title> element. How does the user agent distinguish between the two? ",
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
      <iframe src={demo} width={100} height={200} />
    </div>
  );
};
