function calMonthRecursion(money, rate, n = 0) {
  if (money + money * (rate / 100) * n == money * 2) {
    return n;
  }
  return calMonthRecursion(money, rate, n + 1);
}

function calMonth(money, rate) {
  var n = 0;
  while (money + money * (rate / 100) * n != money * 2) {
    n++;
  }
  return n;
}
