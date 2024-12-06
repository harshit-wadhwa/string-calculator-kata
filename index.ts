function extractNegativeNos(arr: Array<number>) {
  return arr.filter(el => el < 0).toString()
}

function isDelimeterAvailableInInputString(str: string): boolean {
  return str.startsWith('//')
}

function add(numbers: string): number {
  if (!numbers) throw new TypeError()
  let delimeter = ','
  if (isDelimeterAvailableInInputString(numbers)) {
    delimeter = numbers[2] 
    numbers = numbers.slice(4)
  }
  const regex = new RegExp(`[${delimeter}\\n]`)
  const arr: Array<number> = numbers.split(regex).map(num => parseInt(num))
  const negNos = extractNegativeNos(arr)
  if (negNos) throw new TypeError(`negative numbers not allowed ${negNos}`)
  return arr.reduce((acc, curr) => acc + curr, 0)
}

export default add