const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatNumber(value) {
  return formatter.format(value);
}

export { formatNumber };
