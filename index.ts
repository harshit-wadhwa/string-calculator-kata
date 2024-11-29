function add(numbers: string): number {
  if (!numbers) throw new TypeError()
  let delimeter = ','
  if (numbers.startsWith('//')) {
    delimeter = numbers[2] 
    numbers = numbers.slice(4)
  }
  const regex = new RegExp(`[${delimeter}\\n]`)
  const arr: Array<number> = numbers.split(regex).map(num => parseInt(num))
  return arr.reduce((acc, curr) => acc + curr, 0)
}

export default add