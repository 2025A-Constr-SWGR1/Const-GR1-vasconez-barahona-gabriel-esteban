exports.suma = (a, b) => {
  const n1 = Number(a);
  const n2 = Number(b);
  if (isNaN(n1) || isNaN(n2)) throw new Error("Argumentos inválidos");
  return n1 + n2;
};