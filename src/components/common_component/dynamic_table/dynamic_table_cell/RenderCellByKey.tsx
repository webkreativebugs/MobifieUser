import BadgeCell from "./cell/BadgeCell";
import DateCell from "./cell/DateCell";
import ImageCell from "./cell/ImageCell";
import TextCell from "./cell/TextCell";
import {AccessManagerEnums} from "../../../../../enum/AccessManager.enum"
import { changeTimezone } from "../../../../utils/dashboard/TimezoneConverter";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCellByKey = (key: string, value: string, data: any, page?: string, style?: React.CSSProperties) => {
//   function timeAgo(value:any) {
//   const now = new Date();
//   const date = new Date(value);

//   const diffMs = now.getTime() - date.getTime(); // difference in milliseconds
//   const diffSec = Math.floor(diffMs / 1000);
//   const diffMin = Math.floor(diffSec / 60);
//   const diffHrs = Math.floor(diffMin / 60);
//   const diffDays = Math.floor(diffHrs / 24);

//   if (diffDays > 1) {
//     return `${diffDays} days ago`;
//   } else if (diffDays === 1) {
//     return `1 day ago`;
//   } else if (diffHrs > 1) {
//     return `${diffHrs} hours ago`;
//   } else if (diffHrs === 1) {
//     return `1 hour ago`;
//   } else if (diffMin > 1) {
//     return `${diffMin} minutes ago`;
//   } else if (diffMin === 1) {
//     return `1 minute ago`;
//   } else {
//     return `just now`;
//   }
// }

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
 if (key === "message") {
    return <TextCell data={data} value={"SMS text messages are limited to 160 characters, but on most GSM networks it is possible to send longer text messages. These messages go out as multiple physical SMS messages that are logically reassembled into a single long text message by the recipient handset."}/>
  }
  if(key==="created_at")
  {
  // console.log(value);
  return  <TextCell data={changeTimezone(value)} value={changeTimezone(value)}/>
  }
  if(key==="role"){
    const roleValue = AccessManagerEnums[value as keyof typeof AccessManagerEnums] || value;
    return <TextCell data={data} value={roleValue} />;
  }
  return <TextCell data={data} value={value} />;
};

export default renderCellByKey;
