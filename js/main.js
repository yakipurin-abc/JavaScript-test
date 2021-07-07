const array = [2, 4, 7, 5, 4, 8];
const result = array.filter(function(item, i, self) {
        return self.indexOf(item) === i;
});
console.log(result);

function leapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(leapYear(2020));
console.log(leapYear(2021));