function Numbers(number) {
  if (number > 0) {
    return "Number is Postive";
  } else if (number < 0) {
    return "Number is Negative";
  } else {
    return "Number is Neutral";
  }
}
let res = Numbers(-10);
console.log(res);
