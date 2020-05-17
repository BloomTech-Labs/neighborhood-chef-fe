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
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i].id === arr2[j].id) {
        arr1[i].active = true;
        arr.push(arr1[i]);
      }
    }
    cb(arr);
  }
};
