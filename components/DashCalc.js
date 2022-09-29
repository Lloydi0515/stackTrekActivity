const calcStars = (points) => {
  return {
    toAdd: points,
    toSubtract: points - (points - 35),
  };
};

export default calcStars;

// const calcStars = (points) => {
//   return {
//     toAdd: Math.floor(points + 5),
//     toSubtract: points - (points - 35),
//   };
// };
