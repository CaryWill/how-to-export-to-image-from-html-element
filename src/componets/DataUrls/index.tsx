export const DataUrls = (props: {}) => {
  const url = "data:,Hello%2C%20World%21";
  return (
    <div>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data#datahello2c20world21"
        target="_blank"
        style={{ display: "block" }}
      >
        doc
      </a>
      <iframe src={url}></iframe>
      <a
        href="data:,Hello%2C%20World%21"
        download="hello.txt"
        style={{ display: "block" }}
      >
        Download
      </a>

      <div>so, we need a data url which MIME type is 'image' is, *svg*.</div>
    </div>
  );
};
