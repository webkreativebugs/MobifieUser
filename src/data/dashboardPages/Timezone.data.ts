interface TimeZoneInfo {
  id: number;
  code: string;
  region: string;
  isoOffset: string;
  momentName: string;
}

export const timezones: TimeZoneInfo[] = [
  
  {
    id: 1,
    code: "UTC",
    region: "Coordinated Universal Time",
    isoOffset: "+00:00",
    momentName: "Etc/UTC",
  },
  {
    id: 2,
    code: "GMT",
    region: "Greenwich Mean Time",
    isoOffset: "+00:00",
    momentName: "Europe/London",
  },
  {
    id: 3,
    code: "IST",
    region: "India Standard Time",
    isoOffset: "+05:30",
    momentName: "Asia/Kolkata",
  },
  {
    id: 4,
    code: "CET",
    region: "Central European Time",
    isoOffset: "+01:00",
    momentName: "Europe/Berlin",
  },
  {
    id: 5,
    code: "EET",
    region: "Eastern European Time",
    isoOffset: "+02:00",
    momentName: "Europe/Athens",
  },
  {
    id: 6,
    code: "MSK",
    region: "Moscow Standard Time",
    isoOffset: "+03:00",
    momentName: "Europe/Moscow",
  },
  {
    id: 7,
    code: "PST",
    region: "Pacific Standard Time (US)",
    isoOffset: "−08:00",
    momentName: "America/Los_Angeles",
  },
  {
    id: 8,
    code: "PDT",
    region: "Pacific Daylight Time (US)",
    isoOffset: "−07:00",
    momentName: "America/Los_Angeles",
  },
  {
    id: 9,
    code: "CST",
    region: "Central Standard Time (US)",
    isoOffset: "−06:00",
    momentName: "America/Chicago",
  },
  {
    id: 10,
    code: "EST",
    region: "Eastern Standard Time (US)",
    isoOffset: "−05:00",
    momentName: "America/New_York",
  },
  {
    id: 11,
    code: "EDT",
    region: "Eastern Daylight Time (US)",
    isoOffset: "−04:00",
    momentName: "America/New_York",
  },
  {
    id: 12,
    code: "JST",
    region: "Japan Standard Time",
    isoOffset: "+09:00",
    momentName: "Asia/Tokyo",
  },
  {
    id: 13,
    code: "AEST",
    region: "Australian Eastern Standard Time",
    isoOffset: "+10:00",
    momentName: "Australia/Sydney",
  },
  {
    id: 14,
    code: "NZST",
    region: "New Zealand Standard Time",
    isoOffset: "+12:00",
    momentName: "Pacific/Auckland",
  },
  {
    id: 15,
    code: "NPT",
    region: "Nepal Time",
    isoOffset: "+05:45",
    momentName: "Asia/Kathmandu",
  },
];
