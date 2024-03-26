export const formatToDollars = (qty: number): string => {
  return qty.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};