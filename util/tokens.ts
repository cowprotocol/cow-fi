export function formatUSD(number) {
  // Convert number to string
  const amount = number.toString()

  // Separate whole number and decimal part
  let [wholeNumber, decimalPart] = amount.split('.')

  // Add commas for thousands separator
  wholeNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // If there is no decimal part, add ".00" to the end
  if (!decimalPart) {
    decimalPart = '00'
  } else {
    // If decimal part has only one digit, append a trailing zero
    decimalPart = decimalPart.length === 1 ? decimalPart + '0' : decimalPart.slice(0, 2)
  }

  // Format the amount with the currency symbol
  const formattedAmount = '$ ' + wholeNumber + '.' + decimalPart

  return formattedAmount
}
