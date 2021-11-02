function calSalaryRecursion(salary, n) {
  if (n == 1 && n >= 0) {
    return salary;
  }
  salary = salary + salary * 0.1;
  return calSalary(salary, n - 1);
}

function calSalary(salary, n) {
  for (let i = 0; i < n; i++) {
    salary = salary + salary * 0.1;
  }
  return salary;
}
