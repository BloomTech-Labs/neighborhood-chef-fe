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
  var options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(parseInt(date)); //formats 13 digit UNIX date provided by database
  const simplifiedDate = formattedDate.toLocaleDateString("en-us", options); // reduces to just YYYY MM, DD format
  const addStartTime = new Date(`${simplifiedDate} ${start}`); // creates new date using start_time value for time, instead of 00:00:00 default
  let displayedEndTime, displayedStartTime;
  if (!!end) {
    const addEndTime = new Date(`${simplifiedDate} ${end}`);
    displayedEndTime = addEndTime
      .toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })
      .toLowerCase(); //formatting just time in 12 hr format with lower case am pm
  }
  displayedStartTime = addStartTime
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })
    .toLowerCase();
  const getWeekday = addStartTime.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const getDay = addStartTime.toLocaleDateString("en-us", {
    day: "numeric",
  });
  const getMonth = addStartTime.toLocaleDateString("en-us", {
    month: "short",
  });

  return {
    formattedDate: simplifiedDate,
    weekday: getWeekday,
    day: getDay,
    monthShort: getMonth,
    startTime: displayedStartTime,
    endTime: displayedEndTime,
    unixStart: addStartTime.getTime(),
  };
};
