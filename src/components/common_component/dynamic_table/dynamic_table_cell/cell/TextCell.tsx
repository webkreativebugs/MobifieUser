import React from "react";

interface TextCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const TextCell: React.FC<TextCellProps> = ({ data, value }) => {
  // console.log(data);
  
  return (
    <p className="max-w-[800px] "
      onClick={() => {
        alert(value);
      }}
      style={{ cursor: "pointer"  }}
    >
    {value}
    </p>
  );
};

export default TextCell;
