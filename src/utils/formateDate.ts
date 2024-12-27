export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit', // Corrected to "2-digit"
    month: 'short', // Corrected to "short"
    year: 'numeric', // Corrected to "numeric"
  };

  return date.toLocaleDateString('en-US', options);
}
