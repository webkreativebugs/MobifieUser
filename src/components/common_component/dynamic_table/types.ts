import React from "react";

export interface ColumnConfig {
  key: string;
  title: string;
  style?: React.CSSProperties;
  searchable?: boolean;
  filterable?: boolean;
}

export interface DynamicTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: ColumnConfig[];
  globalSearch?: boolean;
  emptyMessage?: string;
  page?: string;
  RowStyle?:object;
}
