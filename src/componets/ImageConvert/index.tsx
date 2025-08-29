import { Typography } from "antd";

export const ImageConvert = (props: {}) => {
  const docs = [
    {
      label: "namespaces",
      value:
        "https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/Namespaces_crash_course",
      desc: "For example, both HTML and SVG have a <title> element. How does the user agent distinguish between the two? ",
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
    </div>
  );
};
