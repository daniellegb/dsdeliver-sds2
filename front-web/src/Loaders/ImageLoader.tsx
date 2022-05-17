import ContentLoader from "react-content-loader";

const ImageLoader = () => (
  <ContentLoader
    speed={2}
    width={1440}
    height={440}
    viewBox="0 0 1100 440"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="70" y="20" rx="5" ry="5" width="235" height="400" />
    <rect x="325" y="20" rx="5" ry="5" width="235" height="400" />
    <rect x="580" y="20" rx="5" ry="5" width="235" height="400" />
    <rect x="835" y="20" rx="5" ry="5" width="235" height="400" />
  </ContentLoader>
);

export default ImageLoader;
