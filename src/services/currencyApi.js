export async function fetchCurrencies() {
  const response = await fetch("https://api.frankfurter.dev/v2/currencies");
  const data = await response.json();

  return Object.entries(data)
    .map(([code, info]) => ({
      code,
      name: info.name,
    }))
    .sort((a, b) => a.code.localeCompare(b.code));
}

export async function fetchExchangeRate(fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) return 1;

  const response = await fetch(
    `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`
  );
  const data = await response.json();

  return data.rate;
}