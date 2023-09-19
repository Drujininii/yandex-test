const style = {
  height: 150,
  borderRadius: "50%",
};

export default function Photo({ src, alt }) {
  return <img src={src} alt={alt} style={style} />;
}
