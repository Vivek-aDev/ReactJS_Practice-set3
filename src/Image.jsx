export const Image = ({ src, height, width }) => {
  return (
    <div>
      <h2>Image</h2>
      <img src={src} alt="sample" height={height} width={width} />
    </div>
  );
};
