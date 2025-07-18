import React from 'react';

interface BadgeCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const getColor = (type: string) => {
  switch (type) {
    case 'error':
      return '#DC2626';
    case 'warning':
      return '#FBBF24';
    case 'info':
    default:
      return '#3B82F6';
  }
};

const BadgeCell: React.FC<BadgeCellProps> = ({ data, value }) => {
  return (
    <span
      style={{
        backgroundColor: getColor(data.type || "info"),
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "9999px",
        fontSize: 12,
      }}
      
    >
      {value}
    </span>
  );
};

export default BadgeCell;