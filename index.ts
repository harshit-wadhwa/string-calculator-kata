function add(numbers: string): number {
  if (!numbers) throw new TypeError()
  const arr: Array<number> = numbers.split(',').map(num => parseInt(num))
  return arr.reduce((acc, curr) => acc + curr, 0)
}

export default add