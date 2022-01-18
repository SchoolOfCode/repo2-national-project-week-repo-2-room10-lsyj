export function generateDate() {
  const today = new Date();

  const dd = String(today.getDate()); //get day

  const monthNumber = String(today.getMonth()); //get month number
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mm = months[monthNumber]; //get month text

  return dd + " " + mm; //01 Jan
}
