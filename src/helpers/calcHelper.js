const resultCalc = (installmentsValue, contractValue, numberOfInstallments) => {
  const amount = installmentsValue * numberOfInstallments;

  const x = amount / contractValue;

  const pow = Math.pow(x, 1 / 7);

  const anualInterest = (pow - 1) * 100;

  const monthlyInterest = anualInterest / 12;

  return monthlyInterest.toFixed(2);
};

export { resultCalc };
