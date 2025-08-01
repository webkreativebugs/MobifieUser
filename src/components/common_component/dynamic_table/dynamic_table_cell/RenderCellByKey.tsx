import BadgeCell from "./cell/BadgeCell";
import DateCell from "./cell/DateCell";
import ImageCell from "./cell/ImageCell";
import TextCell from "./cell/TextCell";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCellByKey = (key: string, value: string, data: any, page?: string, style?: React.CSSProperties) => {
  if (key === "icon") {
    return <ImageCell data={data} value={value} page={page} style={style} />;
  }

  if (key === "type") {
    return <BadgeCell data={data} value={value}  />;
  }
  if (key === "timestamp") {
    return <DateCell data={data} value={value} />;
  }

  if (key === "project_id") {
    return <TextCell data={data} value={value} />;
  }

  if(key==="created_at")
  {
  const date = new Date(value);
  const readable = date.toLocaleString();
  // console.log(value);
  return  <TextCell data={data} value={readable}/>
  }

  return <TextCell data={data} value={value} />;
};

export default renderCellByKey;
