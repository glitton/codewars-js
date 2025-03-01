function calculate(arr1, arr2) {
  return (
    arr1.reduce((acc1, curr1) => acc1 + curr1) +
    arr2.reduce((acc2, curr2) => acc2 + curr2)
  );
}
