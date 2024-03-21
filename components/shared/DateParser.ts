export function ParseDate(dateString: string): Date {
  const [monthString, dayString, yearString] = dateString.split('/')

  // Ensure valid number strings for month, day, and year
  const month = parseInt(monthString, 10)
  const day = parseInt(dayString, 10)
  const year = parseInt(yearString, 10)

  // Check if all parts are valid integers
  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    return new Date(year, month - 1, day)
  }

  // Note: JavaScript months are 0-indexed, so we subtract 1 from the month
  return new Date(dateString)
}

export function FormatDate(dateString: Date): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
  })
}
