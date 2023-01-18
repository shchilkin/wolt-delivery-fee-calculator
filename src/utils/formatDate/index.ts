// format date to "yyyy-MM-ddThh:mm"
const formatDate = (date: Date): string => {
  return (
    date.getFullYear() +
    "-" +
    //    add zero before month number if month is less than 10
    (date.getMonth() + 1 < 10 ? "0" : "") +
    (date.getMonth() + 1) +
    "-" +
    //    add zero before day number if day is less than 10
    (date.getDate() < 10 ? "0" : "") +
    date.getDate() +
    "T" +
    //    add zero before hour number if hour is less than 10
    (date.getHours() < 10 ? "0" : "") +
    date.getHours() +
    ":" +
    //    add zero before minute number if minute is less than 10
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()
  );
};

export default formatDate;
