import React from 'react';

export interface DateCellProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // data: any;
}

const DateCell: React.FC<DateCellProps> = ({  value }) => {
  const date = new Date(value);
  return <span>{date.toLocaleString()}</span>;
};

export default DateCell;