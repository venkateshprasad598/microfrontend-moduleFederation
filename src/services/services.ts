import moment from "moment";

export const numberWithCommas = (number: number) => {
  return number.toLocaleString("en-US");
};

export const millionBillionConverter = (labelValue: any, type?: string) => {
  let million = "M";
  if (type == "full") {
    million = "Million";
  }
  return Math.abs(Number(labelValue)) >= 1.0e12
    ? (Number(labelValue) / 1.0e12).toFixed(2) + "T"
    : Math.abs(Number(labelValue)) >= 1.0e9
    ? (Number(labelValue) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Number(labelValue) / 1.0e6).toFixed(2) + million
    : // Three Zeroes for Thousand
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Number(labelValue) / 1.0e3).toFixed(2) + "k"
    : Number(labelValue).toFixed(2);
};

const dateFormatsToCheck = ["MMMM Do YYYY, h:mm A", "MMMM Do YYYY, HH:mm"];

export const isDateStringValid = (dateString: string) => {
  for (const format of dateFormatsToCheck) {
    const parsedDate = moment(dateString, format, true);
    if (parsedDate.isValid()) {
      return true; // Return true if a valid format is found
    }
  }
  return false;
};

export const serialize = (obj: any) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
