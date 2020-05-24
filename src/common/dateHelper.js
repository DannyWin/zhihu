function dateConvert(dateStamp) {
  const now = new Date().getTime();
  const timer = (now - dateStamp) / 1000;
  if (timer <= 10 * 60) {
    return "刚刚";
  } else if (timer <= 3600) {
    return Math.floor(timer / 60) + "分钟前";
  } else if (timer > 3600 && timer <= 24 * 3600) {
    return Math.floor(timer / 3600) + "小时前";
  } else if (timer > 24 * 3600 && timer <= 31 * 24 * 3600) {
    return Math.floor(timer / 3600 / 24) + "天前";
  } else if (timer > 31 * 24 * 3600 && timer <= 12 * 31 * 24 * 3600) {
    return Math.floor(timer / 3600 / 24 / 31) + "月前";
  } else if (timer > 12 * 30 * 24 * 3600) {
    return Math.floor(timer / 3600 / 24 / 30 / 12) + "年前";
  } else {
    const date = new Date(dateStamp);
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
    return date.getFullYear + "-" + month + "-" + day;
  }
}

export default dateConvert;
