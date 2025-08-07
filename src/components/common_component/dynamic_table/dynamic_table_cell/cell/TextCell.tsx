import React from "react";

interface TextCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const TextCell: React.FC<TextCellProps> = ({ data, value }) => {
  console.log(data);
  
  return (
    <span className=""
      onClick={() => {
        alert(value);
      }}
      style={{ cursor: "pointer"  }}
    >
     <p className="" > {value}</p>
    </span>
  );
};

export default TextCell;
