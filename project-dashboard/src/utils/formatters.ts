/**
 * Formats a number with specified decimal places and adds a thousands separator
 */
export const formatNumber = (value: number, decimals = 2): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Formats a percentage change value with a + or - sign
 */
export const formatChange = (value: number): string => {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${formatNumber(value)}%`;
};

/**
 * Returns a CSS class based on whether a value is positive or negative
 */
export const getChangeColorClass = (value: number, isPositiveGood = true): string => {
  if (value === 0) return 'text-gray-500';
  const isPositive = value > 0;
  
  if (isPositiveGood) {
    return isPositive ? 'text-green-600' : 'text-red-600';
  } else {
    return isPositive ? 'text-red-600' : 'text-green-600';
  }
};

/**
 * Truncates text if longer than maxLength and adds ellipsis
 */
export const truncateText = (text: string, maxLength = 25): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};