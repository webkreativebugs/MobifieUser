import React from "react";

interface TextCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const TextCell: React.FC<TextCellProps> = ({ data, value }) => {
  return (
    <span
      onClick={() => {
        alert(value);
      }}
      style={{ color: "#1D4ED8", cursor: "pointer" }}
    >
      {value}
    </span>
  );
};

export default TextCell;
