import React, { useState,useEffect } from "react";
import { DynamicTableProps } from "./types";
import "./styles.css";
import EmptyState from "./EmptyState";
import renderCellByKey from "./dynamic_table_cell/RenderCellByKey";
// import { customStyle } from "../../../utils/CustomeStyling";

const DynamicTable: React.FC<DynamicTableProps> = ({
  data,
  columns,
  globalSearch = true,
  emptyMessage = "No data found.",
  page,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  useEffect(()=>{
   console.log(openIndexes);
   
  },[openIndexes])
  
  function handleChange(rowIndex:any)
  {
    if(page=="alert")
  setOpenIndexes((prev:any) =>
                  prev.includes(rowIndex)
                    ?  [...prev]
                    : [...prev, rowIndex]
                )
  }

  // const [filters, setFilters] = useState<Record<string, string>>({});

  // const filteredData = useMemo(() => {
  //   let result = [...data];

  //   // Global search
  //   if (globalSearch && searchTerm) {
  //     result = result.filter((row) =>
  //       columns.some(
  //         (col) =>
  //           col.searchable &&
  //           row[col.key]
  //             ?.toString()
  //             .toLowerCase()
  //             .includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   }

  //   // Global filters
  //   Object.entries(filters).forEach(([key, value]) => {
  //     if (value) {
  //       result = result.filter((row) =>
  //         row[key]?.toString().toLowerCase().includes(value.toLowerCase())
  //       );
  //     }
  //   });

  //   return result;
  // }, [data, columns, searchTerm, filters]);

  return (
    <div className="dt-container same-bg-color">
      {(globalSearch || columns.some((col) => col.filterable)) && (
        <div className="dt-search-bar">
          {globalSearch && (
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginRight: 16 }}
            />
          )}
          {/* {columns
            .filter((col) => col.filterable)
            .map((col) => (
              <input
                key={col.key}
                type="text"
                placeholder={`Filter ${col.title}`}
                value={filters[col.key] || ""}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, [col.key]: e.target.value }))
                }
                style={{
                  marginRight: 8,
                  padding: "6px",
                  fontSize: 13,
                  border: "1px solid #ccc",
                  borderRadius: 4,
                }}
              />
            ))} */}
        </div>
      )}

      <table className="dt-table" >
        <thead>
          <tr  >
            {columns.map((col) => (
              <th key={col.key} className=" text-on-primary">{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.length === 0 ? (
            <tr className="bg-primary">
              <td colSpan={columns.length}>
                <EmptyState message={emptyMessage} />
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} className={`${openIndexes.includes(rowIndex)?"":"bg-primary"}`} onClick={()=>handleChange(rowIndex)} >
                {columns.map((col) => (
                  <td key={col.key} style={col.style} >
                    {renderCellByKey(col.key, row[col.key], row, page, col.style)}
                    {/* <div>{JSON.stringify(row)}</div> */}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
