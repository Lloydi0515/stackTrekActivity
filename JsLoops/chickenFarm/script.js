function nbYear(p0, percent, aug, p) {
   let year;
  for (year = 1; p0 < p; year++){
    p0 += parseInt(p0 * (percent / 100))
    p0 += aug
    
  }
 return year - 1
}
// console.log(nbYear(1500, 5, 100, 5000));









// Bale gusto raw po natin isolve kung ilang taon ba yung kailangan hintayin para maging equal or lagpas dun sa p value yung number of chickens dun sa farm.
// Starting value ng chicken at year 0 is 100.
// Tapos every year, gagamitin natin yung formula para macompute kung ilan yung number of chicken na makukuha after 1 year.
// Yung formula is
// number of chickens = current number of chickens + current number of chickens * percent of increase + chickens being born / dying
// Dapat mabilang niyo kung ilang years ba kailangan para maachieve yung certain number of chickens gamit yung loop.
// Every iteration, icocompute niyo po yung number of chickens sa current year gamit yung formula.
// Tas ulit lang po ng ulit hanggang lumagpas or mag-equal yung number of chickens dun sa kailangan maachieve.