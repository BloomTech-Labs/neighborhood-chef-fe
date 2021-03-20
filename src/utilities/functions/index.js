import moment from 'moment';

import bbq from '../../assets/bbq.jpg';
import cats from '../../assets/cats.jpg';
import dogs from '../../assets/dogs.jpg';
import kids from '../../assets/kids.jpg';
import picnic from '../../assets/picnic.jpg';
import wineCheese from '../../assets/wine-cheese.jpg';
import fullCourse from '../../assets/full-course.jpg';

export const timeAgo = (dateCreated) => {
  let showType = '';
  const elapsedTime = Math.ceil((new Date() - dateCreated) / 1000);
  let configuredTime;
  if (elapsedTime < 60) {
    showType = 'second';
    configuredTime = elapsedTime;
  } else if (elapsedTime < 3600) {
    showType = 'minute';
    configuredTime = Math.floor(elapsedTime / 60);
  } else if (elapsedTime < 86400) {
    showType = 'hour';
    configuredTime = Math.floor(elapsedTime / 3600);
  } else {
    showType = 'day';
    configuredTime = Math.floor(elapsedTime / 86400);
  }
  if (configuredTime !== 1) showType = showType + 's';
  return `${configuredTime} ${showType} ago`;
};

export const restoreSavedModifiers = (arr1, arr2, cb) => {
  let arr = [];
  let seen = {};

  arr2.forEach((mod) => {
    seen[mod.id] = mod;
  });
  arr1.forEach((mod) => {
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
  let ampm = H < 12 ? 'AM' : 'PM';
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const parseTime = (start, end) => ({
  formattedDate: moment(parseInt(start)).format('MMM Do, YYYY'),
  weekday: moment(parseInt(start)).format('ddd'),
  day: moment(parseInt(start)).format('DD'),
  monthShort: moment(parseInt(start)).format('MMM'),
  monthYear: moment(parseInt(start)).format('MMM YYYY'),
  startTime: moment(parseInt(start)).format('h:mm a'),
  endTime: moment(parseInt(end)).format('h:mm a'),
  commentTime: moment(parseInt(start)).format('MMM Do, h:mm a'),
  unixStart: start,
  formDate: moment(parseInt(start)).format('YYYY-MM-DD'),
  formStartTime: moment(parseInt(start)).format('HH:mm:ss'),
  formEndTime: end ? moment(parseInt(end)).format('HH:mm:ss') : '',
});

export const showOptions = (arr1, arr2) => {
  if (arr1.length > 0 || arr2.length > 0) {
    return true;
  }
  return false;
};

export const chooseDefaultPicture = (char) => {
  const category_id = char.charCodeAt(0) % 8;
  switch (category_id) {
    case 1:
      return bbq;
    case 2:
      return picnic;
    case 3:
      return wineCheese;
    case 4:
      return fullCourse;
    case 5:
      return kids;
    case 6:
      return dogs;
    case 7:
      return cats;
    default:
      return picnic;
  }
};

export const makeInitials = (user) => {
  return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName.slice(0, 1).toUpperCase()}`;
};
