import moment from "moment-timezone"
import { timezones } from "../../data/dashboardPages/Timezone.data"
const newTimeZone = "UTC"


const changeTimezone = (isoString: string) => {
  const tz = timezones.find((t) => t.code === newTimeZone)?.momentName || "Etc/UTC";
  return moment(isoString).tz(tz).format("DD/MM/YYYY HH:mm:ss");
};

// const m = moment.parseZone(currentTime);
// let date =""

// if(m.isUTC()){
//    const newDate = dateFormatter(currentTime)
//    console.log(newDate);
   
//    date = moment(newDate).format("DD/MM/YYYY");
//    console.log(date);
   
// }



export {changeTimezone}