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

export const parseTime = (date, start, end) => {
  const d = moment.unix(parseInt(date) / 1000);
  const reformat = moment(d).format("MMM Do, YYYY");
  const standard = moment(d).format("YYYY-MM-DD");
  const dtStart = moment(`${standard} ${start}`, "YYYY-MM-DD HH:mm:ss");
  const dtEnd = moment(`${standard} ${end}`, "YYYY-MM-DD HH:mm:ss");
  return {
    formattedDate: reformat,
    weekday: d.format("ddd"),
    day: d.format("DD"),
    monthShort: d.format("MMM"),
    startTime: dtStart.format("h:mm a"),
    endTime: moment(dtEnd).format("h:mm a"),
    unixStart: moment(dtStart).format("x"),
  };
};
