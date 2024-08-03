import { format, parseISO } from 'date-fns';

/**
 * Formats a date string to 'MMMM d, yyyy'.
 * 
 * @param dateString - The date string to format.
 * @returns The formatted date string or an empty string if the input is undefined.
 */
export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
};
