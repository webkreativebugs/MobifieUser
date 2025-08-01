import React from 'react';

interface ImageCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // data: any;
  page?: string;
  style?: React.CSSProperties;
}


const ImageCell: React.FC<ImageCellProps> = ({  value, page, style }) => {
  return (
    <>
      <img
        src={value}
        alt={page}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          ...style,
        }}
      />
      <div>{page}</div>
    </>
  );
};

export default ImageCell;