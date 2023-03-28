export function fixNumber(n: number) {
  return (+n.toFixed(2)).toLocaleString();
}