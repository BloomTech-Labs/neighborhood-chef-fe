import moment from "moment";

export const timeAgo = (dateCreated) => {
  let showType = "";
  const elapsedTime = Math.ceil((new Date() - dateCreated) / 1000);
  let configuredTime;
  if (elapsedTime < 60) {
    showType = "second";
    configuredTime = elapsedTime;
  } else if (elapsedTime < 3600) {
    showType = "minute";
    configuredTime = Math.floor(elapsedTime / 60);
  } else if (elapsedTime < 86400) {
    showType = "hour";
    configuredTime = Math.floor(elapsedTime / 3600);
  } else {
    showType = "day";
    configuredTime = Math.floor(elapsedTime / 86400);
  }
  if (configuredTime !== 1) showType = showType + "s";
  return `${configuredTime} ${showType} ago`;
};

export const restoreSavedModifiers = (arr1, arr2, cb) => {
  let arr = [];
  let seen = {};

  arr2.forEach((mod) => {
    seen[mod.id] = mod;
  });
  arr1.filter((mod) => {
    if (mod.id in seen) {
      mod.active = true;
      arr.push(mod);
    }
  });
  return cb(arr);
};

export const convertTime = (time24) => {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h = H % 12 || 12;
  h = h < 10 ? h : h;
  let ampm = H < 12 ? "AM" : "PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const parseTime = (start, end) => ({
  formattedDate: moment(parseInt(start)).format("MMM Do, YYYY"),
  weekday: moment(parseInt(start)).format("ddd"),
  day: moment(parseInt(start)).format("DD"),
  monthShort: moment(parseInt(start)).format("MMM"),
  startTime: moment(parseInt(start)).format("h:mm a"),
  endTime: moment(parseInt(end)).format("h:mm a"),
  unixStart: start,
});

export const convertTimeAndDate = (event) => ({
  date: moment(parseInt(event.startTime)).format("YYYY-MM-DD"),
  startTime: moment(parseInt(event.startTime)).format("HH:mm:ss"),
  endTime: event.endTime
    ? moment(parseInt(event.endTime)).format("HH:mm:ss")
    : "",
});
