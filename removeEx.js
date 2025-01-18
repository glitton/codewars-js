function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let currentDateObject = new Date(currentDate);
  let expirationDateObject = new Date(expirationDate);

  if (enteredCode === correctCode && currentDateObject < expirationDateObject) {
    return true;
  } else {
    return false;
  }
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"));
