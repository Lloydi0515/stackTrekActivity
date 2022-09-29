const calcMoney = (points) => {
  return {
    toSubtract: points - (points - 100),
    toAdd: points,
  };
};

export default calcMoney;

// const calcMoney = (points) => {
//   const updateLatestStars = "";
//   if (updateLatestStars < 100) {
//     console.log(updateLatestStars);
//     return alert("Insufficient Stars Points");
//   } else {
//     return {
//       toSubtract: points - (points - 100),
//       toAdd: Math.floor(points + 5),
//     };
//   }
// };

// const calcMoney = (points) => {
//   return {
//     toSubtract: points - (points - 100),
//     toAdd: Math.floor(points + 5),
//   };
// };

// const calcMoney = (points) => {
//   return {
//     toSubtract: points - (points - 100),
//     toAdd: points,
//   };
// };
