import { TruncateParams } from "./typeData";

export function getExpiredDate(timestamp: number) {
  const currentDate = Date.now();
  const differentInMilliseconds = timestamp - currentDate;
  const diffInDays = Math.ceil(differentInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInDays;
}

export const truncate = ({text,startChars,endChars,maxLength,}: TruncateParams) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
}

export function calculateDateDifference(startTimestamp: number, endTimeStamp: number) {
  const diffInMs = Math.abs(endTimeStamp - startTimestamp);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  if (diffInDays > 0) {
    return `${diffInDays} day(s)`;
  }

  const diffInHours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
  const diffInMinute = Math.floor((diffInMs / (1000 * 60)) % 60);
  const diffInSecond = Math.floor((diffInMs / 1000) % 60);

  return `${diffInHours} hour(s), ${diffInMinute} minute(s), ${diffInSecond} second(s)`;
}

export function timestampToDatetimeLocal(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
