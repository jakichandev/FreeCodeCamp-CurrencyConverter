export function swapFirstSecond<T>(currencies: T[]): T[] {
  const swapping = [currencies[0], currencies[1]].sort();
  return [...swapping, ...currencies.slice(2)];
}