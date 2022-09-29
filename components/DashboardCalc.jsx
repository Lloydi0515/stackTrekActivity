function DashboardCalc(sleepTime, wakeTime) {
  const wake = new Date(wakeTime);
  const sleep = new Date(sleepTime);
  // console.log(sleep)

  // return (((wake - sleep) / 3600000).toFixed(2))
  const sleepHours = ((wake - sleep) / 3600000).toFixed(2);
  // console.log(sleepHours)
  return sleepHours;
}

export default DashboardCalc;
